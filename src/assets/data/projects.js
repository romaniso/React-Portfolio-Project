import { v4 as uuidv4 } from "uuid";
import KontaktImg from "../images/projects/kontakt.png";
import FitnessImg from "../images/projects/fitness.png";
import RomanCodeImg from "../images/projects/roman's-code.png";
// There will be img imports

const projects = [
  // I may add links to live address and github repos"
  {
    id: uuidv4(),
    name: "Kontakt E-Commerce ",
    des: "A web store which offers diverse range of products from fishing rods to electricity equipment. It is developed using JavaScript, CSS 3, HTML 5 for front end, and FireBase and Amazon AWS for back end",
    img: KontaktImg,
  },
  {
    id: uuidv4(),
    name: "Fitness Webpage ",
    des: "A web store which offers diverse range of products from fishing rods to electricity equipment. It is developed using JavaScript, CSS 3, HTML 5 for front end, and FireBase and Amazon AWS for back end",
    img: FitnessImg,
  },
  {
    id: uuidv4(),
    name: "Roman's Code Portfolio ",
    des: "This is my React Portfolio which is based on React technology featuring a simple CSS and some other external libraries such as React Icons, React Router, Swiper, Uuidd",
    img: RomanCodeImg,
    link: "https://codewithroman.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Kontakt E-Commerce ",
    des: "A web store which offers diverse range of products from fishing rods to electricity equipment. It is developed using JavaScript, CSS 3, HTML 5 for front end, and FireBase and Amazon AWS for back end",
    img: KontaktImg,
  },
  {
    id: uuidv4(),
    name: "Roman's Code Portfolio ",
    des: "This is my React Portfolio which is based on React technology featuring a simple CSS and some other external libraries such as React Icons, React Router, Swiper, Uuidd",
    img: RomanCodeImg,
  },
  {
    id: uuidv4(),
    name: "Kontakt E-Commerce ",
    des: "A web store which offers diverse range of products from fishing rods to electricity equipment. It is developed using JavaScript, CSS 3, HTML 5 for front end, and FireBase and Amazon AWS for back end",
    img: KontaktImg,
  },
];

export default projects;
