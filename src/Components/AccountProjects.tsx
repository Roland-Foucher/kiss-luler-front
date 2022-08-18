import { useGetUserProjectsQuery } from "../App/API/authAPI";
import { Project } from "../App/entities/project";
import OneCard from "./OneCard";


export default function AccountProjects() {

  const { data, isError } = useGetUserProjectsQuery();
  return (
    <div>
      <header className="flex font-light">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-45 text-yellowBull" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
          <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
        </svg>
        <h2 className="ml-2 font-newFont text-xl ">Vos Projets</h2>
      </header>
      <section>
        <article className="grid grid-cols-3 gap-4 mt-5">
          {data && data!.map((items: Project) =>
            <div key={items.id}>
              <OneCard
                project={items}
                isUserProject={true} />
            </div>
          )}
        </article>
      </section>
    </div>
  )
} 