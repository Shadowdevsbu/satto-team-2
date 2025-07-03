import Sidebar from '../../component/studentSidebar';
import { Outlet } from 'react-router-dom';

export default function HomeLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-200 p-6">
        <Outlet /> 
      </main>
    </div>
  );
}
