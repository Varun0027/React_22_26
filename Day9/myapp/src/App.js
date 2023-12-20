import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './assets/css/core.css'
import Users from './pages/Users'
import Adduser from './pages/Adduser'
import Edituser from './pages/Edituser'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/add' element={<Adduser/>}/>
        <Route path='/edit/:id' element={<Edituser/>}/>
      </Routes>
    </>
  )
}

export default App