import Profile from './Profile'

// Whenever we need to use context then we need to import 2 things-> 1st is useContext hook from react and the context which we created and exported in the step 2 (userContext in this case)
import React, {useContext} from 'react'
import { UserContext } from '../context/UserContext'


const Login = () => {

// const [userPassword, setUserPassword] = React.useState('');
const {setUser} = useContext(UserContext);




    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className='w-96 mx-auto p-4 bg-slate-50'>

        <h1 className='text-2xl mb-6 text-center font-bold'>Login Page</h1>

        <br />


        <input
        className='border w-full p-3 bg-slate-200'
        
        onChange={(e)=>setUser(e.target.value)}
         type="text" name="" placeholder='User name' />
    <br />
    <br />
    
        {/* <input
        value={userPassword}
        className='border w-full p-3 bg-slate-200'
        onChange={(e)=>setUserPassword(e.target.value)}
         type="password" name="" placeholder='user password' /> */}

        <button className='bg-blue-500 text-white text-center px-5 my-2 py-3 inline-block mx-auto' onClick={()=>handleSubmit}>Submit</button>

        
    </div>
  )
}

export default Login