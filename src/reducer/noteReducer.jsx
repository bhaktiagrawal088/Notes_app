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
            return {
                ...state,
                notes : [...state.notes, state.archive.find(({id}) => id === payload.id)],
                archive : state.archive.filter(({id}) => id !== payload.id),
            }
        case "IMPORTANT_NOTE" :
            return {...state,
                important : [...state.important, state.notes.find(({id}) => id === payload.id)]}
                // notes : state.notes.filter(({id}) => id !== payload.id)};
        case "UNIMPORTANT_NOTE" :
            return {...state,
                // notes : [...state.notes, state.important.find(({id}) => id === payload.id)],
                important : state.important.filter(({id}) => id !== payload.id)};
        case "TRASH_NOTE" :
            return {...state, 
                trash : [...state.trash, {...state.notes.find(({id}) => id === payload.id), trashedAt:Date.now()}],
                notes : state.notes.filter(({id}) => id !== payload.id)};
        case "UNTRASH_NOTE" :
            return {...state, 
                notes : [...state.notes, state.trash.find(({id}) => id === payload.id)], 
                trash : state.trash.filter(({id}) => id !== payload.id)};
        case "DELETE_EXPIRED_NOTES":
            return {...state,
                trash: state.trash.filter(({ trashedAt }) => Date.now() - trashedAt < 30 * 24 * 60 * 60 * 1000) // 30 days in milliseconds
            };
        case "TRASH_ARCHIVE_NOTE":
            const noteToTrashFromArchive = state.archive.find(({ id }) => id === payload.id);
            return { ...state,
                trash: [...state.trash, { ...noteToTrashFromArchive, trashedAt: Date.now() }],
                archive: state.archive.filter(({ id }) => id !== payload.id)};
          
        case "TRASH_IMPORTANT_NOTE":
            const noteToTrashFromImportant = state.important.find(({ id }) => id === payload.id);
            return { ...state,
                trash: [...state.trash, { ...noteToTrashFromImportant, trashedAt: Date.now() }],
                important: state.important.filter(({ id }) => id !== payload.id),
                notes: state.notes.filter(({ id }) => id !== payload.id)};
        default : 
            return state;
    }

}   