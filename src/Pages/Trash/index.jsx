import Navbar from "../../Component/Navbar/Navbar"
import { SideBar } from "../../Component/SideBar"
export const Trash = () => {
    return (
        <>
        <Navbar/>
        <main className="flex gap-3 bg-gray-100 min-h-screen">
            <SideBar/> 
            <div className="flex flex-col w-full mt-7 ">
            
            </div>
        </main>
        </>
    )
}