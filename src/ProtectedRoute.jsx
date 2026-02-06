import React from 'react'
import useAuth from './hooks/useAuth'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
   const { isAuthenticated } = useAuth()

   if (!isAuthenticated) {
      return <Navigate to="/sign-in" />
    }

   return children
}

export default ProtectedRoute