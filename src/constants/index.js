import lws from "../assets/lws.png";
import netflix from "../assets/netflix.png";
import gofundme from "../assets/gofundme.png";
import sidcup from "../assets/sidcup.png";
import weather from "../assets/weather.png";
import portfolio from "../assets/portfolio.png";

export const HERO_CONTENT = `Hi :) I am a passionate Web developer with hands-on experience on editing as well. I love making web applications. I enjoy exploring new technologies, and contributing to open-source projects. `;

export const ABOUT_TEXT = `I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges.`;

export const PROJECTS = [
  {
    title: "Learn With Sensei",
    image: lws,
    description:
      "A comprehensive online platform offering engaging courses and resources for seamless self-paced learning.",
    link: ["https://github.com/nxtesh/lws-master"],
  },
  {
    title: "GoFundMe Clone",
    image: gofundme,
    description: "Crowdfunding Platform Clone.",
    link: ["https://github.com/nxtesh/gofundme_c"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    link: ["#"],
  },
  {
    title: "SidcupFamilyGolf Clone",
    image: sidcup,
    description: "A clone of SidcupFamilyGolf User Interface.",
    link: ["https://github.com/nxtesh/SIDCUPGOLFCLUB"],
  },
  {
    title: "Netflix Clone",
    image: netflix,
    description: "A clone of Netflix User Interface.",
    link: ["https://github.com/nxtesh/Netflix_ui"],
  },
  {
    title: "Weather Application",
    image: weather,
    description:
      "A real-time weather application providing accurate and localized forecasts.",
    link: ["https://github.com/nxtesh/weather"],
  },
];
