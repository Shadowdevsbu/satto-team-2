import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Pencil,
  ListTodo,
  MessageSquare,
  Settings,
  CreditCard,
  LogOut,
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={18} /> },
    { label: 'Post Task', path: '/dashboard/post-task', icon: <Pencil size={18} /> },
    { label: 'My Tasks', path: '/dashboard/tasks', icon: <ListTodo size={18} /> },
    { label: 'Messages', path: '/dashboard/messages', icon: <MessageSquare size={18} /> },
    { label: 'Settings', path: '/dashboard/settings', icon: <Settings size={18} /> }, 
    { label: 'Payments', path: '/dashboard/payments', icon: <CreditCard size={18} /> },
  ];

  return (
    <aside className="w-60 min-h-screen bg-white shadow-md px-4 py-6">
      <h2 className="text-lg font-bold mb-8 text-center">SATTO</h2>
      <nav className="flex flex-col space-y-2">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md hover:bg-gray-100 ${
                isActive ? 'bg-green-200 text-black' : 'text-gray-600'
              }`
            }
          >
            <div className="mr-3">{item.icon}</div>
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}

<div className="mt-auto pt-10">
            <div className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer">
              <LogOut size={18} className="mr-3" />
              <span className="text-sm font-medium">Logout</span>
            </div>
          </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
