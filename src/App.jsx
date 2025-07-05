// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/student /dashboard';
import LandingPage from './pages/landing-page';
import HomeLayout from './pages/layout/HomeLayout';
import Earnings from './pages/solver/earnings-page';

const App = () => {
  return (
   <Routes>
   <Route path='/' element={<LandingPage />}/>
   <Route path='/earnings' element={<Earnings />} /> 

   {/* Student Routing */}
    <Route path='/dashboard' element={<HomeLayout />}>
    <Route index element={<Dashboard />} />
    </Route>
   </Routes>
  );
};

export default App;
