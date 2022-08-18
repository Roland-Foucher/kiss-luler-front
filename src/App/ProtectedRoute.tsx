
import { ReactElement } from "react";
import { Navigate } from "react-router";
import { useAppSelector } from "./hooks";


interface IProps {
  children: ReactElement
}

export default function ProtectedRoute({ children }: IProps) {

  const user = useAppSelector(state => state.auth.user);
  if (!user) {
    return (
      <Navigate to={'/'} replace />
    )
  }
  return children;
}