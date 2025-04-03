import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserContextProvider from './context/UserContext.jsx'
import { ToastContainer } from 'react-toastify';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <App />
      <ToastContainer></ToastContainer>
    </UserContextProvider>
  </StrictMode>,
)
