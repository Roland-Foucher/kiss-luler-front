import { useParams } from "react-router";
import { RouterParams } from "../../App";
import { useGetOneProjectQuery } from "../../App/API/projects";
import { Considerations } from "../../App/entities/considerations";
import ContributionComponent from "../../Components/OneProjectComponents/ContributionComponent";








export default function OneProjectDetailPage() {

  const { id } = useParams<RouterParams>();


  const { data } = useGetOneProjectQuery(Number(id))

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

                {data?.consideration?.map((item: Considerations) =>

                  <ContributionComponent
                    isUser={false}
                    item={item}
                    setEditConsideration={null}
                    setShowModalEditContribution={null}

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

                    {/* <div className="flex mt-2 -ml-0.5">
                                            <svg
                                                className="w-5 h-5 text-yellow-400"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg
                                                className="w-5 h-5 text-yellow-400"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg
                                                className="w-5 h-5 text-yellow-400"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg
                                                className="w-5 h-5 text-yellow-400"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg
                                                className="w-5 h-5 text-gray-200"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div> */}
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
                      type="submit"
                      className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-redBull rounded hover:bg-redBull/60"
                    >
                      Contribuer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

      </section>




    </>
  )
}