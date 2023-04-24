import { v4 as uuidv4 } from "uuid";
//import CatifyImg from "../images/projects/catify.png";
import RomanCodeImg from "../images/projects/roman's-code.png";
import IRIvideoImg from "../images/projects/iri-video.jpg";
import ToggleImg from "../images/projects/toggle.png";
import FormImg from "../images/projects/payment-form.png";
import HangmanImg from "../images/projects/hangman-thumbnail.jpg";
import MinesweeperImg from "../images/projects/minesweeper-thumbnail.jpg";
import HtmlEmailTemplateImg from "../images/projects/html-email-template.jpg";
import SugarMadamImg from "../images/projects/sugar-madam.jpg";
// There will be img imports

const projects = [
  // I may add links to live address and github repos"
  {
    id: uuidv4(),
    name: "Sugar Madam - waxing studio",
    des: "A webpage for a beaty salon which presents its services and works using carousel media gallery. It is developed using plain HTML, CSS and vanilla JS. The main goal was to create a simple landing page which is highly optimized in website loading speed. For onscroll animation I have used GSAP library.",
    img: SugarMadamImg,
    links: {
      live: "https://www.sugar-madam.pl/",
      gitHub: "https://github.com/romaniso/sugar-madam",
    },
  },
  {
    id: uuidv4(),
    name: "IRI Video",
    des: "A webpage for a video maker which presents video projects using media galleries. It is developed using React, SASS constructed by using external library 'Styled Components'. For the media gallery I have used 'SwiperJS', for icons I have used 'React Icons Lib'.",
    img: IRIvideoImg,
    links: {
      live: "https://iri-zinchenko.com/",
      gitHub: "https://github.com/romaniso/iri_production",
    },
  },
  {
    id: uuidv4(),
    name: "Minesweeper",
    des: 'It is my version of a well-known game "Minesweeper" which comes from early 2000s. It is based on object oriented programming, a plain css and ES6 with JS Classes, Modules, arrow functions, etc.',
    img: MinesweeperImg,
    links: {
      live: "https://minesweeper-by-roman.netlify.app/",
      gitHub: "https://github.com/romaniso/minesweeper",
    },
  },
  {
    id: uuidv4(),
    name: "Hangman web-game",
    des: "It is a simple web game built according to object-oriented programming. It features ES6 Classes, Modules and a plain CSS .",
    img: HangmanImg,
    links: {
      live: "https://hangman-webgame.netlify.app/",
      gitHub: "https://github.com/romaniso/hangman-game",
    },
  },
  {
    id: uuidv4(),
    name: "HTML Email Template",
    des: "An email html template built for various mailers such as Google mail, Outlook, Yahoo, etc. Resposive in different devices and featured in dark and light modes. Images are hosted online via https://imgbb.com/",
    img: HtmlEmailTemplateImg,
    links: {
      live: "https://html-email-template-iri.netlify.app/",
      gitHub: "https://github.com/romaniso/html-email-template",
    },
  },
  {
    id: uuidv4(),
    name: "Roman's Code Portfolio",
    des: "This is my React Portfolio which is based on React technology featuring a simple CSS and some other external libraries such as React Icons, React Router, Swiper, Uuidd",
    img: RomanCodeImg,
    links: {
      live: "https://romanscode.com/",
      gitHub: "https://github.com/romaniso/React-Portfolio-Project",
    },
  },
  {
    id: uuidv4(),
    name: "Dark and light theme toggle",
    des: "This toggle is created by using React Hooks createContext and useContext as well as customed styles. I've used createContext and useContext in order to omit potential props drilling between a banch of React components in my projects.",
    img: ToggleImg,
    links: {
      live: "https://toggle-dark-light.netlify.app/",
      gitHub: "https://github.com/romaniso/Light-and-dark-theme-Toggle",
    },
  },
  {
    id: uuidv4(),
    name: "Credit-Card-Payment-Form",
    des: "It is a simple form devoted to card payments with a straightforward CSS styles and easy logics based on JavaScript. I've used a bunch of add event listeners and a little validation. You can check it out online.",
    img: FormImg,
    links: {
      live: "https://funny-credit-card-payment-form.netlify.app/",
      gitHub: "https://github.com/romaniso/Credit-Card-Payment-Form.git",
    },
  },
];

export default projects;
