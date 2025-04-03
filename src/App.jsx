import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
<<<<<<< HEAD
import { ToastContainer, toast } from 'react-toastify';
=======

// import { ToastContainer, toast } from 'react-toastify'
>>>>>>> 73bbce71557bbf878d8c140ff4fd0464e854c683
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
<<<<<<< HEAD
  const notify = () => toast("Wow so easy!");
  return (
   <div>
     <RouterProvider router={routes} />
     <button className='bg-black text-white' onClick={notify}>Notify!</button>
   </div>
=======
  
  return (
    
      <RouterProvider router={routes} />
      
    
>>>>>>> 73bbce71557bbf878d8c140ff4fd0464e854c683
  )
}

export default App