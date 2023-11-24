// // proyectos/[id]/page.tsx
// "use client";
// import React, { useState } from "react";
// import { useParams } from "next/navigation";
// import { proyectos } from "@/app/components/proyects";
// import NotFound from "@/app/not-found";
// import Navbar from "@/app/components/navbar";
// import {
//   Card,
//   CardBody,
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   useDisclosure,
// } from "@nextui-org/react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// // import { cards } from "@/app/components/cards";
// const cards = [
//   {
//     id: 1,
//     content: [
//       {
//         title: "DRIVE and bank of files of SYL",
//         description: "",
//         href: "DRIVE",
//         link: "https://onedrive.live.com/?id=C991AE2F4644B963%2149485&resid=C991AE2F4644B963%2149485&ithint=folder&authkey=%21AEF2sONXAjPMcmk"
//       }
//     ],
//   },
//   {
//     id: 2,
//     content: [
//       {
//         title: "Collection of List of requirements",
//         description: "",
//         href: "List of requirements",
//         link: "https://docs.google.com/spreadsheets/d/1HtNX6qZnwcg4TR5mlTnsad2-t4yNLlXAGKTVX3U7r8k/edit#gid=0"
//       },
//       {
//         title: "SYL Documentation",
//         description: "Text document with catalog of services and events. Combined with initial copy and content",
//         href: "SYL seo and page schema.docx",
//         link: "https://onedrive.live.com/edit?id=C991AE2F4644B963!48891&resid=C991AE2F4644B963!48891&ithint=file%2cdocx&authkey=!AJVZz0EVKVOg4Ls&wdo=2"
//       },
//     ],
//   },
//   {
//     id: 3,
//     content: [
//       {
//         title: "Webpage SYL 1.2",
//         description: "Content update for 1.2",
//       },
//       {
//         title: "Webpage SYL 2.0",
//         description: "Bolsa de Trabajo y Base de datos Usuarios y contreseña para cargar historial y CV para fines de reclutamiento avanzado (linkedin?)",
//       }
//     ],
//   },
//   {
//     id: 4,
//     content: [
//       {
//         title: "Benchmarking",
//         description: "list of companies and competences",
//       },
//       {
//         title: "Create Multichannel Stategy"
//       },
//       {
//         title: "Growth hacking with META-Ads"
//       },
//       {
//         title: "Growth hacking with SEO"
//       },
//       {
//         title: "Final Presentation"
//       }
//     ],
//   },
// ];

// interface HomeProps {
//   isSidebarOpen: boolean;
// }

// interface Content {
//   title: string;
//   description?: string;
//   href?: string;
//   link?: string;
// }

// const Page: React.FC<HomeProps> = ({ isSidebarOpen: initialIsSidebarOpen }) => {
//   const { id } = useParams();
//   const proyecto = proyectos.find((proyecto) => proyecto.id === Number(id));

//   const [isSidebarOpen, setSidebarOpen] = useState(initialIsSidebarOpen);
//   const [selectedContent, setSelectedContent] = useState<Content | null>(null);

//   if (!proyecto) {
//     return <NotFound />;
//   }

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const handleCardClick = (content: Content) => {
//     setSelectedContent(content);
//     onOpen();
//   };

//   return (
//     <motion.div
//       className={isSidebarOpen ? "ml-56 p-16" : "ml-16 p-16"}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Navbar
//         isSidebarOpen={isSidebarOpen}
//         toggleSidebar={toggleSidebar}
//         proyectos={proyectos}
//       />
//       <h1 className="flex justify-start text-2xl">{proyecto.nombre}</h1>
//       <div className="flex flex-col md:flex-row py-8">
//         <div className="flex-1">Name of BUSINESS and Client objectives</div>
//         <div className="flex-1">Onboarding Package</div>
//         <div className="flex-1">MVP + IDEA</div>
//         <div className="flex-1">N/A Strategy + GrowthHacking</div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
//         {cards.map((card) => (
//           <div className="space-y-4">
//             {card.content.map((content, index) => (
//               <Card
//                 isPressable
//                 onPress={() => handleCardClick(content)}
//                 key={index}
//                 className="w-11/12 h-20 hover:bg-slate-950 shadow-sm shadow-white"
//               >
//                 <CardBody>
//                   <p>{content.title}</p>
//                 </CardBody>
//               </Card>
//             ))}
//           </div>
//         ))}
//       </div>
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalContent>
//           <ModalHeader className="flex justify-center border-b">
//             {selectedContent?.title}
//           </ModalHeader>
//           <ModalBody>
//             <div className="flex-1">
//               {selectedContent?.link && <Link target="_blank" className="outline-b underline"  href={selectedContent.link}>{selectedContent?.href}</Link>}
//               <p className="py-2">{selectedContent?.description}</p>
//             </div>
//           </ModalBody>
//           <ModalFooter>
//             <Button color="danger" onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </motion.div>
//   );
// };

// export default Page;

import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page