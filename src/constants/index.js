//change data form this file
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  WM,
  mindx,
  dmx,
  Movie,
  Tictactoe,
  Wiki,
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
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fron-End Developer",
    icon: web,
  },
  {
    title: "Teaching assistant",
    icon: mobile,
  },
  {
    title: "Testing Manual",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Front end Developer",
    company_name: "GoWare JSC",
    icon: WM,
    iconBg: "#383E56",
    date: "September 2022 - august 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participate in the development of the company's personal project WordsMine",
    ],
  },
  {
    title: "Teaching assistant",
    company_name: "Mindx technology school",
    icon: mindx,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - April 2022",
    points: [
      "Carrying out the work of teaching classes at the request of students.",
      "Make lesson plans for students and check assignments.",
      "Applying soft skills to the teaching process.",
      "Ability to think and handle situations in teaching.",
    ],
  },
  {
    title: "Testing Manual",
    company_name: "Goware jsc",
    icon: WM,
    iconBg: "#383E56",
    date: "September 2022 - august 2023",
    points: [
      "Participate in product development with the company's programming team.",
      "Test execution, error analysis, error logging and test results report.",
      "Establish procedures to check product quality, find and annotate defects in software.",
    ],
  },
  {
    title: "Content Creator",
    company_name: "Green machine (Dien May Xanh)",
    icon: dmx,
    iconBg: "#E6DEDD",
    date: "July 2019 - august 2019",
    points: [
      "Create articles for products with provided images.",
      "Ideas for articles about promotions when buying products from the store.",
      "Actively censor newly created content to ensure coherence and attraction.",
      "Collaborate with managers to create quality content when introducing products.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "React Wiki",
    description: "Web that you can search every thing like wikipedia",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "useHook",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Wiki,
    source_code_link: "https://github.com/nhat31032k/React-wiki",
  },
  {
    name: "React tic tac toe",
    description: "Web game that you can play with your friend on mobile or web",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "useHook",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Tictactoe,
    source_code_link: "https://github.com/nhat31032k/React-TicTacToe",
  },
  {
    name: "React movie",
    description: "A web app that you can watch any kind of film in there.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "useHook",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: Movie,
    source_code_link: "https://github.com/SunNguyen3103/react-simple-movie",
  },
];

export { services, technologies, experiences, testimonials, projects };
