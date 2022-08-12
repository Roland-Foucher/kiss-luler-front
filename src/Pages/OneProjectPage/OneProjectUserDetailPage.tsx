import { useState } from "react";
import { useParams } from "react-router";
import { RouterParams } from "../../App";
import { useGetOneUserProjectQuery } from "../../App/API/authAPI"
import { useAddConsiderationMutation, useEditConsiderationMutation } from "../../App/API/userConsiderations";
import { Considerations } from "../../App/entities/considerations";
import ContributionComponent from "../../Components/OneProjectComponents/ContributionComponent";
import ModalAddContribution from "../../Components/OneProjectComponents/ModalAddEditContribution";








export default function OneProjectUserDetailPage() {

  const { id } = useParams<RouterParams>();

  const [showModalAddContribution, setShowModalAddContribution] = useState(false);
  const [showModalEditContribution, setShowModalEditContribution] = useState(false);
  const [editConsideration, setEditConsideration] = useState({} as Considerations)

  const { data } = useGetOneUserProjectQuery(Number(id))

  return (
    <>

      <section className="mx-14 h-full">


        <section>
          <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
            <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                <div className="">
                  <img
                    alt="Mobile Phone Stand"
                    className="object-cover "
                    src="https://cdn.pixabay.com/photo/2015/12/27/05/48/turntable-1109588_960_720.jpg"
                  />
                </div>

                {/* Liste des considérations */}
                {data?.consideration?.map((item: Considerations) =>

                  <ContributionComponent
                    isUser={true}
                    item={item}
                    setEditConsideration={setEditConsideration}
                    setShowModalEditContribution={setShowModalEditContribution}
                  />
                )}
              </div>

              <div className="sticky top-0">


                <div className="flex justify-between mt-8">
                  <div className="max-w-[35ch]">
                    <h1 className="text-2xl font-bold">
                      {data?.title}
                    </h1>

                    <p className="mt-0.5 text-sm">
                      Par {data?.userName}

                    </p>
                  </div>


                  <p className="text-lg font-bold">
                    119.99€
                  </p>
                </div>

                <details className="relative mt-4 group">
                  <summary className="block">
                    <div>
                      <div className="prose max-w-none group-open:hidden">
                        <p>
                          J'ai vraiment trop envie d'aller acheter pleins de cd allé soyez sympas donnez du bif
                        </p>
                      </div>


                    </div>
                  </summary>

                  <div className="pb-6 prose max-w-none">
                    <p>

                    </p>


                  </div>
                </details>

                <form className="mt-8">
                  <fieldset>
                    <legend className="mb-1 text-sm font-medium">Categorie</legend>

                    <div className="flow-root">
                      <div className="flex flex-wrap -m-0.5">
                        <label htmlFor="color_tt" className="cursor-pointer p-0.5">
                          <input type="radio" name="color" id="color_tt" className="sr-only peer" />

                          <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                            {data?.category}
                          </span>
                        </label>


                      </div>
                    </div>
                  </fieldset>



                  <div className="flex mt-24 ">


                    <button
                      type="button"
                      onClick={() => setShowModalAddContribution(true)}
                      className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-redBull rounded hover:bg-redBull/60"
                    >
                      Ajouter une contribution
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

      </section>
      {/* Affichage du formulaire de création de contributions */}
      {
        showModalAddContribution &&
        <ModalAddContribution
          queryType={useAddConsiderationMutation}
          setShowModal={setShowModalAddContribution}
          projectId={Number(id)}
          consideration={{}}
          labelButton="Ajouter la contribution"
        />
      }
      {/* Affichage du formulaire d'édition de contributions */}
      {
        showModalEditContribution && <ModalAddContribution
          queryType={useEditConsiderationMutation}
          setShowModal={setShowModalEditContribution}
          projectId={Number(id)}
          consideration={editConsideration}
          labelButton="Modifier la contribution"
        />
      }

    </>
  )
}