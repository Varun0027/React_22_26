import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
function Dashboard() {
    const user=useSelector(selectUser)
    return (
        <>

            <div className='main-wrapper'>
                <div className='welcome-container'>
                    <h1> Welcome <span className=' username-color'>{user!==null ? user.username : 'dummy'} </span> ! </h1>
                </div>

            </div>
        </>
    )
}

export default Dashboard