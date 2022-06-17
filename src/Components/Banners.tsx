






export default function Banners() {
    return (
        <div className="px-4 py-1 text-black border-red-400 border-b">
            <div className="flex justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" className=" h-10 w-10 text-orangeBull" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="ml-4 font-light"> Créer votre compte afin de participer financièrement ou lancer vos propres projets</p>
                <button className=" ml-4 w-20 rounded-md  p-2 text-sm text-grey-600 shadow-md hover:text-white  hover:bg-gray-600 hover:duration-500 bg-gray-200 p-2">Créer</button>
            </div>
        </div>
    )
}