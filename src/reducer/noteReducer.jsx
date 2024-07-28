import {v4 as uuid} from 'uuid'

export const notesReducer = (state, {type , payload}) => {
    switch(type) {
        case "TITLE":
            return {...state, title: payload};
        case "DESCRIPTION" :
            return {...state, description: payload};
        case "ADD_NOTE" :
            return {...state, 
                notes  : [ 
                    ...state.notes,  
                    {title : state.title , description : state.description, id : uuid(), isPinned: false}]};
        case "CLEAR_NOTE":
            return {...state, title: "", description: ""};
        case  "PINNED_NOTE":
            console.log("Pinned Note");
            return {...state, 
                notes : state.notes.map(note => note.id === payload.id ? {...note, isPinned: !note.isPinned} : note)};
        case "UNPINNED_NOTE" :
            console.log("Unpinned Note")
            return {...state,
                notes : state.notes.map(note => note.id === payload.id ? {...note, isPinned : !note.isPinned} : note)};
        case "ARCHIVE_NOTE":
            return {...state, 
                archive : [...state.archive, state.notes.find(({id}) =>id === payload.id)],
                notes : state.notes.filter(({id}) => id !== payload.id)};
        case "UNARCHIVE_NOTE":
            return {...state,
                notes : [...state.notes, state.archive.find(({id}) => id === payload.id)],
                archive : state.archive.filter(({id}) => id !== payload.id),
            }
        default : 
            return state;
    }

}   