"use client"
import React, { useState } from 'react';
import Home from './pages/Home'
import Navbar from './components/navbar'
import { proyectos } from './components/proyects'; // Importa los proyectos

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} proyectos={proyectos} />
      <Home isSidebarOpen={isSidebarOpen} />
    </>
  );
};

export default App;