import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import ExercisePage from './pages/pgexercicio';
import DashboardPage from './pages/dashboard';
import Sidebar from './components/Sidebar';
import Essay from './pages/essay';
import Learning from './pages/learning';


const App = () => {
  return (
    <><div>
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/essay" element={<Essay />} />
          <Route path="/" element={<DashboardPage />} />
          <Route path="/learning" element={<Learning />} />

        </Routes>
      </Router>
    </div>
    </>
  );
};

export default App;
