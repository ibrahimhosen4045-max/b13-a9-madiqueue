"use client"

import React from 'react'
import { ToastContainer } from 'react-toast'

const AuthLayout = ({children}) => {
  return (
    <div>
      {children}
      <ToastContainer />
    </div>
  )
}

export default AuthLayout
