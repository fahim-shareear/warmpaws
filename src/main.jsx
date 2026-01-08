import { StrictMode, Suspense } from 'react'
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
import { AuthContext } from './Components/Authentications/AuthContext'



const router = createBrowserRouter([


  {path: "/", errorElement: <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
    <Errorpage></Errorpage>
  </Suspense>
    ,Component: Root,
    children:[
      {index: true, Component: Home},
      {path: "services", element: <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}><Privateroutes><Services></Services></Privateroutes></Suspense>},
      {path: "register", Component: Register},
      {path: "login", Component: Login},
      {path: "profile", element: <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}><Privateroutes><Profile></Profile></Privateroutes></Suspense>},
      {path: "passchange", element: <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}><Resetpassword></Resetpassword></Suspense>},
      {
          path: "services/:id",
          element: (
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
              <Privateroutes>
              <ServiceDetails></ServiceDetails>
            </Privateroutes>
            </Suspense>
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
