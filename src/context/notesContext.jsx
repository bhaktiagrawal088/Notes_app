import {  createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducer/noteReducer";
import { Archive } from "../Pages/Archive";

const notesContext = createContext();
const NotesProvider = ({children}) =>{

    const initialState = {
        notes: [],
        title : "",
        description : "",
        archive : [],
    }
    const [{title, description, notes, archive}, noteDispatch] = useReducer(notesReducer, initialState)

    return (
        <notesContext.Provider value={{title, description, notes, archive, noteDispatch}}>
            {children}
        </notesContext.Provider>
    )
}

const useNotes = () => useContext(notesContext)

export {NotesProvider, useNotes} 