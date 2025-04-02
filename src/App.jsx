import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'

// import { ToastContainer, toast } from 'react-toastify'
const Layout=()=>{
  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  )
}

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/profile',
        element:<Profile/>
      }
    ]
  }
])

const App = () => {
  
  return (
    
      <RouterProvider router={routes} />
      
    
  )
}

export default App