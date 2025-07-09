import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaPen,
  FaTasks,
  FaComments,
  FaCog,
  FaMoneyCheckAlt,
  FaSignOutAlt,
} from 'react-icons/fa';
import { RiLayout3Fill } from "react-icons/ri";

const Sidebar = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/student/dashboard', icon: <RiLayout3Fill size={18} /> },
    { label: 'Post Task', path: '/student/post-task', icon: <FaPen size={18} /> },
    { label: 'My tasks', path: '/student/tasks', icon: <FaTasks  /> },
    { label: 'Messages', path: '/student/messages', icon: <FaComments /> },
    { label: 'Settings', path: '/dashboard/settings', icon: <FaCog /> },
    { label: 'Payments', path: '/dashboard/payments', icon: <FaMoneyCheckAlt /> },
  ];

  return (
    <aside className="w-60 h-screen fixed left-0 top-0 bg-white shadow-md px-4 py-6 flex flex-col">
      <h2 className="text-lg font-bold mb-8 text-center">SATTO</h2>
      <nav className="flex-1 flex flex-col space-y-2">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md hover:bg-gray-100 transition ${
                isActive ? 
                  "bg-[#C7F7C1] text-black border-l-4 border-[#00894E]"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <div className="mr-3 text-[18px]">{item.icon}</div>
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout button at the bottom */}
      <div className="pt-6 border-t">
        <div className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer">
          <FaSignOutAlt className="mr-3 text-[18px]" />
          <span className="text-sm font-medium">Logout</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
