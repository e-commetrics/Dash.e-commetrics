// proyectos.ts
export interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  href: string;
}

export const proyectos: Proyecto[] = [
  
  {
    id: 1,
    nombre: "SYL Talento",
    descripcion: "Description of Project 1...",
    href: "/blog/1",
  },
  {
    id: 2,
    nombre: "Reforma Dental",
    descripcion: "Description of Project 2...",
    href: "/blog/2",
  },
  {
    id: 3,
    nombre: "Ecommetrics",
    descripcion: "Description of Project 3...",
    href: "/blog/3",
  },
];
