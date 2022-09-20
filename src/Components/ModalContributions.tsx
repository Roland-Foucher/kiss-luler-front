import React, { useState } from "react";
import { Considerations } from "../App/entities/considerations";
import { useParams } from "react-router";
import { RouterParams } from "../App";
import { useBuyConsiderationProjectMutation } from "../App/API/projects";
import { useAppSelector } from "../App/hooks";
import ModalSucess from "./ModalSucess";
import ContributionComponent from "./OneProjectComponents/ContributionComponents";

interface Props {
    isUser: boolean
    queryType: Function
}


export default function ModalContributions({ isUser, queryType }: Props) {

    const [showModalSaveContribution, setShowModalSaveContibution] = React.useState(false);
    const user = useAppSelector(state => state.auth.user);
    const [showModalSuccess, setShowModalSuccess] = useState(false);

    const [postBuyConsideration] = useBuyConsiderationProjectMutation();

    const { id } = useParams<RouterParams>();
    const { data } = queryType(Number(id));

    const [checkConsideration, setCheckConsideration] = useState(0);

    function handleClick(event: React.FormEvent<EventTarget>, id: number | undefined) {
        event.preventDefault();

        if (user && id) {
            setCheckConsideration(id)
            console.log('Le lien a été cliqué.', id);
        }
    }

    function handleSubmit() {
        if (checkConsideration) {
            postBuyConsideration(checkConsideration).unwrap()
            console.log('ok check', checkConsideration)
            setShowModalSaveContibution(false)
            setShowModalSuccess(true)
        } else {
            console.log('vous navez pas selectionner de Consid')
        }

    }


    return (
        <div className="relative">
            <button
                onClick={() => setShowModalSaveContibution(true)}
                className="mt-3 group relative flex justify-center py-2 px-2 w-full bg-redBull  font-light text-lg text-white  rounded-sm  hover:ring-2 focus: mr-1 mb-1 ease-linear transition-all duration-150"
                type="button">
                Contribuer au projet
            </button>

            {showModalSaveContribution ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto  max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center font-newFont p-3 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-light">
                                        Selectionnez votre contribution
                                    </h3>
                                </div>
                             
                                <div
                                    className="mt-8">
                                    {data?.consideration?.map((item: Considerations) =>
                                        <div
                                            onClick={(e) => handleClick(e, item.id)}
                                        >
                                            <ContributionComponent
                                                key={item.id}
                                                isUser={false}
                                                item={item}
                                                isActive={checkConsideration === item.id}
                                                setEditConsideration={null}
                                                setShowModalEditContribution={null}
                                            />

                                        </div>
                                    )}
                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent   font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModalSaveContibution(false)}
                                    >
                                        Fermer
                                    </button>

                                    {checkConsideration ? (
                                        <button
                                            className="bg-green-500/80 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => handleSubmit()}
                                        >
                                            Valider mon choix de contribution
                                        </button>

                                    ) : <div><p>Vous n'avez pas selectionner de contribution</p></div>}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            <ModalSucess showModal={showModalSuccess} closeModal={() => setShowModalSuccess(false)} />
        </div>
    );
}

