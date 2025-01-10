import React, { useContext } from 'react'
import { AuthContext } from '../auth/context'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({children}) => {
    const {logged} = useContext(AuthContext)
    const { PathName, search} = useLocation();  
    const lastPath = PathName + search
    localStorage.setItem("lastPath", lastPath)
  return (logged)
        ? children
        : <Navigate to={"/login"}/>
}
