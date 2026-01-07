import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root'
import Home from './Components/Pages/Home'
import Services from './Components/Pages/Services'
import Profile from './Components/Pages/Profile'
import AuthProvider from './Components/Authentications/AuthProvider'


const router = createBrowserRouter([
  {path: "/", Component: Root,
    children:[
      {index: true, Component: Home},
      {path: "services", Component: Services},
      {path: "profile", element: <Profile></Profile>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
