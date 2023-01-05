import { v4 as uuidv4 } from "uuid";
import CatifyImg from "../images/projects/catify.png";
import RomanCodeImg from "../images/projects/roman's-code.png";
import IRIvideoImg from "../images/projects/iri-video.jpg";
import ToggleImg from "../images/projects/toggle.png";
import FormImg from "../images/projects/payment-form.png";
// There will be img imports

const projects = [
  // I may add links to live address and github repos"
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
    name: "Catify App",
    des: 'Catify is a cat-lover app, which is based on a public API titled "The cat api", which allows a user to select a particular cat breed.',
    img: CatifyImg,
    links: {
      live: "https://catify-api.netlify.app/",
      gitHub: "https://github.com/romaniso/Catify/",
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
