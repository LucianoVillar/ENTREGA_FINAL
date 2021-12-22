import '../src/styles/App.css';
import "../src/styles/Login.css";
import "../src/styles/Register.css";
import "../src/styles/Formulario.css";
import "../src/styles/NuevoSlider.css";
import { Routes, Route } from "react-router-dom";
import React from 'react';
import Origen from './components/Origen';
import Inicio from "./components/Inicio";
import Formulario from './components/Formulario';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Routes>
      <Route path="/Origen" element={<Origen />} />
      <Route path="/Inicio" element={<Inicio />} />
      <Route path="/Formulario" element={<Formulario />} />
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}

export default App;