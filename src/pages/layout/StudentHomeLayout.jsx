import Sidebar from '../../component/studentSidebar';
import { Outlet } from 'react-router-dom';

export default function StudentHomeLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-60 bg-[#f5f5f5] ">
        <Outlet /> 
      </main>
    </div>
  );
}
