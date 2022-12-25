import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Employee, Guest, GuestMode, Home, List } from './pages'
import DataContextProvider from './context/dataContext'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/guest', element: <Guest /> },
  { path: '/list', element: <List /> },
  { path: '/setting', element: <p>Setting</p> },
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
