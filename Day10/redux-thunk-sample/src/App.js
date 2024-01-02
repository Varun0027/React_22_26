import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Layout from './components/Layout'
import Posts from './pages/Posts'

function App() {
  return (
    <>
      <Routes>

        <Route exact path='/' element={<Login />} />
        <Route exact path='/Register' element={<Register />} />
        <Route element={<Layout />}>
          <Route exact path='/Dashboard' element={<Dashboard />} />
          <Route exact path='/Users' element={<Users />} />
          <Route exact path='/Settings' element={<Settings />} />
          <Route exact path='/Posts' element={<Posts />} />
        </Route>


      </Routes>

    </>
  )
}

export default App