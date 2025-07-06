import Sidebar from '../../component/solverSidebar';
import { Outlet } from 'react-router-dom';

export default function Solverproposals() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1  bg-[#f5f5f5] p-6">
        <p>proposals page content </p>
      </main>
    </div>
  );
}
