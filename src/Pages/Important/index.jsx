import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { SideBar } from "../../Component/SideBar";
import { useNotes } from "../../context/notesContext";
import { NotesCard } from "../../Component/NotesCard";

export const Important = () => {

    const {important} = useNotes();


  return (
    <>
      <Navbar />
      <main className="flex gap-3 bg-gray-100 min-h-screen">
        <SideBar />
        <div className="flex flex-col w-full mt-7">
        <div className="flex flex-wrap gap-4 p-2  ">
            <h3 className="w-full  ml-4 font-bold text-2xl"><b>Important Notes</b></h3>
                  {important?.length > 0 &&
                    important.map(({ id, title, description }) => (
                      <NotesCard
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                      />
                    ))}
                </div>
        </div>
      </main>
    </>
  );
};
