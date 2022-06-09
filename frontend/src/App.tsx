import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <main className="form-signin w-100 m-auto">
          <Routes>
            <Route path="/products" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Register />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
