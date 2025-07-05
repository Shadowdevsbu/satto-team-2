// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import LandingPage from './pages/landing-page';
import HomeLayout from './pages/layout/HomeLayout';
import SettingsPage from './pages/SettingsPage';

const App = () => {
  return (
   <Routes>
   <Route path='/' element={<LandingPage />}/>
   <Route path='/settings' element={<SettingsPage />}/>
   
    <Route path='/dashboard' element={<HomeLayout />}>
    <Route index element={<Dashboard />} />
    </Route>
   </Routes>
  );
};

export default App;
