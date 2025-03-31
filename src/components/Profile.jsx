import { useContext } from 'react';
import React from 'react'
import { UserContext } from '../context/UserContext';


const Profile = () => {
    const {user, email, contact, bio} = useContext(UserContext);
    

  return (
    <div className='w-96 mx-auto my-10 p-4 bg-slate-100'>
        {/* Basic profile page to show user data: name, email, contact and bio */}
        <h1 className='text-2xl mb-6 text-center font-bold'>Profile Page</h1>
        <p className='text-lg'>Name: {user||"Not Provided"}</p>
        <br />
        <p className='text-base'>Email: {email ||"Not Provided"}</p>
        <p className='text-base'>Contact: {contact ||"Not Provided"}</p>
        <br />
        <p className='text-base'>Bio: {bio ||"Not Provided"}</p>
        
    </div>
  )
}

export default Profile