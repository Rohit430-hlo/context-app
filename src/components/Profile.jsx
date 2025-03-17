import { useContext } from 'react';
import React from 'react'
// import Bio from './Bio';

import { UserContext } from '../context/UserContext';

const Profile = () => {
    
    const {user, setBio} = useContext(UserContext);

  return (
    <div className='w-96 mx-auto my-10 p-4 bg-slate-100'>
        <h2 className='text-5xl font-bold text-center'>Profile: {user}</h2>

        
        <input className='p-2 bg-slate-200 my-5 w-full border' placeholder='Bio....' type="text" onChange={(e)=>setBio(e.target.value)} />

        
    </div>
  )
}

export default Profile