// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentDashboard from './pages/student/dashboard';
import Payment from './pages/student/payment';
import SolverDashboard from './pages/solver/dashboard';
import LandingPage from './pages/landing-page';
import FindTask from './pages/find-task';
import StudentPostTask from './pages/student/post-task';
import StudentMyTask from './pages/student/my-task';
import StudentChat from './pages/student/chat';
import SettingsPage from './pages/SettingsPage';
import StudentHomeLayout from './pages/layout/StudentHomeLayout';
import SolverHomeLayout from './pages/layout/SolverHomeLayout';
import SolverEarnings from './pages/solver/earnings-page';
import Solverproposals from './pages/solver/proposals-page';
import SignUp from './pages/auth/signup';
import SignIn from './pages/auth/signin';
import ForgotPassword from './pages/auth/forgot-pass';


const App = () => {
  return (
   <Routes>
   <Route path='/' element={<LandingPage />}/>
   <Route path='/find-task' element={<FindTask />}/>
  
      {/* Auth Routing */}
    <Route path='/auth/signup' element={<SignUp />} />
    <Route path='/auth/signin' element={<SignIn />} />
    <Route path='auth/forgot-password' element={<ForgotPassword />}/>

      {/* Student Routing */}
      <Route path="/student" element={<StudentHomeLayout />}>
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="post-task" element={<StudentPostTask />} />
        <Route path="tasks" element={<StudentMyTask />} />
        <Route path="messages" element={<StudentChat />} />
      <Route path="settings" element={<SettingsPage />} />
    <Route path="payment" element={<Payment />} />
    </Route>

      {/* Solver Routing */}
      <Route path="/solver" element={<SolverHomeLayout />}>
        <Route path="dashboard" element={<SolverDashboard />} />
        <Route path="earnings" element={<SolverEarnings />} />
          <Route path="proposals" element={<Solverproposals />} />

  <Route path="settings" element={<SettingsPage />} />
 
</Route>
    </Routes>
  );
};

export default App;