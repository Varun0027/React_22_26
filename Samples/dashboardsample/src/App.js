import React from 'react'
import './assets/css/style.css'
import './assets/css/Table.css'
import './assets/css/Scrollbar.css'
import './assets/css/Themeswitch.css'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Users from './pages/Users';
import Settings from './pages/Settings';
import { Routes, Route } from 'react-router-dom'
import Edituser from './pages/Edituser'
import Adduser from './pages/Adduser'
const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/users' element={<Users />} />
        <Route path='/add' element={<Adduser />} />
        <Route path='/edit/:id' element={<Edituser />} />
        <Route path='/settings' element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App