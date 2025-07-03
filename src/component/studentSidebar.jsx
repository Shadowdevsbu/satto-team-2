
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
      { label: 'Dashboard', icon: <LayoutDashboard size={18} />, active: false },
      { label: 'Post Task', icon: <Pencil size={18} />, active: false },
      { label: 'My tasks', icon: <ListTodo size={18} />, active: false },
      { label: 'Messages', icon: <MessageSquare size={18} />, active: false },
      { label: 'Settings', icon: <Settings size={18} />, active: false }, 
      { label: 'Payments', icon: <CreditCard size={18} />, active: false },
    ];
  
    return (
      <aside className="w-60 min-h-screen bg-white shadow-lg px-4 py-6">
        <h2 className="text-lg font-bold mb-8 text-center">SATTO</h2>
        <nav className="flex flex-col space-y-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-200 ${
                item.active ? 'bg-green-200 text-black' : 'text-gray-600'
              }`}
            >
              <div className="mr-3">{item.icon}</div>
              <span className="text-sm font-inter font-medium">{item.label}</span>
            </div>
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
  