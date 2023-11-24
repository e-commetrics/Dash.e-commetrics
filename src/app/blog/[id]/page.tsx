"use client";
import React, { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { useParams } from "next/navigation";
import { proyectos } from "@/app/components/proyects";
import NotFound from "@/app/not-found";
import Container from "@/app/components/container";
import { Listbox, ListboxItem } from "@nextui-org/react";
import content from "@/app/components/content";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Navbar from "@/app/components/navbar";
import Link from "next/link";


const menu = [
  {
    menuName: [
      { id: 0, name: "ALL CONTENT" },
      { id: 1, name: "Name of BUSINESS and Client objectives" },
      { id: 2, name: "Onboarding Package" },
      { id: 3, name: "MVP + IDEA" },
      { id: 4, name: "N/A Strategy + GrowthHacking" },
    ],
  },
];

interface HomeProps {
  isSidebarOpen: boolean;
}



const Page: React.FC<HomeProps> = ({ isSidebarOpen: initialIsSidebarOpen }) => {
  const { id } = useParams();
  const proyecto = proyectos.find((proyecto) => proyecto.id === Number(id));
  const [selectedItem, setSelectedItem] = useState(0);
  
  if (!proyecto) {
    return <NotFound />;
  }

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  const projectContent = content.find((item) => item.projectId === Number(id));
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const [isSidebarOpen, setSidebarOpen] = useState(initialIsSidebarOpen);

  return (
    <Container
      title={proyecto.nombre}
      className={
        isSidebarOpen
          ? "md:ml-56 md:p-16 container mx-auto"
          : "md:ml-16 md:p-16 container mx-auto"
      }
    >
      <div className="hidden md:block">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          proyectos={proyectos}
        />
      </div>

      <section className="flex md:flex-row flex-col px-4 md:px-0">
        <div className="hidden md:block max-w-md md:w-3/6 px-4 py-8 items-start justify-start">
          <Card className=" w-auto shadow-sm shadow-white">
            <CardBody className="overflow-visible py-2">
              <Listbox>
                {menu.flatMap((item) =>
                  item.menuName.map(({ id, name }) => (
                    <ListboxItem
                      key={id}
                      onClick={() => handleItemClick(id)}
                      className={`text-center uppercase ${
                        selectedItem === id ? "text-[#EC4899]" : ""
                      }`}
                    >
                      {name}
                    </ListboxItem>
                  ))
                )}
              </Listbox>
            </CardBody>
          </Card>
        </div>
        <div className="w-full md:w-7/10 space-y-8 py-8">
          {projectContent &&
          projectContent.data &&
          projectContent.data.length > 0 ? (
            projectContent.data
              .filter((item) => selectedItem === 0 || item.id === selectedItem)
              .map((item) =>
                item.data.map((subItem) => (
                  <motion.div
                    key={subItem.title}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <Accordion
                      className="border-t rounded-lg shadow-sm shadow-white border-white"
                      motionProps={{
                        variants: {
                          enter: {
                            y: 0,
                            opacity: 1,
                            height: "auto",
                            transition: {
                              height: {
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                                duration: 1,
                              },
                              opacity: {
                                easings: "ease",
                                duration: 1,
                              },
                            },
                          },
                          exit: {
                            y: -10,
                            opacity: 0,
                            height: 0,
                            transition: {
                              height: {
                                easings: "ease",
                                duration: 0.25,
                              },
                              opacity: {
                                easings: "ease",
                                duration: 0.3,
                              },
                            },
                          },
                        },
                      }}
                    >
                      <AccordionItem
                        key={item.id}
                        aria-label={subItem.title}
                        title={subItem.title}
                        subtitle={subItem.subtitle}
                      >
                        <p className="text-[#EC4899]">{subItem.highlight}</p>
                        <p>{subItem.paragraph}</p>
                        {subItem?.image && (
                          <img src={subItem.image} className="w-auto h-auto" alt="preview-image" />
                        )}
                        {subItem?.link && (
                          <Link
                            target="_blank"
                            className="outline-b underline"
                            href={subItem.link}
                          >
                            {subItem.href}
                          </Link>
                        )}
                      </AccordionItem>
                    </Accordion>
                  </motion.div>
                ))
              )
          ) : (
            <p>There is no content to display.</p>
          )}
          {projectContent &&
            projectContent.data.filter(
              (item) => selectedItem === 0 || item.id === selectedItem
            ).length === 0 && <p>There is no content to display.</p>}
        </div> 
      </section>
    </Container>
  );
};

export default Page;
