import React from 'react'
import Topbar from './Topbar'
import Leftbar from './Leftbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <div className='Appbar'>
        <Topbar/>
        <Leftbar/>
        <Outlet/>
    </div>
    </>
  )
}

export default Layout