export const findNotesInImporatnt = (important, id ) => {
    return important.some(note => note.id === id)
  }
  