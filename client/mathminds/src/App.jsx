import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import ExercisePage from './pages/pgexercicio';
import DashboardPage from './pages/dashboard';

const App = () => {
  return (
    <><div>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />

        </Routes>
      </Router>
    </div>
    </>
  );
};

export default App;
