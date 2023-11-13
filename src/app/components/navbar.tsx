// components/navbar.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  proyectos: {
    id: number;
    nombre: string;
    descripcion: string;
    href: string;
  }[];
}

const Navbar: React.FC<NavbarProps> = ({
  isSidebarOpen,
  toggleSidebar,
  proyectos,
}) => {
  const pathname = usePathname();

  const sidebarVariants = {
    open: { width: "220px", minWidth: "0" },
    closed: { width: "70px", minWidth: "0" },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 h-full bg-gray-800 text-white p-4 overflow-hidden"
      initial={false}
      animate={isSidebarOpen ? "open" : "closed"}
      variants={sidebarVariants}
    >
      <div
        className="sidebar-icon cursor-pointer text-white py-4"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <motion.ul
        className="nav-links"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isSidebarOpen ? 1 : 0, x: isSidebarOpen ? 0 : -50 }}
      >
        <li className="nav-item">
          <Link href="/">
            <span
              className={`px-2 rounded ${
                pathname === "/" ? "bg-blue-500" : "hover:bg-blue-200"
              }`}
            >
              Home
            </span>
          </Link>
        </li>
        {proyectos.map((proyecto) => (
          <li key={proyecto.id} className="nav-item">
            <Link href={proyecto.href}>
              <span
                className={`px-2   rounded ${
                  pathname === proyecto.href
                    ? "bg-blue-500"
                    : "hover:bg-blue-200"
                }`}
              >
                {proyecto.nombre}
              </span>
            </Link>
          </li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
