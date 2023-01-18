import HTMLbyMosh from "./certificates/the-ultimate-html-course-psd-to-html.pdf";
import JsPart1byMosh from "./certificates/certificate-of-completion-for-javascript-basics.pdf";
import JsPart2byMosh from "./certificates/certificate-of-completion-for-object-oriented-programming-in-javascript.pdf";
import JsSamuraj from "./certificates/UC-1f9b59f0-2759-4f86-9baa-c0e7ec82f161.pdf";

const items = {
  courses: [
    {
      title: "The Ultimate HTML5 & CSS3 Series by Code with Mosh",
      download: HTMLbyMosh,
    },
    {
      title:
        "The Ultimate JavaScript Mastery Series - Part 1 by Code with Mosh",
      download: JsPart1byMosh,
    },
    {
      title:
        "The Ultimate JavaScript Mastery Series - Part 2 by Code with Mosh",
      download: JsPart2byMosh,
    },
    {
      title: "Mastering React by Code with Mosht",
      download: JsSamuraj,
    },
    {
      title: "The Ultimate Git Course by Code with Mosh",
      download: JsSamuraj,
    },
    {
      title: "Programowanie w JavaScript by Samuraj Programowania",
      download: JsSamuraj,
    },
    {
      title: "React od Podstaw by Samuraj Programowania",
      download: JsSamuraj,
    },
    {
      title:
        "Programowanie obiektowe w JavaScript - opanuj tworząc gry! by Samuraj Programowania",
      download: JsSamuraj,
    },
    {
      title:
        "Zaawansowane projekty w CSS i JavaScript by Samuraj Programowania",
      download: JsSamuraj,
    },
    {
      title: "Wprowadzenie do Git i GitHub by Samuraj Programowania",
      download: JsSamuraj,
    },
  ],
  frontEnd: [
    { title: "HTML/PUG", stars: 5 },
    { title: "CSS", stars: 5 },
    { title: "JavaScript", stars: 3 },
    { title: "React", stars: 3 },
    { title: "Git", stars: 3 },
    { title: "SASS", stars: 4 },
    { title: "Bootstrap", stars: 3 },
    { title: "Webpack", stars: 2 },
  ],
  uiUx: [
    { title: "Figma", stars: 2 },
    { title: "PhotoShop", stars: 2 },
  ],

  highSchool: [
    {
      title:
        "Maria Curie-Sklodowska University in Lublin, English Philology, BA",
    },
    {
      title: "Catholic University in Lublin, English Philology, MA",
    },
  ],
  experience: [
    {
      when: "2021 - by now",
      title: "Freelance Front End Developer",
    },
    {
      title: "Junior Front End Developer",
      organization: "IPG Health Spark Warsaw",
      when: "2022 - by now",
    },
  ],
};

export default items;
