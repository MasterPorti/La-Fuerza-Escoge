import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layaout from './components/Layaout'
import './index.css'
import Github from './pages/github/Github'
import Home from './pages/home/Home'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layaout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/github',
          element: <Github />
        }
      ]
    }

  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
