import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Employee, GuestMode, Home, List } from './pages'
import DataContextProvider from './context/dataContext'
import { Setting } from './pages/Setting'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/list', element: <List /> },
  { path: '/setting', element: <Setting /> },
  { path: '/employee', element: <Employee /> },
  { path: '/guestmode', element: <GuestMode /> },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DataContextProvider>
      <RouterProvider router={router} />
    </DataContextProvider>
  </React.StrictMode>
)
