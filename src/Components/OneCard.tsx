import { useNavigate } from "react-router";
import { Project } from "../App/entities/project";
import { useAppSelector } from "../App/hooks";

interface Props {
  project: Project
}

export default function OneCard({project} : Props) {
  
  const user = useAppSelector(state => state.auth.user);
  const navigate = useNavigate()
  return (
    <div>
      <div className="block p-4 shadow-lg hover:shadow-md hover:shadow-redBull/30" >
        <div className=" translate-y-4 mt-2  flex justify-end">
          <strong className=" border border-red-500 text-red-500 bg-red-100 uppercase px-5 py-1.5 rounded-lg text-[10px] tracking-wide">
            {project.category}
          </strong>
        </div>
        <img
          alt="123 Wallaby Avenue, Park Road"
          src="https://images.unsplash.com/photo-1554995207-c18c203602cb"
          className="object-cover w-full h-56 rounded-md"
        />


        <div className="mt-2 relative">
          <dl>
            <div>
              <dt className="sr-only">
                Address
              </dt>

              <dd className="font-medium">
                {project.title}
              </dd>
            </div>

            <div>
              <dt className="sr-only">
                Price
              </dt>

              <dd className="text-sm text-gray-500 ml-4">
                Par {project.userName}
              </dd>
            </div>
          </dl>

          <dl className="flex items-center mt-6 space-x-8 text-xs">
            <div className="sm:inline-flex sm:items-center sm:shrink-0">



            </div>

            <div className="sm:inline-flex sm:items-center sm:shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <div className="sm:ml-3 mt-1.5 sm:mt-0">
                <dt className="text-gray-500">
                  Contributions
                </dt>

                <dd className="font-medium">
                  {project.considerations_amount}
                </dd>
              </div>
            </div>

            <div className="sm:inline-flex sm:items-center sm:shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>

              <div className="sm:ml-3 mt-1.5 sm:mt-0">
                <dt className="text-gray-500">
                  Date
                </dt>

                <dd className="font-medium">
                  {project.date}
                </dd>
              </div>
            </div>
          </dl>
          <button onClick={() => user ? navigate(`/user/project/${project.id}`) : navigate(`/project/${project.id}`)} className="absolute right-0 inline-block px-4 py-2 text-xs font-medium bg-yellow-400 hover:-translate-y-2 hover:duration-300">
            Voir
          </button>
        </div>
      </div>
    </div>
  )
}
