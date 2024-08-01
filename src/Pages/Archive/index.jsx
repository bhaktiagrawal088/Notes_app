import Navbar from "../../Component/Navbar/Navbar"
import { NotesCard } from "../../Component/NotesCard";
import { SideBar } from "../../Component/SideBar"
import { useNotes } from "../../context/notesContext";

export const Archive = () => {

    const {archive} = useNotes();

    return (
        <>
        <Navbar/>
        <main className="flex flex-col md:flex-row gap-3 bg-gray-100 min-h-screen">
            <SideBar/> 
            <div className="flex flex-col w-full mt-7  p-4 md:p-6 ">
            <div className="flex flex-wrap gap-4 p-2  ">
            <h3 className="w-full  ml-4 font-bold text-2xl"><b>Archive Notes</b></h3>
                  {archive?.length > 0 &&
                    archive.map(({ id, title, description}) => (
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
    )

}