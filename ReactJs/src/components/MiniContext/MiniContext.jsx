import React from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Login'
import Profile from './Profile'

const MiniContext = () => { //this would be App
  return (
    <UserContextProvider>
      <div className='bg-gray-900 pt-4 pb-2 text-slate-100 flex flex-col text-center justify-center content-center'>
        <h1 className='text-center mt-6 text-3xl font-semibold'># React Context API</h1>
        <Login />
        <Profile />
        {/* Example of using UserContext in components */}
        <div className='text-sm text-gray-900 bg-slate-300 w-fit mx-auto p-2 m-3 rounded-lg'>
    <b>Using UserContext in Login Component:</b>
    <ol>
        <li>Import the useContext hook from React and the UserContext from './Context/UserContext'.</li>
        <li>Use useContext hook to access the setUser function provided by UserContext.</li>
        <li>On form submission, call setUser to update the user context with entered username and password.</li>
    </ol>
    <br/>
    <b>Using UserContext in Profile Component:</b>
    <ol>
        <li>Import useContext hook from React and UserContext from './Context/UserContext'.</li>
        <li>Use useContext hook to access the user object provided by UserContext.</li>
        <li>If a user is logged in (user object exists), display a welcome message with the username. Otherwise, prompt the user to log in.</li>
    </ol>
</div>



      </div>
    </UserContextProvider>
  )
}

export default MiniContext