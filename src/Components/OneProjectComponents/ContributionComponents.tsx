import { useDispatch } from "react-redux";
import { authApi } from "../../App/API/authAPI";
import { useDeleteConsiderationMutation, useTakeContributionClosedMutation, useTakeContributionReadyMutation } from "../../App/API/userConsiderations";
import { Considerations } from "../../App/entities/considerations";
import { ConsiderationStatus } from "../../App/entities/enum";

interface Props {
  item: Considerations;
  isUser: boolean;
  setShowModalEditContribution: Function | null;
  setEditConsideration: Function | null;
}


export default function ContributionComponent({ item, isUser, setShowModalEditContribution, setEditConsideration }: Props) {

  // dispath pour les invalidateTags
  const dispatch = useDispatch();

  const [deleteContribution] = useDeleteConsiderationMutation();
  const [conditionReady] = useTakeContributionReadyMutation();
  const [conditionClosed] = useTakeContributionClosedMutation();

  // géstion de l'affichage en fonction du status des considérations
  const classNameStatus = (status?: ConsiderationStatus): string | undefined => {
    switch (status?.toString()) {
      case "INPROGRESS":
        return "text-primary bg-blue-200/20 p-3 rounded-md shadow-md";
      case "READY":
        return "text-success bg-green-200/20 p-3 rounded-md shadow-md";
      case "CLOSED":
        return "text-danger bg-red-200/20 p-3 rounded-md shadow-md";
    }
  }

  const editModal = (consideration: Considerations) => {
    if (setEditConsideration === null || setShowModalEditContribution === null) {
      return;
    }
    setEditConsideration(consideration);
    setShowModalEditContribution(true);
  }

  const onDeleteHandler = (item: Considerations) => {
    if (window.confirm(`Supprimer la considération ${item.title} ?`)) {
      deleteContribution(item.id!).unwrap();
      dispatch(authApi.util.invalidateTags(["Project"]));
    }
  };

  const takeConditionReady = (item: Considerations) => {
    if (window.confirm(`passer la considération ${item.title} READY?`)) {
      conditionReady(item.id!).unwrap();
      dispatch(authApi.util.invalidateTags(["Project"]));
    }
  };

  const takeConditionClosed = (item: Considerations) => {
    if (window.confirm(`passer la considération ${item.title} CLOSED?`)) {
      conditionClosed(item.id!).unwrap();
      dispatch(authApi.util.invalidateTags(["Project"]));
    }
  };


  return (
    <>


      <div className="max-w-2xl px-4 py-8 mx-auto">
        <section className="shadow-md border border-yellowBull p-8 bg-gray-100 rounded-lg">
          <span className={classNameStatus(item.status)}>{item.status} </span>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">

            <div className="relative">

              <div className="aspect-w-1 aspect-h-1">
                {item.photo ? <img
                  src={item.photo}
                  alt="photo de la considération"
                  className="object-cover rounded-lg mt-3"
                /> : <img
                  src={process.env.PUBLIC_URL + '/img/splash.png'}
                  alt="photo de base"
                  className="object-cover rounded-lg mt-3"
                />}

              </div>

              <div
                className="absolute inline-flex p-2 bg-white/60 rounded-lg shadow-xl -bottom-8 -right-4 text-center"
              >
                <span className="inline-block w-10 h-8 bg-gray-100 rounded-lg text-gray-600"> {item.considAmount}€ </span>
              </div>
            </div>

            <blockquote className="sm:col-span-2">

              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-sm text-gray-500 uppercase sm:ml-3">
                  <strong>{item.title} </strong> <br /> <br /> {item.description}.
                </p>

              </cite>



            </blockquote>


            {/* Visible seulement par l'utilisateur propriétaire  */}
            {isUser && item.status?.toString() === "INPROGRESS" &&
              <div className="flex items-center -space-x-4 hover:space-x-1">
                <button onClick={() => takeConditionReady(item)}
                  className="z-10 block p-4 text-green-700 bg-green-100 border-2 border-white rounded-full transition-all active:bg-green-50 hover:scale-110 focus:outline-none focus:ring"
                  type="button"
                >
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>

                <button onClick={() => editModal(item)}
                  className="z-20 block p-4 text-blue-700 bg-blue-100 border-2 border-white rounded-full transition-all active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring"
                  type="button"
                >
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>

                <button onClick={() => onDeleteHandler(item)}
                  className="z-30 block p-4 text-red-700 bg-red-100 border-2 border-white rounded-full transition-all hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                  type="button"
                >
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            }

            {/* Visible seulement par l'utilisateur propriétaire  */}
            {isUser && item.status?.toString() === "READY" &&
              <button onClick={() => takeConditionClosed(item)} className="relative inline-flex items-center w-56 px-8 py-3 overflow-hidden text-redBull border rounded border-current group active:text-indigo-500 focus:outline-none focus:ring" >
                <span className="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>

                <span className="text-sm font-medium transition-all group-hover:ml-4">
                  Fermer la consideration
                </span>
              </button>}

            {/* Visible seulement par l'utilisateur propriétaire  */}
            {isUser && item.status?.toString() === "CLOSED" &&

              <button onClick={() => takeConditionReady(item)} className="relative inline-flex items-center w-56 px-8 py-3 overflow-hidden text-green-600 border rounded border-current group active:text-indigo-500 focus:outline-none focus:ring" >
                <span className="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>

                <span className="text-sm font-medium transition-all group-hover:ml-4">
                  Activer la considération
                </span>
              </button>}
          </div>
        </section>
      </div ></>

  )
}
