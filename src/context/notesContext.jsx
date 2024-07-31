import {  createContext, useContext, useReducer , useEffect } from "react";
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

     // Load initial state from local storage
    const localState = localStorage.getItem("notesAppState");
    const initial = localState ? JSON.parse(localState) : initialState;

    const [state, noteDispatch] = useReducer(notesReducer, initial);


    // const [{title, description, notes, archive, important, trash}, noteDispatch] = useReducer(notesReducer, initialState)

     // Save state to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("notesAppState", JSON.stringify(state));
    }, [state]);



  // Check for expired notes and delete them
  useEffect(() => {
    const interval = setInterval(() => {
      noteDispatch({ type: "DELETE_EXPIRED_NOTES" });
    }, 24 * 60 * 60 * 1000); // Run once a day

    return () => clearInterval(interval);
  }, []);

    return (
        <notesContext.Provider value={{...state, noteDispatch}}>
            {children}
        </notesContext.Provider>
    )
}

const useNotes = () => useContext(notesContext)

export {NotesProvider, useNotes} 