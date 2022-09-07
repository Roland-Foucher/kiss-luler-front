import CategoriesCards from "../Components/CategoriesCards";
import ModalRegister from "../Components/ModalRegister";
import ProjectsCards from "../Components/ProjectsCards";









export default function HomePage() {

    return (
        <>
            <div>

                {/**presentation homepage */}
                <section className="relative font-newFont">
                    <img
                        className=" absolute  inset-0  sm:object-[25%]  w-full h-full  sm:opacity-100 shadow-sm   "
                        src={process.env.PUBLIC_URL + '/img/white.jpg'}
                        alt="Photo d'accueil"
                    />

                    <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

                    <div className="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
                        <div className="max-w-xl text-left sm:text-left">
                            <h1 className="text-3xl font-medium text-gray-800/60 sm:text-5xl">
                                Découvrez l'instant
                                <strong className="font-medium text-orange-500 sm:block">
                                    Mulule.
                                </strong>

                            </h1>
                            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
                                Mulule permet d'allier l'exploration d'univers musicaux et à la fois la participation financière spontanée...
                            </p>

                            <div className="flex flex-wrap mt-8 text-center gap-4">
                                <a className="block w-full px-12 py-3 text-md font-medium text-red-600 border-double rounded shadow border-3 bg-transparent border-red-500 sm:w-auto active:bg-red-600 hover:bg-red-600 focus:outline-none hover:text-red-600 focus:ring" href="#projects-cards">
                                    Découvrir les projets
                                </a>
                                <ModalRegister />
                            </div>
                        </div>
                    </div>
                </section>

                {/**gestion searchbar */}
                <div className=" md:w-full   bg-white  flex w-full justify-start  shadow-sm">
                    <article className="flex ml-7 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input placeholder='Cherchez un projet' type="text" className="w-full h-16 focus:outline-none font-newFont text-shadow text-lg" />
                    </article>

                </div>



                {/**affichage projets */}
                <section id="projects-cards" className="my-12 mx-20">
                    <ProjectsCards />
                </section>
            </div>



        </>
    )
}