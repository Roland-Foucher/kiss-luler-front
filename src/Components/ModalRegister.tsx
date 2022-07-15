import React, { useState } from "react";

import { FloatingLabel, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { useUserRegisterMutation } from "../App/API/authAPI";
import { User } from "../App/entities/login";


export default function ModalLogin() {

    const [showModal, setShowModal] = React.useState(false);
    const dispatch = useDispatch();

    const [postRegister, postQuery] = useUserRegisterMutation();
    const [form, setForm] = useState<User>({} as User);

    const handleSubmit = async (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();
        console.log(form)
        const data = await postRegister(form).unwrap();
        console.log(data);
        
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
            {/* <div onClick={() => setShowModal(true)} >
                <img className="cursor-pointer inline-block object-cover w-12 h-12 rounded-full avatar avatar-48 text-white  rounded-circle p-2"
                    src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg" alt="profile"></img>
            </div> */}

            <button onClick={() => setShowModal(true)} className=" ml-4 w-20 rounded-md  p-2 text-sm text-grey-600 shadow-md hover:text-white  hover:bg-gray-600 hover:duration-500 bg-gray-200 p-2">Créer</button>

            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl ">
                            {/*content*/}
                            <div className=" bg-neutral-100/80 border-x border-red-500 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                                <div className="flex justify-end p-2">
                                    <button onClick={() => setShowModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                                {/*header*/}

                                {/*body*/}
                                <div className="min-h-full flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
                                    <div className="max-w-md w-full space-y-8">

                                        <div>
                                            <img className=" mx-auto animate-bounce object-cover w-14 h-14 rounded-full avatar avatar-48 rounded-circle p-2 border-1 border-red-500"
                                                src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg" alt="profile"></img>
                                            <h2 className="mt-4 text-center text-3xl font-light  text-red-500 tracking-widest">Hello</h2>
                                        </div>

                                        <form className="mt-8 space-y-4" action="#" method="POST" onSubmit={handleSubmit}>
                                            <input type="hidden" name="remember" defaultValue="true" />
                                            <div>

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
                                                            type="birthdate"
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
                                                    className="group relative w-full flex justify-center py-2 px-4   font-light text-md text-white   rounded-md bg-red-500 opacity-90 hover:opacity-100 hover:ring-2 focus: mr-1 mb-1 ease-linear transition-all duration-150"
                                                >
                                                    Me créer un compte
                                                </button>

                                                {postQuery.isError && <p>{(postQuery.error as any).data.error}</p>
                                                }
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
