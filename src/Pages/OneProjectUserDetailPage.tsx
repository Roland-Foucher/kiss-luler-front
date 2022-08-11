import { stat } from "fs";
import React, { useState } from "react";
import { useParams } from "react-router";
import { RouterParams } from "../App";
import { useGetOneUserProjectQuery } from "../App/API/authAPI";
import { Considerations } from "../App/entities/considerations";
import { ConsiderationStatus } from "../App/entities/enum";
import ModalAddContribution from "../Components/ModalAddContribution";








export default function OneProjectUserDetailPage() {


  const { id } = useParams<RouterParams>();

  const [showModalAddContribution, setShowModalAddContribution] = useState(false);


  const { data } = useGetOneUserProjectQuery(Number(id))

  const classNameStatus = (status?: ConsiderationStatus): string | undefined => {
    switch (status?.toString()) {
      case "INPROGRESS":
        return "text-primary";
      case "READY":
        return "text-success";
      case "CLOSED":
        return "text-danger";
    }
  }

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
                  <div
                    className=" border-t border-b border-redBull grid grid-cols-1 overflow-hidden group sm:grid-cols-3"

                  >
                    <div className="relative">
                      <img
                        className="absolute inset-0 object-cover w-full h-full"
                        src="https://cdn.pixabay.com/photo/2014/10/20/21/17/cd-495733_960_720.jpg"
                        alt=""
                      />
                    </div>

                    <div className="p-3 sm:col-span-2">
                      <h2>Contribution</h2>
                      <h2 className={classNameStatus(item.status)}>{item.status}</h2>
                      <ul className="mt-8" >
                        <li
                          className="inline-block items-center px-3 py-1 text-xs font-medium rounded-full"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {item.considAmount}€
                        </li>

                        <li
                          className="inline-block items-center px-3 py-1 text-xs font-medium rounded-full"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                          </svg>
                          {item.title}
                        </li>

                        {item.status?.toString() === "INPROGRESS" &&
                          <li
                          className="inline-block items-center px-3 py-1 text-xs font-medium rounded-full"
                          >
                            <button className="btn btn-primary" >
                              edit
                            </button></li>}

                      </ul>

                      <h5 className="mt-4 font-bold"> {item.description}</h5>

                      <p className="mt-2 text-sm text-gray-500">

                      </p>


                    </div>

                  </div>

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
                      onClick = {() => setShowModalAddContribution(true)}
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
      {showModalAddContribution &&  
      <ModalAddContribution 
        setShowModal = {setShowModalAddContribution}
        projectId = {Number(id)}
        
        />}




    </>
  )
}