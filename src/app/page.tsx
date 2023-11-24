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
      <div className='hidden md:block'>
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} proyectos={proyectos} />
      </div>
      <Home isSidebarOpen={isSidebarOpen} />
    </>
  );
};

export default App;