import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import { ToastContainer, toast } from 'react-toastify';
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
  const notify = () => toast("Wow so easy!");
  return (
   <div>
     <RouterProvider router={routes} />
     <button className='bg-black text-white' onClick={notify}>Notify!</button>
   </div>
  )
}

export default App