import React from 'react'
import Songlist from '../components/Songlist'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <div className='h-screen w-screen flex gap-2 flex-row justify-center items-center flex-1 select-none'>
                <div className='w-3/12  h-full shadow-md rounded-md flex flex-1 items-center justify-center bg-slate-100'>
                    <Songlist />
                </div>
                <div className='w-9/12 bg-slate-200'>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default Layout