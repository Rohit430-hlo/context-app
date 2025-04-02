import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserContextProvider from './context/UserContext.jsx'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <ToastContainer/>
      
        <App />
      
    </UserContextProvider>
  </StrictMode>,
)
