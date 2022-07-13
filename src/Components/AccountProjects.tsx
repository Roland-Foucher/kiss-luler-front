import { useGetUserProjectsQuery } from "../App/API/authAPI";
import { Project } from "../App/entities/project";
import OneCard from "./OneCard";


export default function AccountProjects() {

  const {data, isError} = useGetUserProjectsQuery();

  return (
    <section>
      <article className="grid grid-cols-3 gap-4 mt-5">
          {data && data!.map((items: Project) => 
          <div key = {items.id}>
            <OneCard project={items}/>
          </div>
          )}
      </article>
    </section>
  )
} 