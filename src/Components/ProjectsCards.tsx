












export default function ProjectsCards() {

    let inWaitProjects = ["je suis un projet", "je suis un deuxieme projet", "je suis un troisieme projet", "je suis un quatrième projet", "je suis un cinquième projet"]

    return (
        <>
            <header className="flex font-light">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-45 text-yellowBull" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                    <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                </svg>
                <h2 className="ml-2 font-newFont text-xl ">Projets</h2>
            </header>
            <section>
                <article className="grid grid-cols-3 gap-4 mt-5">
                    {inWaitProjects.map((item) => <a
                        href=""
                        className="block p-4 rounded-lg shadow-sm shadow-redBull hover:shadow-md hover:shadow-redBull/30"
                    >
                        <img
                            alt="123 Wallaby Avenue, Park Road"
                            src="https://images.unsplash.com/photo-1554995207-c18c203602cb"
                            className="object-cover w-full h-56 rounded-md"
                        />

                        <div className="mt-2">
                            <dl>
                                <div>
                                    <dt className="sr-only">
                                        Address
                                    </dt>

                                    <dd className="font-medium">
                                        {item}
                                    </dd>
                                </div>

                                <div>
                                    <dt className="sr-only">
                                        Price
                                    </dt>

                                    <dd className="text-sm text-gray-500 ml-4">
                                        Par Jean Charles
                                    </dd>
                                </div>
                            </dl>

                            <dl className="flex items-center mt-6 space-x-8 text-xs">
                                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                                    <svg
                                        className="w-4 h-4 text-indigo-700"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                    </svg>

                                    <div className="sm:ml-3 mt-1.5 sm:mt-0">
                                        <dt className="text-gray-500">
                                            Parking
                                        </dt>

                                        <dd className="font-medium">
                                            2 spaces
                                        </dd>
                                    </div>
                                </div>

                                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                                    <svg
                                        className="w-4 h-4 text-indigo-700"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>

                                    <div className="sm:ml-3 mt-1.5 sm:mt-0">
                                        <dt className="text-gray-500">
                                            Bathroom
                                        </dt>

                                        <dd className="font-medium">
                                            2 rooms
                                        </dd>
                                    </div>
                                </div>

                                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                                    <svg
                                        className="w-4 h-4 text-indigo-700"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>

                                    <div className="sm:ml-3 mt-1.5 sm:mt-0">
                                        <dt className="text-gray-500">
                                            Bedroom
                                        </dt>

                                        <dd className="font-medium">
                                            4 rooms
                                        </dd>
                                    </div>
                                </div>
                            </dl>
                        </div>
                    </a>)}
                </article>

            </section>
        </>
    )
}