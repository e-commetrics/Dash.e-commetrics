// pages/Home.tsx
import React from "react";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/react";
import { proyectos } from "@/app/components/proyects";
import Link from "next/link";

interface HomeProps {
  isSidebarOpen: boolean;
}

const Home: React.FC<HomeProps> = ({ isSidebarOpen }) => {
  return (
    <div className="flex">
      <div className={isSidebarOpen ? "md:ml-56 md:p-4" : "md:ml-16 md:p-4"}>
        <h1 className="py-4 px-8">Lista de Proyectos</h1>
        <div className="grid grid-cols-1 py-4 px-8 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {proyectos.map(
            (
              proyecto 
            ) => (
              <Card
                key={proyecto.id}
                className="text-white p-4 rounded-md shadow-md"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {proyecto.nombre}
                </h2>
                <p>{proyecto.descripcion}</p>
                <Link className="py-2" href={proyecto.href}>
                  <Button className="bg-[#EC4899]">Click me</Button>
                </Link>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
