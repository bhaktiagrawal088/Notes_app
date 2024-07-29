import { useNotes } from "../../context/notesContext";
import { findNotesInArchive } from "../../utils/FindNotesInArchive";
import { FindNotesInDelete } from "../../utils/FindNotesInDelete";
import { findNotesInImporatnt } from "../../utils/findNotesInImportant";

export const NotesCard = ({ id, title, description, isPinned }) => {
  const { noteDispatch, archive  } = useNotes();
  const {important, trash} = useNotes();


  const onClickPinned = (id) => {
    !isPinned
      ? noteDispatch({
          type: "PINNED_NOTE",
          payload: { id },
        })
      : noteDispatch({
          type: "UNPINNED_NOTE",
          payload: { id },
        });
  };

  const onArchiveClick = (id) => {
    !isNotesInArchive
      ? noteDispatch({
          type: "ARCHIVE_NOTE",
          payload: { id },
        })
      : noteDispatch({
          type: "UNARCHIVE_NOTE",
          payload: { id },
        });
  };

  const onImportantClick = (id) => {
    !isNotesInImportant ? noteDispatch({
      type: "IMPORTANT_NOTE",
      payload: { id },
    })
    : noteDispatch({
      type: "UNIMPORTANT_NOTE",
      payload: { id },
      });
  }

  const onDeleteClick = (id) => {
    !isNotesInDelete ? noteDispatch({
      type: "TRASH_NOTE",
      payload: { id },
      })
      : noteDispatch({
        type: "UNTRASH_NOTE",
        payload: { id },
        });
  }



  const isNotesInArchive = findNotesInArchive(archive, id);
  const isNotesInImportant = findNotesInImporatnt(important, id);
  const isNotesInDelete = FindNotesInDelete(trash, id);

  return (
    <div
      className="w-56 border border-neutral-800 p-2 rounded-md bg-cyan-50 shadow-md  "
      key={id}
    >
      <div className="flex justify-between border-b-2 pb-1 mb-1">
        <p>
          <b>{title}</b>
        </p>
        {
          !isNotesInArchive  && !isNotesInDelete ? (
            <button onClick={() => onImportantClick(id)}
            className="hover:text-yellow-500 transition-colors duration-200 ease-in-out pl-24">
          <span 
          className={ 
             isNotesInImportant ?  "material-icons" : "material-icons-outlined"}
            >folder_special</span>
        </button>
          ) : <></>
        }
        {!isNotesInArchive && !isNotesInImportant && !isNotesInDelete? (
          <button onClick={() => onClickPinned(id)}>
            <span
              className={
                isPinned
                  ? "material-icons text-indigo-600"
                  : "material-icons-outlined"
              }
            >
              push_pin
            </span>
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col gap-2 mt-2  ">
        <p>{description}</p>
        <div className="ml-auto">
          {
            !isNotesInImportant && !isNotesInDelete ?  (
              <button
            className="hover:text-indigo-700"
            onClick={() => onArchiveClick(id)}
          >
            <span
              className={
                isNotesInArchive ? "material-icons" : "material-icons-outlined"
              }
            >
              archive
            </span>
          </button>
            ) : <></>
          }
          <button onClick={() => onDeleteClick(id)}
          className="hover:text-red-500">
            <span className={
              isNotesInDelete ? "material-icons" : "material-icons-outlined"}>delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
