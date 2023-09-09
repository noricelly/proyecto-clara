import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = ({ userRole }) => {
  console.log(userRole)
  return (
    <div>
      {userRole === true ? <Navigate to="/user" /> : <Outlet />}
    </div>
  )
}

export default PublicRoute