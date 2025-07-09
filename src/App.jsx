// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentDashboard from "./pages/student/dashboard";
import SolverDashboard from "./pages/solver/dashboard";
import LandingPage from "./pages/landing-page";
import StudentHomeLayout from "./pages/layout/StudentHomeLayout";
import StudentPostTask from "./pages/student/post-task";
import StudentMyTask from "./pages/student/my-task";
import StudentChat from "./pages/student/chat";
import SolverHomeLayout from "./pages/layout/SolverHomeLayout";
import SolverEarnings from "./pages/solver/earnings-page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Student Routing */}
      <Route path="/student" element={<StudentHomeLayout />}>
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="post-task" element={<StudentPostTask />} />
        <Route path="tasks" element={<StudentMyTask />} />
        <Route path="messages" element={<StudentChat />} />
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
