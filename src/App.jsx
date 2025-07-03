// App.jsx
import React from 'react';
import Sidebar from './component/studentSidebar';
import './App.css'
const App = () => {
  return (
    <div className="flex font-inter min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-200 p-6">
        <h1 className="text-2xl font-bold">Welcome to Satto</h1>
        {/* Main content*/}
      </main>
    </div>
  );
};

export default App;
