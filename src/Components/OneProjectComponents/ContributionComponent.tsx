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
        return "text-primary";
      case "READY":
        return "text-success";
      case "CLOSED":
        return "text-danger";
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

    <div
      className=" border-t border-b border-redBull grid grid-cols-1 overflow-hidden group sm:grid-cols-3"

    >
      <div className="relative">
        <img
          className="absolute inset-0 object-cover m-auto"
          src={item.photo ? item.photo : "https://cdn.pixabay.com/photo/2014/10/20/21/17/cd-495733_960_720.jpg"}
          alt="contribution"
        />
      </div>

      <div className="p-3 sm:col-span-2">
        <h2>Contribution</h2>
        <h2 className={classNameStatus(item.status)}>{item.status}</h2>
        <ul className="mt-8" >
          <li
            className="inline-block items-center px-3 py-1 text-xs font-medium rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {item.considAmount}€
          </li>

          <li
            className="inline-block items-center px-3 py-1 text-xs font-medium rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
            </svg>
            {item.title}
          </li>

          {/* Visible seulement par l'utilisateur propriétaire  */}
          {isUser && item.status?.toString() === "INPROGRESS" &&
            <>
              <li
                className="inline-block items-center px-3 py-1 text-xs font-medium rounded-full"
              >
                <button className="btn btn-primary pt-1 m-1"
                  onClick={() => editModal(item)}>
                  EDITER
                </button>
                <button className="btn btn-success pt-1 m-1"
                  onClick={() => takeConditionReady(item)}>
                  READY 👌
                </button>
                <button
                  onClick={() => onDeleteHandler(item)}
                  className="btn btn-danger pt-1 m-1">
                  SUPPRIMER
                </button>
              </li>
            </>}

          {/* Visible seulement par l'utilisateur propriétaire  */}
          {isUser && item.status?.toString() === "READY" &&
            <>
              <li
                className="inline-block items-center px-3 py-1 text-xs font-medium rounded-full"
              >
                <button className="btn btn-danger pt-1 m-1"
                  onClick={() => takeConditionClosed(item)}>
                  FERMER
                </button>
              </li>
            </>}

          {/* Visible seulement par l'utilisateur propriétaire  */}
          {isUser && item.status?.toString() === "CLOSED" &&
            <>
              <li
                className="inline-block items-center px-3 py-1 text-xs font-medium rounded-full"
              >
                <button className="btn btn-danger pt-1 m-1"
                  onClick={() => takeConditionReady(item)}>
                  RE-OPEN
                </button>
              </li>
            </>}


        </ul>

        <h5 className="mt-4 font-bold"> {item.description}</h5>

        <p className="mt-2 text-sm text-gray-500">

        </p>


      </div>

    </div>
  )
}
