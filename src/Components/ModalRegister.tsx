import React, { useState } from "react";

import { FloatingLabel, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router";

import { useUserRegisterMutation } from "../App/API/authAPI";
import { User } from "../App/entities/login";


export default function ModalRegister() {

  const [showModal, setShowModal] = React.useState(false);
  const navigate = useNavigate();

  const [postRegister, postQuery] = useUserRegisterMutation();
  const [form, setForm] = useState<User>({} as User);

  const handleSubmit = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    try {
      const data = await postRegister(form).unwrap();
      console.log(data);
      setShowModal(false)

    } catch (error) {
      console.log(error)
    }

  }

  const handleChange = (event: React.FormEvent<EventTarget>) => {
    let target = event.target as HTMLInputElement;
    let name = target.name;
    let value = target.value
    let change = { ...form, [name]: value }
    setForm(change)
  }
  return (
    <>


      <button onClick={() => setShowModal(true)} className="block w-full px-12 py-3 text-md font-medium bg-white rounded shadow text-rose-gray-300 sm:w-auto hover:text-orange-500 active:text-rose-500 focus:outline-none focus:ring" >
        Créer un compte
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" data-name="modal"
          >
            <div className=" w-auto mx-auto max-w-3xl ">
              {/*content*/}
              <div className=" bg-neutral-100/80 border-x border-orangeBull  shadow-lg relative flex flex-col w-full outline-none focus:outline-none" >
                <div className="flex justify-end p-2">
                  <button onClick={() => setShowModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                </div>
                {/*header*/}

                {/*body*/}
                <div className="min-h-full flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
                  <div className="max-w-md w-full space-y-8 ">

                    <div>
                      <div className="block lg:hidden h-8 w-auto ">
                        <div className="flex items-center -space-x-8 hover:space-x-1">
                          <button
                            className="z-10 block p-4 text-green-700 transition-all bg-[#f25c54] border-red-400 border-2  rounded-full active:bg-green-50 hover:scale-110 focus:outline-none focus:ring"
                            type="button"
                          >
                            <p className='w-4 h-4'></p>
                          </button>

                          <button
                            className="z-20 block p-4 text-blue-700 transition-all bg-[#f4845f] border-orange-400 border-2  rounded-full active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring"
                            type="button"
                          >
                            <p className='w-4 h-4'></p>
                          </button>

                          <button
                            className="z-30 block p-4 text-red-700 transition-all bg-[#f7b267] border-yellow-300/40 border-2 rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                            type="button"
                          >
                            <p className='w-4 h-4'></p>
                          </button>
                        </div>
                      </div>

                      <div className="hidden lg:block h-8 w-auto">
                        <div className="flex items-center -space-x-8 hover:space-x-1">
                          <button
                            className="z-10 block p-4 text-green-700 transition-all bg-[#f25c54] border-red-400 border-2  rounded-full active:bg-green-50 hover:scale-110 focus:outline-none focus:ring"
                            type="button"
                          >
                            <p className='w-4 h-4'></p>
                          </button>

                          <button
                            className="z-20 block p-4 text-blue-700 transition-all bg-[#f4845f] border-orange-400 border-2  rounded-full active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring"
                            type="button"
                          >
                            <p className='w-4 h-4'></p>
                          </button>

                          <button
                            className="z-30 block p-4 text-red-700 transition-all bg-[#f7b267] border-yellow-300/40 border-2 rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                            type="button"
                          >
                            <p className='w-4 h-4'></p>
                          </button>
                        </div>
                      </div>
                      <p className="mt-12 ml-8 bg-transparent text-orange-400 text-lg font-bold">CréMule toi</p>
                    </div>


                    <form className="mt-8 space-y-4" action="#" method="POST" onSubmit={handleSubmit}>
                      <input type="hidden" name="remember" defaultValue="true" />
                      <div className="grid grid-cols-6 gap-6">



                        {/*Email*/}
                        <div className="col-span-6 sm:col-span-3">
                          <FloatingLabel controlId="floatingInput" label="Email*" className="mb-4 font-extralight">
                            <FormControl
                              placeholder="Email"
                              aria-label="Email"
                              aria-describedby="basic-addon1"
                              type="email"
                              name="email"
                              required
                              onChange={handleChange}
                            />
                          </FloatingLabel>
                        </div>
                        {/*Mot de passe*/}


                        <div className="col-span-6 sm:col-span-3">
                          <FloatingLabel controlId="floatingInput"
                            label="Mot de passe*" className="mb-4 font-extralight">
                            <FormControl
                              placeholder="Mot de passe"
                              aria-label="Mot de passe"
                              aria-describedby="basic-addon1"
                              type="password"
                              name="password"
                              required
                              onChange={handleChange}
                            />
                          </FloatingLabel>
                        </div>
                        {/*firstname*/}
                        <div className="col-span-6 sm:col-span-3">
                          <FloatingLabel controlId="floatingInput"
                            label="Prénom" className="mb-4 font-extralight">
                            <FormControl
                              placeholder="prénom"
                              aria-label="prénom"
                              aria-describedby="basic-addon1"
                              type="firstName"
                              name="firstName"
                              required
                              onChange={handleChange}
                            />
                          </FloatingLabel>
                        </div>
                        {/*lastname*/}
                        <div className="col-span-6 sm:col-span-3">

                          <FloatingLabel controlId="floatingInput"
                            label="Nom" className="mb-4 font-extralight">
                            <FormControl
                              placeholder="Nom"
                              aria-label="nom"
                              aria-describedby="basic-addon1"
                              type="lastName"
                              name="lastName"
                              required
                              onChange={handleChange}
                            />
                          </FloatingLabel>

                        </div>
                        {/*birthdate*/}
                        <div className="col-span-6 sm:col-span-3">
                          <FloatingLabel controlId="floatingInput"
                            label="Date de naissance" className="mb-4 font-extralight">
                            <FormControl
                              placeholder="Date de naissance"
                              aria-label="date de naissance"
                              aria-describedby="basic-addon1"
                              type="date"
                              name="birthdate"
                              required
                              onChange={handleChange}
                            />
                          </FloatingLabel>
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="group relative w-full flex justify-center py-2 px-4   font-light text-md text-white   rounded-md bg-gray-600/60  opacity-90 hover:opacity-100 hover:ring-2 focus: mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                          Me créer un compte
                        </button>

                        {postQuery.isError
                          && (postQuery.error as any).data?.errors
                          && <p>{(postQuery.error as any).data.errors[0].defaultMessage}</p>}
                        {postQuery.isError
                          && (postQuery.error as any).data?.error
                          && <p>{(postQuery.error as any).data.message}</p>}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null
      }
    </>
  );
}
