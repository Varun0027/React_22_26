import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Song from './pages/Song'

const App = () => {
  return (

    <Routes>
      <Route element={<Layout/>}>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/song/:id' element={<Song/>}/>
      </Route>


    </Routes>

  )
}

export default App