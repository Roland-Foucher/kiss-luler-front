import { useGetUserConsiderationsQuery } from "../App/API/userConsiderations"









export default function AccountOrders() {

    const {data} = useGetUserConsiderationsQuery()
    console.log(data);
    

    return (
        <>
            <div className="mx-14 mt-10 bg-yellowBull/20 border-2 border-dotted p-4">

                <header className="flex font-light ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-45 text-redBull" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                        <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                    </svg>
                    <h2 className="ml-2 font-newFont text-2xl ">Vos Commandes</h2>
                </header>
                <article className="flex justify-between content-center">
                    <p className="font-light text-gray-400 text-xl my-3 mx-10">Vous avez actuellement 2 commandes passées </p>
                </article>

            </div>
        </>
    )
}