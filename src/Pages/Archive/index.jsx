import Navbar from "../../Component/Navbar/Navbar"
import { NotesCard } from "../../Component/NotesCard";
import { SideBar } from "../../Component/SideBar"
import { useNotes } from "../../context/notesContext";

export const Archive = () => {

    const {archive} = useNotes();

    return (
        <>
        <Navbar/>
        <main className="flex gap-3 bg-gray-100 min-h-screen">
            <SideBar/> 
            <div className="flex flex-col w-full mt-7 ">
            <div className="flex flex-wrap gap-4 p-2  ">
                  {archive?.length > 0 &&
                    archive.map(({ id, title, description, isPinned }) => (
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
        </main>
        </>
    )

}