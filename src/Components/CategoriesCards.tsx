





export default function CategoriesCards() {

    let inWaitProject = ["Pop/Rock", "Alternative", "Funk/Tribal", "Metal/Hardcore", "Classico/Classique"]

    //rounded-bl-3xl rounded-tr-3xl style corner

    return (
        <>

            <header className="flex font-light">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-45 text-redBull" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                    <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                </svg>
                <h2 className="ml-2 font-newFont text-xl ">Catégories</h2>
               
            </header>
            <section>
                <article className="grid grid-flow-col auto-cols-3 mx-16 my-4">

                    {inWaitProject.map((item) => <div className=" contrast-150 bg-gradient-to-b from-redBull to-yellowBull opacity-75 rounded-md   flex items-end justify-center h-24 w-36  shadow-md hover:shadow-lg hover:-translate-y-3 hover:duration-500">

                        <p className="translate-y-3 translate-x-6 font-newFont  text-white p-2 rounded-md border-b border-orangeBull border-r border-orangeBull">{item} </p>
                    </div>)}
                </article>

            </section>
        </>
    )
}