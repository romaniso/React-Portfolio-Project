import { v4 as uuidv4 } from "uuid";
import CatifyImg from "../images/projects/catify.png";
import RomanCodeImg from "../images/projects/roman's-code.png";
import IRIvideo from "../images/projects/iri-video.png";
// There will be img imports

const projects = [
  // I may add links to live address and github repos"
  {
    id: uuidv4(),
    name: "IRI Video ",
    des: "A webpage for a video maker which presents video projects using media galleries. It is developed using React, SASS constructed by using external library 'Styled Components'. For the media gallery I have used 'SwiperJS', for icons I have used 'React Icons Lib'.",
    img: IRIvideo,
    links: {
      live: "https://iri-video-roma.netlify.app/",
      gitHub: "https://github.com/romaniso/iri_production",
    },
  },
  {
    id: uuidv4(),
    name: "Kontakt E-Commerce ",
    des: 'Catify is a cat-lover app, which is based on a public API titled "The cat api", which allows a user to select a particular cat breed.',
    img: CatifyImg,
    links: {
      live: "https://catify-api.netlify.app/",
      gitHub: "https://github.com/romaniso/Catify/",
    },
  },
  {
    id: uuidv4(),
    name: "Roman's Code Portfolio ",
    des: "This is my React Portfolio which is based on React technology featuring a simple CSS and some other external libraries such as React Icons, React Router, Swiper, Uuidd",
    img: RomanCodeImg,
    links: {
      live: "https://codewithroman.netlify.app/",
      gitHub: "https://github.com/romaniso/React-Portfolio-Project",
    },
  },
];

export default projects;
