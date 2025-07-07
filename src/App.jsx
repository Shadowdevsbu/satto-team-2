// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentDashboard from './pages/student /dashboard';
import SolverDashboard from './pages/solver/dashboard';
import LandingPage from './pages/landing-page';
import StudentHomeLayout from './pages/layout/StudentHomeLayout';
import SolverHomeLayout from './pages/layout/SolverHomeLayout';
import SolverEarnings from './pages/solver/earnings-page';

const App = () => {
  return (
   <Routes>
   <Route path='/' element={<LandingPage />}/>
  

   {/* Student Routing */}
    <Route path='/student' element={<StudentHomeLayout/>}>
    <Route path="dashboard" element={<StudentDashboard />} />
    </Route>

     {/* Solver Routing */}
     <Route path="/solver" element={<SolverHomeLayout />}>
  <Route path="dashboard" element={<SolverDashboard />} />
  <Route path="earnings" element={<SolverEarnings />} />
</Route>


   </Routes>

   
  );
};

export default App;
