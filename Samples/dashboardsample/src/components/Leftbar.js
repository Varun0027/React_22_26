import React from 'react'
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Leftbar = () => {
const navigate = useNavigate()

const routeDashboard = () => {
    navigate('/dashboard')
}
const routeSettings = () => {
    navigate('/settings')
}
const routeUsers = () => {
    navigate('/users')
}
const routeProducts = () => {
    navigate('/products')
}
const routeAdd =()=>{
    navigate('/add')
  }
    const { theme } = useTheme();
    return (
        <>
            <div className='hv-95 vw-15 flex flex-row justify-center itmes-center ps-b-l-0'>
                <div className={`flex flex-col gap shadow  justify-start items-center ${theme === 'light' ? 'light-theme' : 'dark-theme'} `}>
                    <div className={`flex flex-col gap wv-15 hv-90 justify-start items-center `}>
                        <button className={`theme-btn-primary ${theme === 'light' ? 'theme-btn-primary-light' : 'theme-btn-primary-dark'}`} onClick={routeDashboard}>
                            Dashboard
                        </button>
                        <button className={`theme-btn-primary ${theme === 'light' ? 'theme-btn-primary-light' : 'theme-btn-primary-dark'}`} onClick={routeUsers}>
                            Users
                        </button>
                        <button className={`theme-btn-primary ${theme === 'light' ? 'theme-btn-primary-light' : 'theme-btn-primary-dark'}`} onClick={routeAdd}>
                            Add User
                        </button>
                        <button className={`theme-btn-primary ${theme === 'light' ? 'theme-btn-primary-light' : 'theme-btn-primary-dark'}`} onClick={routeProducts}>
                            Products
                        </button>
                        <button className={`theme-btn-primary ${theme === 'light' ? 'theme-btn-primary-light' : 'theme-btn-primary-dark'}`} onClick={routeSettings}>
                            Settings
                        </button>
                    </div>
                    <div className={`flex flex-col gap wv-15 hv-10 justify-start items-center`}>
                        <button className={`theme-btn-danger ${theme === 'light' ? 'theme-btn-danger-light' : 'theme-btn-danger-dark'}`}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leftbar