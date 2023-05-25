import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { rounter } from './Routers/Routers'
import AuthProviders from './Providers/AuthProviders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
    <RouterProvider router={rounter}></RouterProvider>
   </AuthProviders>
  </React.StrictMode>,
)
