import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landpage from './pages/Landpage';
import Login from './pages/login';
import Signup from './pages/signup';
import SignupCard from './pages/signup-card';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup/profile" element={<SignupCard />} />
      <Route path="/signup/type" element={<Signup />} />
    </Routes>
  )
}

export default App;
