import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root'
import Home from './Components/Pages/Home'
import Services from './Components/Pages/Services'
import Profile from './Components/Pages/Profile'
import AuthProvider from './Components/Authentications/AuthProvider'
import Register from './Components/User/Register'
import Login from './Components/User/Login'
import Privateroutes from './Components/Root/Routes/Privateroutes'
import Resetpassword from './Components/Root/Routes/Resetpassword'
import Errorpage from './Components/Errorpage/Errorpage'
import ServiceDetails from './Components/Pages/ServiceDetails'


const router = createBrowserRouter([
  {path: "/", errorElement: <Errorpage></Errorpage>
    ,Component: Root,
    children:[
      {index: true, Component: Home},
      {path: "services", element: <Privateroutes>
        <Services></Services>
      </Privateroutes>},
      {path: "register", Component: Register},
      {path: "login", Component: Login},
      {path: "profile", element: <Privateroutes>
        <Profile></Profile>
      </Privateroutes>},
      {path: "passchange", element: <Resetpassword></Resetpassword>},
      {
          path: "services/:id",
          element: (
            <Privateroutes>
              <ServiceDetails></ServiceDetails>
            </Privateroutes>
          )
        }

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
