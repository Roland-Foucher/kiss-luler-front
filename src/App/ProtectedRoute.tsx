
import React, { ReactElement, ReactFragment } from "react";
import {Navigate, useNavigate } from "react-router";
import { Link, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import { useAppSelector } from "./hooks";


interface IProps {
  children: ReactElement
}

export default function ProtectedRoute({children}:IProps) {

    const user = useAppSelector(state => state.auth.user);
    if (!user) {
      return (
        <Navigate to={'/'} replace/>
      )
    }
    return children;
}