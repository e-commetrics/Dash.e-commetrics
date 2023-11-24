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

const menu = [
  {
    menuName: [
      { id: 0, name: "ALL CONTENT" },
      { id: 1, name: "Name of BUSINESS and Client objectives" },
      { id: 2, name: "Onboarding Package" },
      { id: 3, name: "MVP + IDEA" },
      { id: 4, name: "Digital Consulting" },
    ],
  },
];
const linkPreviewData = {
  title: "Ecommetrica",
  description:
    "E-commerce consulting with a team of digital experts in marketing and tech dev-ops, assembled, especially for B2B and B2C",
  image:
    "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto/1363639/416846_656883.png",
  url: "https://www.ecommetrica.com/",
};
const Page: React.FC = () => {
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

  return (
    <Container title={proyecto.nombre} className="container mx-auto">
      <section className="flex md:flex-row flex-col px-4 md:px-0">
        <div className="hidden md:block max-w-xs md:w-3/6 py-8 items-start justify-start">
          <Card className="py-4 mb-4 w-48 shadow-sm shadow-white">
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
              .map((item) => (
                <motion.div
                  key={item.title}
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
                      aria-label={item.title}
                      title={item.title}
                      subtitle={item.subtitle}
                    >
                      <p className="mt-2 text-[#EC4899]">{item.highlight}</p>
                      <p className="mt-2">{item.paragraph}</p>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              ))
          ) : (
            <p>There is no content to display.</p>
          )}
          {projectContent &&
            projectContent.data.filter(
              (item) => selectedItem === 0 || item.id === selectedItem
            ).length === 0 && <p>There is no content to display.</p>}
        </div>
        {/* <Card>
        <CardBody className="flex items-center justify-center px-16 py-2">
          <>
            <img src={linkPreviewData.image} alt={linkPreviewData.title} />
            <a href={linkPreviewData.url} className="hover:underline">{linkPreviewData.title}</a>
            <p>{linkPreviewData.description}</p>
          </>
        </CardBody>
      </Card> */}
      </section>
    </Container>
  );
};

export default Page;
