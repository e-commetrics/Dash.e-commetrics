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
    descripcion: "Descripción del Proyecto 1...",
    href: "/proyectos/1",
  },
  {
    id: 2,
    nombre: "Reforma Dental",
    descripcion: "Descripción del Proyecto 2...",
    href: "/proyectos/2",
  },
  {
    id: 3,
    nombre: "Ecommetrics",
    descripcion: "Descripción del Proyecto 3...",
    href: "/proyectos/3",
  },
];
