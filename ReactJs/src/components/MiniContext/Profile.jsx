import React, { useContext, useState } from 'react'
import UserContext from './Context/UserContext'


const Profile = () => {
    const {user}= useContext(UserContext)
    if(!user){
        return(
            <div className='p-4 m-3 '>Please! Login</div>
        )
    }
    return(
        <div className='p-4 m-3 '> Welcome {user.username}</div>
    )
}

export default Profile