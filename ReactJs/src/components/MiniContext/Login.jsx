import React, { useContext, useState } from 'react'
import UserContext from './Context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser}= useContext(UserContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password}); 
    }
  return (
    <div className='pt-4 text-slate-700 '>
    <h2 className='m-2 text-white text-xl  p-2 rounded-sm'>Login</h2>
    <input type="text" 
    placeholder='username' 
    value={username}
    className='m-2 px-2 bg-slate-700 text-white'
    onChange={(e)=>setUsername(e.target.value)} 
    />
    <input type="password" 
    placeholder='password' 
    value={password}
    className='m-2 px-2 bg-slate-700 text-slate-200 '
    onChange={(e)=>setPassword(e.target.value)}
    />
    <button className='m-2 bg-blue-600 px-2 text-slate-300 rounded-sm' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login