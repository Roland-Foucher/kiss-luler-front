import { useNavigate } from "react-router";
import { authApi } from "../App/API/authAPI";
import { useDeleteProjectMutation } from "../App/API/projects";
import { Project } from "../App/entities/project";
import { useAppDispatch, useAppSelector } from "../App/hooks";

interface Props {
  project: Project
  isUserProject: boolean
}



export default function OneCard({ project, isUserProject }: Props) {

  const navigate = useNavigate();
  let dispatch = useAppDispatch()


  /**
   * match username and project.username for display crash icon for delete project
   */
  let user = useAppSelector(state => state.auth.user);
  let name = user?.firstName + ' ' + user?.lastName




  const [deleteProject, postQuery] = useDeleteProjectMutation();



  /**
   * delete a project and dispatch refresh on account page && homepage
   * @param id projectID
   */
  const deleteAProject = async (id: number) => {

    if (id) {
      if (window.confirm('Êtes vous certain.ne de vouloir supprimer ce projet ?')) {
        try {
          await deleteProject(id).unwrap()
          alert('Le projet est supprimé')
          dispatch(authApi.util.invalidateTags(["User"]))
        } catch (error) {
          alert('Erreur dans la suppression du projet')
        }
      }
    }

  }






  return (
    <div>
      <div className="mb-4 overflow-hidden block p-4 relative shadow-md hover:shadow-lg border border-gray-100 rounded-md " >
        <div className=" -translate-y-2 translate-x-2  right-0 absolute top-0 flex justify-end">
          {project.category == "TOURDATE" ? <strong className="border-1 border-redBull text-redBull bg-redBull/20 uppercase p-3 rounded-full text-[10px] tracking-wide">
            {project.category}
          </strong> : project.category == "EP" ? <strong className="border-1 border-orangeBull text-orangeBull bg-orangeBull/20 uppercase p-3 rounded-full text-[10px] tracking-wide">
            {project.category}
          </strong> : <strong className="   border-1 border-yellowBull text-yellowBull bg-yellowBull/20 uppercase p-3 rounded-full text-[10px] tracking-wide">
            {project.category}
          </strong>}
        </div>
        {project.photo ? <img
          alt="Photo du projet"
          src={project.photo}
          className="object-cover w-full h-56 rounded-md"
        /> : <img
          alt="Photo du projet"
          src={process.env.PUBLIC_URL + '/img/head.jpg'}
          className="object-cover w-full h-56 rounded-md"
        />}



        <div className="mt-2 relative">
          <dl>
            <div>
              <dd className="font-medium inline-flex w-full mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="text-blue-400 w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
                </svg>
                <div className="flex justify-between  w-full ">
                  <span className="translate-y-3 text-lg md:truncate font-newFont text-gray-900 font-bold">{project.title}</span>
                  <span className="translate-y-3 font-light md:text-sm inline-flex"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="text-blue-400 w-6 h-6 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                    {project.amountInit}€</span>
                </div>
              </dd>
            </div>
            <div className="flex justify-between">
              <dd className="text-sm font-light text-gray-500 ml-4 mt-3">
                Par {project.userName}
              </dd>
              {name == project.userName && <dd className="flex justify-end"><button
                onClick={() => deleteAProject(project!.id!)}
                className="z-30 block p-2 text-red-700 bg-red-100 border-2 border-white rounded-full transition-all hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                type="button"
              >
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button></dd>}

            </div>
          </dl>
          <dl className="flex items-center mt-6 space-x-8 text-xs">
            <div className="sm:inline-flex sm:items-center sm:shrink-0">
            </div>
            <div className="sm:inline-flex sm:items-center sm:shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="text-blue-400 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              <div className="sm:ml-3 mt-1.5 sm:mt-0 ">
                <dd className="font-base">
                  {project.considerationsAmount} / {project.amountInit} €
                </dd>
              </div>
            </div>
            <div className="sm:inline-flex sm:items-center sm:shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div className="sm:ml-3 mt-1.5 sm:mt-0 mr-6">
                <dd className="font-medium">
                  {project.date == "Closed" ? <span className="text-red-500 font-bold">{project.date}</span> : <span className="text-green-500 font-bold">{project.date}</span>}
                </dd>
              </div>
            </div>
          </dl>
          <button onClick={() => isUserProject ? navigate(`/user/project/${project.id}`) : navigate(`/project/${project.id}`)} className="absolute right-0 shadow-md inline-block px-4 py-2 text-xs font-medium bg-yellow-400 rounded-sm hover:-translate-y-2 hover:duration-300">
            Voir
          </button>
        </div>
      </div>
    </div>
  )
}
