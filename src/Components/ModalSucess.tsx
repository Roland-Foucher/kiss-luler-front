import React from "react";
interface IProps {
    showModal: boolean
    closeModal: () => void
}

export default function ModalSucess({ showModal, closeModal }: IProps) {

    return (
        showModal ? (
            <>
                <div className="fixed bottom-1/3 right-1/3 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                    <div className="mt-3 text-center">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7">
                                </path>
                            </svg>
                        </div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Successfull</h3>
                        <div className="mt-2 px-7 py-3">
                            <p className="text-sm text-gray-500">Merci pour votre contribution, <br /> Vous pouvez la retrouver sur votre profil</p>
                        </div>
                        <div className="items-center px-4 py-3">
                            <button
                                onClick={() => closeModal()}
                                className="px-4 py-2 bg-green-500 text-white 
                            text-base font-medium rounded-md w-full 
                            shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
                                OK
                            </button>
                        </div>
                    </div>
                </div>

            </>
        ) : null


    )
}