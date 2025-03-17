import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import Bio from './components/Bio'
import Third from './components/Third'


const App = () => {
  return (
    <div className='p-16'>
      <Login  />
      <Profile/>
      <Bio/>
      <br />
      <Third/>
      
    </div>
  )
}

export default App