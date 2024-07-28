import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { SideBar } from "../../Component/SideBar";
import { NotesCard } from "../../Component/NotesCard";
import { useNotes } from "../../context/notesContext";

function Home() {
  const { title, description, notes, archive, noteDispatch } = useNotes();

  const onTitleChange = (e) => {
    noteDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };
  const onDescriptionChange = (e) => {
    noteDispatch({
      type: "DESCRIPTION",
      payload: e.target.value,
    });
  };

  const onAddClick = () => {
    noteDispatch({
      type: "ADD_NOTE",
    }),
      noteDispatch({
        type: "CLEAR_NOTE",
      });
  };

//   console.log(notes);
   console.log(archive);
  
  const PinnedNote =
    notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const UnpinnedNote =
    notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

  return (
    <>
      <Navbar />
      <main className="flex gap-3  bg-gray-100 min-h-screen">
        <SideBar />
        <div className="flex flex-col w-full mt-7 ">
          <div className="flex flex-col w-full max-w-md border border-gray-300 relative shadow-md rounded-full m-6  self-center ">
            <input
              value={title}
              onChange={onTitleChange}
              className="border border-gray-300 rounded-t-md focus:outline-none focus:ring-2 focus:ring-cyan-500 border-b-1 p-2"
              placeholder="Enter title"
            />
            <textarea
              value={description}
              onChange={onDescriptionChange}
              className="border border-gray-300 rounded-b-md focus:outline-none border-t-0 focus:ring-2 focus:ring-cyan-500 p-2"
              placeholder="Enter discription"
            />
            <button
              disabled={title.length === 0}
              onClick={onAddClick}
              className="w-7 h-7 p-0.5 m-1 absolute self-end bottom-0 right-0 border bg-indigo-800 text-slate-50 rounded-full hover:bg-indigo-700 "
            >
              <span className="material-icons-outlined">add</span>
            </button>
          </div>
          <div>
            {PinnedNote?.length > 0 && (
              <>
                <h3 className=" w-full max-w-4xl ml-4 font-bold text-lg">
                  <b>Pinned Note</b>
                </h3>
                <div className="flex flex-wrap gap-4 p-2  ">
                  {PinnedNote?.length > 0 &&
                    PinnedNote.map(({ id, title, description, isPinned }) => (
                      <NotesCard
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        isPinned={isPinned}
                      />
                    ))}
                </div>
              </>
            )}
            {PinnedNote?.length > 0 && (
              <h3 className="mt-14 ml-4 text-lg font-bold">
                <b>Other Note</b>
              </h3>
            )}
            <div className="flex flex-wrap gap-4 p-2">
              {UnpinnedNote?.length > 0 &&
                UnpinnedNote.map(({ id, title, description, isPinned }) => (
                  <NotesCard
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    isPinned={isPinned}
                  />
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
