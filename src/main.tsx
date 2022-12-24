import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Employee, Guest, Home, List } from './pages'

const router = createBrowserRouter([
  { path: '/', element: <Home />, },
  { path: '/guest', element: <Guest />, },
  { path: '/list', element: <List />, },
  { path: '/setting', element: <p>Setting</p>, },
  { path: '/employee', element: <Employee/>, },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
