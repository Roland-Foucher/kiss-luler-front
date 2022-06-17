





export default function CategoriesCards() {

    let inWaitProject = ["Pop/Rock", "Alternative", "Funk/Tribal", "Metal/Hardcore", "Classico/Classique"]

    return (
        <>

            <header className="flex font-light">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                <h2 className="ml-2 font-newFont text-xl ">Catégories</h2>
            </header>
            <body>
                <article className="grid grid-flow-col auto-cols-3 mx-16 my-4">

                    {inWaitProject.map((item) => <div className=" bg-orangeBull/30 p-4 flex items-end justify-center h-36 w-36 rounded-bl-3xl rounded-tr-3xl shadow-md hover:shadow-lg hover:-translate-y-3 hover:duration-500">

                            <p className="font-newFont">{item} </p>
                    </div>)}
                </article>

            </body>
        </>
    )
}