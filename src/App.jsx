import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from  './Pages/Home/Home'
import { Archive } from './Pages/Archive'
import { Important } from './Pages/Important'
import { Trash } from './Pages/Trash'

function App() {


  // useEffect(() => {
  //   const storedNotes = JSON.parse(localStorage.getItem('notes'))
  //   if(storedNotes && storedNotes.length > 0) {
  //     setNotes(storedNotes)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('notes', JSON.stringify(notes))
  // },[notes])

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
