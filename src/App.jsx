import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from  './Pages/Home/Home'
import { Archive } from './Pages/Archive'
import { Important } from './Pages/Important'
import { Trash } from './Pages/Trash'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/archive' element={<Archive/>}/>
        <Route path='/important' element={<Important/>}/>
        <Route path='/trash' element={<Trash/>}/>
      </Routes>
    </>
  )
}

export default App
