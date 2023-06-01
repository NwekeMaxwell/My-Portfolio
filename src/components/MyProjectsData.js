import Portfolio from "../img/portfolio.png";
import Forkify from "../img/forkify.png";
import Bankist from "../img/bankist.png";
import ChefMax from "../img/chefMax.png";
import Church from "../img/church.png";
import Mapty from "../img/mapty.png";
import MaxArt from "../img/MaxArt.png";
import MiniBankist from "../img/miniBankist.png";
import PigGame from "../img/pigGame.png";
import Lendsqr from "../img/lendsqr.png";
import Kitty from "../img/Rolodex.png";
import GuessMyAge from "../img/guessmyage.png";
import Dashboard from "../img/React Dashboard.png";
import Colab from "../img/colab.png";
import Acad from "../img/AcademiaDashboard.png";
import Devxp from "../img/devxp.png";
//skill imports
import html from "../img/html logo.png";
import css from "../img/css logo.png";
import js from "../img/JavaScript-logo.png";
import ts from "../img/Typescript_logo.png";
import sass from "../img/sass logo.png";
import react from "../img/react logo.png";
import tailwind from "../img/tailwind.png";
import nextjs from "../img/nextJs.png";

//skilldata
export const SkillData = [
  {
    id: 1,
    title: "TypeScript",
    image: ts,
  },
  {
    id: 2,
    title: "JavaScript",
    image: js,
  },
  {
    id: 3,
    title: "NextJS",
    image: nextjs,
  },
  {
    id: 4,
    title: "REACT",
    image: react,
  },
  {
    id: 5,
    title: "SCSS",
    image: sass,
  },
  {
    id: 6,
    title: "TailWind",
    image: tailwind,
  },
  {
    id: 7,
    title: "CSS",
    image: css,
  },
  {
    id: 8,
    title: "HTML",
    image: html,
  },
];
//projects data
const MyProjectsData = [
  {
    id: 1,
    title: "Lendsqr",
    image: Lendsqr,
    link: "https://nweke-maxwell-lendsqr-fe-test.netlify.app",
    github: "https://github.com/NwekeMaxwell/lendsqr-fe-test",
    description:
      "A 4-page Admin Panel website accessing and showing over 500 user details from external Library / API.",
    stack: ["TypeScript", "React", "SCSS"],
    projectFocus: ["Typescript", "SCSS", "ReactJS"],
  },
  {
    id: 2,
    title: "Forkify",
    image: Forkify,
    link: "https://forkify2023.netlify.app",
    github: "https://github.com/NwekeMaxwell/Forkify-app",
    description:
      "A model food website where you search for recipes and get a list of different food, directions to cook, and ingredients to prepare it.",
    stack: ["JavaScript", "SCSS"],
    projectFocus: [
      "Asynchronous javaScript",
      "Promises",
      "Error Handling",
      "MVC Architecture",
      "Local Storage API",
      "Polyfilling",
      "Flowchart",
    ],
  },
  {
    id: 3,
    title: "DevXP",
    image: Devxp,
    link: "https://devxp-react-projects.vercel.app/",
    github:
      "https://github.com/NwekeMaxwell/devxp_react_projects/tree/main/ch5",
    description: "DevXP cohort5 project- Convert figma design to code",
    stack: ["TypeScript", "SCSS", "React"],
    projectFocus: [
      "Teamwork, Material UI, ChartJS, Styled Components, Responsiveness",
    ],
  },
  {
    id: 4,
    title: "Buy Dashboard",
    image: Dashboard,
    link: "https://adminpanel-max.netlify.app/",
    github: "https://github.com/NwekeMaxwell/Simple-Admin-Panel",
    description:
      "Simple model shopping admin dashboard with chart representation",
    stack: ["JavaScript", "React"],
    projectFocus: ["Charts, Admin Panel UI"],
  },
  {
    id: 5,
    title: "Colab",
    image: Colab,
    link: "https://colab-nwekemaxwell.netlify.app/",
    github: "https://github.com/NwekeMaxwell/Co.lab-Portfolio-Assessment",
    description:
      "My Colab portfolio featuring 3 pages website with my briefing, few projects and a consumed API data",
    stack: ["JavaScript", "React"],
    projectFocus: ["API handling, Responsiveness"],
  },
  {
    id: 6,
    title: "Portfolio",
    image: Portfolio,
    link: "#",
    github: "https://github.com/NwekeMaxwell/My-Portfolio",
    description: "My Portfolio Website :) You are currently viewing 🤗",
    stack: ["React", "JavaScript"],
    projectFocus: ["Hooks", "Framer Motion", "Email JS"],
  },
  {
    id: 7,
    title: "Academia Dashboard",
    image: Acad,
    link: "https://academia-dashboard.vercel.app/",
    github: "https://github.com/NwekeMaxwell/Academia-Dashboard",
    description:
      "A simple 3 pages academic dashboard built with NextJS and TailwindCSS, effected simple search functionality",
    stack: ["NextJS", "Tailwind", "React"],
    projectFocus: ["NextJS, TailwindCSS, Responsiveness"],
  },
  {
    id: 8,
    title: "PIG GAME",
    image: PigGame,
    link: "https://piggame100.netlify.app",
    github: "https://github.com/NwekeMaxwell/PIG-GAME-",
    description:
      "A custom model pig Game for fun. First player to earn $100 wins",
    stack: ["JavaScript"],
    projectFocus: ["DOM Manipulation"],
  },
  {
    id: 9,
    title: "Bankist App",
    image: Bankist,
    link: "https://bankist2022.netlify.app",
    github: "https://github.com/NwekeMaxwell/Bankist",
    description: "A model bank advert webpage",
    stack: ["JavaScript"],
    projectFocus: [
      "Lazy Image loading",
      "website consolidation",
      "Slider",
      "Smooth scroll",
      "Tabbed grouping",
    ],
  },
  {
    id: 10,
    title: "Mini-Bankist App",
    image: MiniBankist,
    link: "https://mini-bankist2022.netlify.app",
    github: "https://github.com/NwekeMaxwell/mini-bankist",
    description:
      "A model user bank transaction webpage where you login and get loan, receive or send money to another registered user",
    stack: ["JavaScript"],
    projectFocus: [
      "Internationalization of dates and numbers",
      "FlowChart",
      "Live Dates and Timers",
    ],
  },
  {
    id: 11,
    title: "Mapty",
    image: Mapty,
    link: "https://mapty2022.netlify.app",
    github: "https://github.com/NwekeMaxwell/Map-ty",
    description:
      "A workout webpage where user accesses his location in real time and records his workout sessions",
    stack: ["JavaScript"],
    projectFocus: [
      "Geolocation API",
      "Local Storage API",
      "Object Oriented Programming(OOP)",
      "ES6 Classes",
      "External Libraries",
    ],
  },
  {
    id: 12,
    title: "MaxArt",
    image: MaxArt,
    link: "https://maxart.netlify.app",
    github: "https://github.com/NwekeMaxwell/My-Art-Website",
    description: "A model art exhibition website for artists",
    stack: ["HTML/CSS", "SCSS"],
    projectFocus: ["SCSS", "CSS GRID", "Responsive WebPage"],
  },
  {
    id: 13,
    title: "Chef Max",
    image: ChefMax,
    link: "https://chefmax.netlify.app",
    github: "https://github.com/NwekeMaxwell/ChefMax-Website",
    description: "A model restaurant webpage for advert and sales",
    stack: ["HTML/CSS", "SCSS"],
    projectFocus: ["FlexBox", "SCSS", "Responsive WebPage"],
  },
  {
    id: 14,
    title: "Church App",
    image: Church,
    link: "https://heavenschurch.netlify.app",
    github: "https://github.com/NwekeMaxwell/Heaven-Church-Website",
    description:
      "A model church website which offers users opportunity to request for prayers and book for prayer sections",
    stack: ["HTML/CSS", "SCSS"],
    projectFocus: ["CSS Animations", "Responsive Web Page"],
  },
  {
    id: 15,
    title: "Kitty Rolodex",
    image: Kitty,
    link: "https://kittyrolodex.netlify.app",
    github: "https://github.com/NwekeMaxwell/React-KittyRolodex",
    description: "A simple landing page with search functionality",
    stack: ["React", "JavaScript"],
    projectFocus: [
      "Unidirectional data flow",
      "Search functionality",
      "APIs",
      "Virtual DOM",
    ],
  },
  {
    id: 16,
    title: "Guess My Age",
    image: GuessMyAge,
    link: "https://guessmyage2022.netlify.app",
    github: "https://github.com/NwekeMaxwell/My-JS-Game-GuessMyAge",
    description: "A fun guessing game for leisures",
    stack: ["JavaScript"],
    projectFocus: ["DOM Manipulation"],
  },
];

export default MyProjectsData;
