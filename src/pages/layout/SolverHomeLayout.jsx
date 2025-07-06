import Sidebar from '../../component/solverSidebar';
import { Outlet } from 'react-router-dom';

export default function SolverHomeLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-60 bg-[#f5f5f5] p-6">
        <Outlet /> 
      </main>
    </div>
  );
}
