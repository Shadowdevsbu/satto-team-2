import { NavLink } from "react-router-dom";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { RiLayout3Fill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import { BsFilePersonFill } from "react-icons/bs";
import { FaMoneyBills, FaClipboardList, FaCirclePause } from "react-icons/fa6";

const menuLinks = [
  { name: "Dashboard", path: "/solver/dashboard", icon: <RiLayout3Fill size={18} /> },
  { name: "My tasks", path: "/solver/tasks", icon: <FaClipboardList size={18} /> },
  { name: "Proposals", path: "/solver/proposals", icon: <BsFilePersonFill size={18} /> },
  { name: "Messages", path: "/solver/messages", icon: <BiSolidMessageAltDetail size={18} /> },
  { name: "Settings", path: "/solver/settings", icon: <FaCirclePause className="rotate-90" size={18} /> },
  { name: "Earnings", path: "/solver/earnings", icon: <FaMoneyBills size={18} /> },
];

const Sidebar = () => {
  return (
    <aside className="w-60 h-screen fixed top-0 left-0 bg-white border-r border-gray-200 shadow-sm px-4 py-6 flex flex-col">
      {/* Header */}
      <h1 className="text-xl font-bold text-center mb-10">SATTO</h1>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {menuLinks.map(({ name, icon, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md transition cursor-pointer ${
                isActive
                  ? "bg-[#C7F7C1] text-black border-l-4 border-[#00894E]"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {icon}
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>

   
      <div className="pt-6 border-t mt-4">
        <div className="flex items-center gap-3 px-4 py-2 text-[#404040] hover:bg-red-100 rounded-md cursor-pointer text-sm font-medium">
          <IoLogOut size={18} />
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
