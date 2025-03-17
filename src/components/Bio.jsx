import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Bio = () => {
    const {bio} = useContext(UserContext);
  return (
    <div className='w-96 mx-auto my-10 p-4 bg-slate-100'>
        <h2 className='text-5xl font-bold text-center mb-5'>Bio</h2>
        <p className='text-center'>{bio}</p>

    </div>
  )
}

export default Bio