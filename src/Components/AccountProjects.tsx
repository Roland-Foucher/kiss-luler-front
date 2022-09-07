import { useNavigate } from "react-router";
import { useGetUserProjectsQuery } from "../App/API/authAPI";
import { Project } from "../App/entities/project";


import OneCard from "./OneCard";


export default function AccountProjects() {

  const navigate = useNavigate()

  const { data } = useGetUserProjectsQuery();
  return (
    <div className="mx-14">

      <header className="flex font-light ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-45 text-yellowBull" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
          <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
        </svg>
        <h2 className="ml-2 font-newFont text-2xl ">Vos Projets</h2>
      </header>
      <article className="flex justify-between content-center">
        <p className="font-light text-gray-400 text-xl my-3 mx-10">Vous avez actuellement {data?.length} projet.s </p>

        <button
          onClick={() => navigate('/account/project/add')}
          className="z-10 p-4 text-orangeBull  text-lg bg-orangeBull/10 border-1 border-orangeBull/50 rounded-full xl:visible lg:visible md:invisible sm:invisible   transition-all active:bg-green-50   hover:scale-110 focus:outline-none focus:ring"
          type="button"
        >
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>

      </article>


      <section>
        <article className="lg:grid lg:grid-cols-3 lg:gap-4 flex-wrap mt-5">
          {data && data!.map((items: Project) =>
            <div key={items.id}>
              <OneCard project={items} isUserProject={true} />

            </div>
          )}
        </article>
      </section>

      <button className="w-full lg:hidden border-1 rounded-sm p-2 border-red-500/60 text-red-500 hover:bg-gray-200/40 ">Créer un projet</button>
    </div>
  )
} 