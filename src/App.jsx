// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentDashboard from './pages/student/dashboard';
import Payment from './pages/student/payment';
import SolverDashboard from './pages/solver/dashboard';
import LandingPage from './pages/landing-page';
import FindTask from './pages/find-task';
import SettingsPage from './pages/SettingsPage';
import StudentHomeLayout from './pages/layout/StudentHomeLayout';
import SolverHomeLayout from './pages/layout/SolverHomeLayout';
import SolverEarnings from './pages/solver/earnings-page';

const App = () => {
  return (
   <Routes>
   <Route path='/' element={<LandingPage />}/>
   <Route path='/find-task' element={<FindTask />}/>
  

   {/* Student Routing */}
    <Route path='/student' element={<StudentHomeLayout/>}>
    <Route path="dashboard" element={<StudentDashboard />} />
    <Route path="settings" element={<SettingsPage />} />
    <Route path="payment" element={<Payment />} />
    </Route>

     {/* Solver Routing */}
     <Route path="/solver" element={<SolverHomeLayout />}>
  <Route path="dashboard" element={<SolverDashboard />} />
  <Route path="earnings" element={<SolverEarnings />} />
  <Route path="settings" element={<SettingsPage />} />
 
</Route>


   </Routes>

   
  );
};

export default App;
