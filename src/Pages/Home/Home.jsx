import React, { useReducer, useState } from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import { SideBar } from '../../Component/SideBar'
import { notesReducer } from '../../reducer/noteReducer'

function Home() {
    const initialState = {
        notes: [],
        title : "",
        description : ""
    }
    const [{title, description, notes}, noteDispatch] = useReducer(notesReducer, initialState)

    const onTitleChange = (e) => {
        noteDispatch({
            type: "UPDATE_TITLE",
            payload: e.target.value
        })
    }
    const onDescriptionChange = (e) => {
        noteDispatch({
            type: "UPDATE_DESCRIPTION",
            payload: e.target.value
     })

   return (
    <>
    <Navbar/>
    <main className='flex gap-3'>
        <SideBar/>
        <div className=''>
            <div className='flex flex-col w-[300px] border border-gray-300 relative'>
                <input value={title} 
                onChange={onTitleChange} 
                className='border' 
                placeholder='Enter title'/>
                <textarea 
                value={description} 
                onChange={onDescriptionChange} 
                className='border' 
                placeholder='Enter text'/>
                <button className='absolute bottom-0 right-0'>
                    <span className='material-symbols-outlined'>add</span>
                </button>
            </div>
        </div>
    </main>
    </>
  )
}
}

export default Home
