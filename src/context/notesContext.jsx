import {  createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducer/noteReducer";

const notesContext = createContext();
const NotesProvider = ({children}) =>{

    const initialState = {
        notes: [],
        title : "",
        description : "",
        archive : [],
        important : [],
        trash : [],
    }
    const [{title, description, notes, archive, important, trash}, noteDispatch] = useReducer(notesReducer, initialState)

    return (
        <notesContext.Provider value={{title, description, notes, archive, important, trash, noteDispatch}}>
            {children}
        </notesContext.Provider>
    )
}

const useNotes = () => useContext(notesContext)

export {NotesProvider, useNotes} 