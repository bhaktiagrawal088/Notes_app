import { NavLink } from "react-router-dom";

export const SideBar = () => {
  const getstyle = ({ isActive }) => {
    const commonstyle = 'flex align-center font-bold gap-1 px-2 py-1 rounded-tr-full rounded-br-full'
    return isActive
      ? `text-slate-50 bg-indigo-800 ${commonstyle}`
      : `hover:bg-indigo-800 hover:text-slate-50 ${commonstyle}` ;
  };
  return (
    <div className="flex flex-col gap-3 border-r-2 shadow-lg  border-b-2 border-cyan-500 md:w-[150px] md:h-screen p-3">
      <NavLink to="/" className={getstyle}>
        <span className="material-icons-outlined">home</span>
        <span>Home</span>
      </NavLink>
      <NavLink to="/archive" className={getstyle}>
        <span className="material-icons-outlined">archive</span>
        <span>Archive</span>
      </NavLink>
      <NavLink to="/important" className={getstyle}>
        <span className="material-icons-outlined">label_important</span>
        <span>Important</span>
      </NavLink>
      <NavLink to="/trash" className={getstyle}>
        <span className="material-icons-outlined">delete</span>
        <span>Trash</span>
      </NavLink>
      <NavLink to="/about" className={getstyle}>
        <span className="material-icons-outlined">person</span>
        <span>About Me</span>
      </NavLink>
    </div>
  );
};
