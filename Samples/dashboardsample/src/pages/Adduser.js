import React, { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { AddUser } from '../services/api'
const Adduser = () => {
    const { theme } = useTheme()
    const [user, setUser] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    })

    const handleChange = (e)=>{
        setUser({...user,[e.target.id]:e.target.value})
    }
    const handleSubmit =async(e)=>{
        e.preventDefault()
        console.log(user)
        try{
            await AddUser(user)
        }
        catch(e){
            console.log(e)
        }
    }
    return (
        <>
            <form className='wv-30 hv-30 shadow p-1 flex flex-col justify-center items-center gap' onSubmit={handleSubmit}>
                <input type='text' value={user.name} id='name' placeholder='Name' className={`${theme === 'light' ? 'light-theme' : 'dark-theme'} w-80 p-1 theme-input`} onChange={handleChange}/>
                <input type='email' value={user.email} id='email' placeholder='Email' className={`${theme === 'light' ? 'light-theme' : 'dark-theme'} w-80 p-1 theme-input`} onChange={handleChange}/>
                <input type='text' value={user.username} id='username' placeholder='Username' className={`${theme === 'light' ? 'light-theme' : 'dark-theme'} w-80 p-1 theme-input`} onChange={handleChange}/>
                <input type='text' value={user.password} id='password' placeholder='Password' className={`${theme === 'light' ? 'light-theme' : 'dark-theme'} w-80 p-1 theme-input`} onChange={handleChange}/>
                <button type='submit' className={`theme-btn-primary ${theme === 'light' ? 'theme-btn-primary-light' : 'theme-btn-primary-dark'} w-80`}>Save</button>
            </form>
        </>
    )
}

export default Adduser