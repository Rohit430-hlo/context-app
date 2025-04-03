import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserContextProvider from './context/UserContext.jsx'
import { ToastContainer } from 'react-toastify';
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
<<<<<<< HEAD
      <App />
      <ToastContainer></ToastContainer>
=======
      <ToastContainer/>
      
        <App />
      
>>>>>>> 73bbce71557bbf878d8c140ff4fd0464e854c683
    </UserContextProvider>
  </StrictMode>,
)
