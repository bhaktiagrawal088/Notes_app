export const FindNotesInDelete = (trash, id) => {
    if (Array.isArray(trash)) {
      return trash.some(note => note.id === id);
    }
    return false;
  }
  