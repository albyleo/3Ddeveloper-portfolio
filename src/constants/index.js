import {
  MySQL,
  backend,
  blender,
  c,
  carrent,
  creator,
  egeria,
  fpga,
  git,
  java,
  javascript,
  mobile,
  nodejs,
  polimi,
  python,
  reactjs,
  santorini,
  tailwind,
  threejs,
  ue,
  unrealengine,
  web
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Data Analytics",
    icon: backend,
  },
  {
    title: "CGI & VFX",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name:"python",
    icon: python,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Unreal Engine",
    icon: ue,
  },
  {
    name: "Blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Egeria",
    icon: egeria,
    iconBg: "#FFFFFF",
    date: "Jan 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Egeria",
    icon: egeria,
    iconBg: "#FFFFFF",
    date: "Jan 2022 - Feb 2023",
    points: [
      "Use of Python with dataframe and series from Pandas.",
      "Quering Data with SQL to analyse and manipulate them .",
      "Use of Data visualization tool as PowerBI, translating database relation-entity model.",
    ],
  },
  {
    title: "Java developer",
    company_name: "Polytechnic of Milan",
    icon: polimi,
    iconBg: "#FFFFFF",
    date: "Jan 2021 - Jul 2021",
    points: [
      "Building a (MVC) Model View Control project, with multithreading on client server side for concurrent connections.",
      "Implementing effincient data structures to optimize time and memory consumption.",
      "Use of Javafx for the graphic interface.",
    ],
  },
  {
    title: "CGI Producer",
    icon: unrealengine,
    iconBg: "#000000",
    date: "Jan 2021 - Present",
    points: [
      "Blender for 3d modeling, motion tracking, vfx, post-processing .",
      "Unreal Engine fro hyper-realist scenario, rendering.",
      "Cascadeur for realistic animation, powered by AI.",
    ],
  },
];


const projects = [
  
  {
    name: "Santorini",
    description:
      "Developing a game in Java, with MVC structures, GUI, socket on client server side with multithreading.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "JavaFX",
        color: "pink-text-gradient",
      },
    ],
    image: santorini,
    source_code_link: "https://github.com/albyleo/SW-eng-Java-Project",
  },

  {
    name: "Car Rent",
    description:
      "Project of Algorithms and Data Structures, developed in C using toolsas valgring, callgring and perf to optimize time and memory consumption.",
    tags: [
      {
        name: "C",
        color: "pink-text-gradient",
      },
      ],
    image: carrent,
    source_code_link: "https://github.com/albyleo/Car-Rent--C",
  },

  {
    name: "Vhdl-FPGA Project",
    description:
    "Programmming a HW module fpga, using input signal with clock and reset and confronting the output from testbech.",
    tags: [
      {
        name: "VHDL",
        color: "blue-text-gradient",
      },
      
    ],
    image: fpga,
    source_code_link: "https://github.com/albyleo/VHDL-FPGA-Project",
  },
];

export { experiences, projects, services, technologies };

