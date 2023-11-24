type ContentItem = {
  title: string;
  subtitle?: string;
  highlight?: string;
  paragraph?: string;
  href?: string;
  link?: string;
  image?: string;
};

type DataItem = {
  id: number;
  data: ContentItem[];
};

type ProjectItem = {
  projectId: number;
  data: DataItem[];
};

const content: ProjectItem[] = [
  {
    projectId: 1,
    data: [
      {
        id: 1,
        data: [
          {
            title: "Name of BUSINESS and Client objectives",
            subtitle: "DRIVE and bank of files of SYL",
            href: "DRIVE", 
            link: "https://onedrive.live.com/?id=C991AE2F4644B963!49485&resid=C991AE2F4644B963!49485&ithint=folder&authkey=!AEF2sONXAjPMcmk",
          },
        ],
      },
      {
        id: 2,
        data: [
          {
            title: "Collection of List of requirements",
            href: "List of requirements", 
            image: "https://lh7-us.googleusercontent.com/docs/AHkbwyJuDBxbRnYD61LLNbyOuAG004ZeSCGNzcAb1Q2buMFuQB4AegEcPCpnMx7wNkXxwtcbVTrDak_SM6EO6YVARejPfzi9DrzqveEIpPr61OyikuA=w1200-h630-p",
            link: "https://docs.google.com/spreadsheets/d/1HtNX6qZnwcg4TR5mlTnsad2-t4yNLlXAGKTVX3U7r8k/edit#gid=0"
          },
          {
            title: "SYL Documentation",
            subtitle: "Text document with catalog of services and events. Combined with initial copy and content",
            href: "SYL seo and page schema.docx", 
            link: "https://onedrive.live.com/edit?id=C991AE2F4644B963!48891&resid=C991AE2F4644B963!48891&ithint=file%2cdocx&authkey=!AJVZz0EVKVOg4Ls&wdo=2"
       },
        ],
      },
      {
        id: 3,
        data: [
          {
            title: "Webpage SYL 1.2",
            highlight: "Content update for 1.2",
          },
          {
            title: "Webpage SYL 2.0",
            subtitle: "Bolsa de Trabajo y Base de datos",
            highlight: "Usuarios y contreseña para cargar historial y CV para fines de reclutamiento avanzado (linkedin?"
          },
        ],
      },
      {
        id: 4,
        data: [
          {
            title: "Benchmarking",
            subtitle: "list of companies and competences",
          },
          {
            title: "Create Multichannel Stategy",
          },
          {
            title: "Growth hacking with META-Ads"
          },
          {
            title: "Growth hacking with SEO"
          },
          {
            title: "Final Presentation"
          }
        ],
      },
    ],
  },
];

export default content;