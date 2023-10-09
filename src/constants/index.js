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
  WordsMine,
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
    date: "September 2022 - September 2023",
    points: [
      "I have played central role in rapidly develop Goware core of product such as:",
      "+ Friend suggestion: utilize Ant Design, Scss to build app's frontend, integrate with provided RESTful API and manage data (Redux Thunk).",
      "+ User post: end-to-end implementation,  design (Figma) to develop (ReactJS).",
      "+ Live Learning: data visualization with Ant-Design-Charts component.",
      "+ Landing page: integrate with MOMO payment gateway, support animation, resposive design with NextJS.",
    ],
  },
  {
    title: "Teaching assistant",
    company_name: "Mindx technology school",
    icon: mindx,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Aug 2022",
    points: [
      "In this role, I taught high-school students:",
      "+ Introduction to Algorithm.",
      "+ Javascript, HTML, CSS, Game Maker, etc.",
      "The experience taught me to be patient, being an effective communicator and have an organized, proactive mindset.",
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
      "I thought it was impossible to make a website as beautiful as our product, but Nhat proved me wrong.",
    name: "Dinh Binh",
    designation: "Back End Dev",
    company: "Tadidi",
    image: "https://drive.google.com/uc?id=1UxpGwSWft6vWfCcanv0DYky8P_E3xLsU",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Nhat does.",
    name: "Ngan Nguyen",
    designation: "KOl",
    company: "Agency",
    image: "https://drive.google.com/uc?id=1-icYcjjnCRERYpHT8UD60Iz81_0_wUXF",
  },
  {
    testimonial:
      "After Nhat optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Uyen Huynh",
    designation: "Product Owner",
    company: "Amanotes",
    image: "https://drive.google.com/uc?id=1-D4nLWmxHzwvoW1ZHK9ijrfyfw5Kf4qY",
  },
];

const projects = [
  {
    name: "WordsMine web app",
    description: "Web app english that you can learn vocabulary",
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
      {
        name: "Redux",
        color: "orange-text-gradient",
      },
    ],
    image: WordsMine,
    source_code_link: "https://app.wordsmine.com/",
  },
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
        name: "sass",
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
        name: "sass",
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
