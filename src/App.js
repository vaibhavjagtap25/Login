// src/App.js

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Dashboard/Login";
import Home from "./Dashboard/Home";
import useAuth, { AuthProvider } from "./AuthContext";

const AppRoutes = () => {
  const { user, logout } = useAuth();
  console.log("---------------------------");
  
  console.log(user);
  

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
      <Route
        path="/home"
        element={user ? <Home onLogout={logout} /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;
