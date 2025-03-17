import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Third = () => {
    const {user} = useContext(UserContext)
  return (
    <div className='text-5xl text-center my-20'>Third-{user}</div>
  )
}

export default Third