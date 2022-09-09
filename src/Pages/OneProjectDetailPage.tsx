import { useState } from "react";
import { useParams } from "react-router";
import { RouterParams } from "../App";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useGetOneProjectQuery } from "../App/API/projects";

import { useAddConsiderationMutation, useEditConsiderationMutation } from "../App/API/userConsiderations";
import { Considerations } from "../App/entities/considerations";
import { useAppSelector } from "../App/hooks";
import ModalContributions from "../Components/ModalContributions";
import ModalLogin from "../Components/ModalLogin";
import ContributionComponent from "../Components/OneProjectComponents/ContributionComponents";
import ModalAddEditContribution from "../Components/OneProjectComponents/ModalAddEditContribution";
import { scrollToTop } from "../App/hooks";


interface Props {
  isUser: boolean
  queryType: Function
}


export default function OneProjectDetailPage({ isUser, queryType }: Props) {
  const user = useAppSelector(state => state.auth.user);

  const { id } = useParams<RouterParams>();
  const { data, isLoading } = queryType(Number(id))

  const [top, setTop] = useState(true)

  top && scrollToTop()

  const [showModalAddContribution, setShowModalAddContribution] = useState(false);
  const [showModalEditContribution, setShowModalEditContribution] = useState(false);

  // préremplie le formulaire pour éditer la considération
  const [editConsideration, setEditConsideration] = useState({} as Considerations)





  return (
    <>

      {isLoading && <div className="text-center mt-10">
        <PropagateLoader color="#f4845f" />
      </div>}

      <section className="mx-14 ">
        <header className="flex font-light my-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-45 text-yellowBull" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
            <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
          </svg>
          <h2 className="ml-2   font-newFont text-2xl ">Projet</h2>
        </header>
        <aside
          className="shadow-sm rounded-sm overflow-hidden sm:grid sm:grid-cols-2 sm:items-center bg-gray-100"
        >
          <div className="p-8 md:p-12 lg:px-10 lg:py-24">
            <div className="max-w-xl mx-auto text-start sm:text-left ">
              <div className="flex justify-between">
                <h2 className="lg:text-4xl font-newFont font-medium text-gray-900 md:text-3xl">
                  {data?.title}
                </h2>

                <p className="inline-flex items-center font-newFont text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="text-blue-400 lg:w-12 lg:h-12 mr-3 md:w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                  {data?.amountInit}€
                </p>
              </div>


              <p className="hidden text-gray-700 md:mt-4 md:block font-newFont text-2xl bg-white/70 p-4 shadow-sm rounded-md">
                {data?.description}
              </p>

              <div className="mt-6 md:mt-8 inline-flex items-center font-newFont text-lg font-medium ">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="text-blue-400 lg:w-10 lg:h-10 mr-3 md:w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                {data?.considerationsAmount} / {data?.amountInit} €
                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 lg:h-10 lg:w-10 mx-4 md:w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {data?.date == "Closed" ? <span className="text-red-500 font-bold">{data?.date}</span> : <span className="text-green-500 font-bold">{data?.date}</span>}
              </div>

              <div className="border-y p-2 border-gray-400/50 mt-4 md:mt-8 text-gray-500  lg:flex lg:justify-end md:justify-center md:flex">
                <p className="font-light">Projet diffusé par <span className="md:text-lg ml-2 bg-clip-text lg:text-3xl text-transparent bg-gradient-to-r from-redBull to-yellowBull tracking-widest font-newFont">
                  {data?.userName}
                </span>  </p>
              </div>



            </div>


          </div>

          {data?.photo ? <img
            alt="photo du projet"
            src={data.photo}
            className="object-cover w-full h-full sm:h-[calc(100%_-_2rem)] md:h-[calc(100%_-_4rem)] sm:rounded-tl-[30px] md:rounded-tl-[60px] sm:self-end"
          /> : <img
            alt="photo du projet"
            src={process.env.PUBLIC_URL + '/img/head.jpg'}
            className="object-cover w-full h-full sm:h-[calc(100%_-_2rem)] md:h-[calc(100%_-_4rem)] sm:rounded-tl-[30px] md:rounded-tl-[60px] sm:self-end"
          />}


        </aside>

        {isUser ? <button
          onClick={() => isUser ? setShowModalAddContribution(true) : null}
          className="mt-3 group relative flex justify-center py-2 px-2 w-full bg-redBull  font-light text-lg text-white  rounded-sm  hover:ring-2 focus: mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Ajouter une contribution
        </button> :

          user ?

            <ModalContributions isUser={false} queryType={useGetOneProjectQuery} />

            :
            <>
              <div className="flex-col">
                <p>Connecter vous pour pouvoir contribuer à un projet</p>
                <ModalLogin />
              </div>

            </>
        }


        <article className="flex font-light mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-45 text-orangeBull" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
            <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
          </svg>
          <h2 className="ml-2 font-newFont text-2xl ">Contributions disponibles</h2>
        </article>





        {/* Affichage du formulaire de création de contributions */}
        {
          showModalAddContribution &&
          <ModalAddEditContribution
            queryType={useAddConsiderationMutation}
            setShowModal={setShowModalAddContribution}
            projectId={Number(id)}
            consideration={{}}
            labelButton="Ajouter la contribution"
          />
        }
        {/* Affichage du formulaire d'édition de contributions */}
        {
          showModalEditContribution && <ModalAddEditContribution
            queryType={useEditConsiderationMutation}
            setShowModal={setShowModalEditContribution}
            projectId={Number(id)}
            consideration={editConsideration}
            labelButton="Modifier la contribution"
          />
        }

        {/* Liste des considérations */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-3 flex-wrap md:grid md:grid-cols-2  md:gap-3  mt-5">
          {data?.consideration?.map((item: Considerations) =>
            <ContributionComponent
              isUser={isUser} // le user peut éditer ses considérations
              item={item}
              setEditConsideration={setEditConsideration}
              setShowModalEditContribution={setShowModalEditContribution} 
              isActive={false}            
              />
          )}
        </div>

      </section>

    </>
  )
}