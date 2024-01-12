import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import javascript from "../../../assets/javascript.png";
import react from "../../../assets/react.png";
import ts from "../../../assets/ts.svg";
import chakra from "../../../assets/chakra-ui.svg";
import shopify from "../../../assets/shopify.svg";
import sass from "../../../assets/sass.svg";
import mongo from "../../../assets/mongodb.svg";
import bootstrap from "../../../assets/bootstrap.svg";
import python from "../../../assets/python.svg";
import git from "../../../assets/git.png";
import github from "../../../assets/github.png";
import node from "../../../assets/node.png";
import nextjs from "../../../assets/nextjs.png";
import postgres from "../../../assets/postgres.png";
import redux from "../../../assets/redux.png";
import tailwind from "../../../assets/tailwind.png";
import { Link as ScrollLink } from "react-scroll";

const Techs = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-400",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 5,
      src: ts,
      title: "TypeScript",
      style: "shadow-cyan-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-cyan-700",
    },
    {
      id: 7,
      src: node,
      title: "Node JS",
      style: "shadow-lime-400",
    },
    {
      id: 8,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 9,
      src: git,
      title: "Git",
      style: "shadow-orange-600",
    },
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 11,
      src: postgres,
      title: "PostgreSQL",
      style: "shadow-blue-400",
    },
    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "shadow-violet-700",
    },
    {
      id: 13,
      src: shopify,
      title: "Shopify",
      style: "shadow-green-400",
    },
    {
      id: 14,
      src: python,
      title: "Python",
      style: "shadow-cyan-400",
    },
    {
      id: 15,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },
    {
      id: 16,
      src: chakra,
      title: "Chakra-UI",
      style: "shadow-teal-400",
    },
    {
      id: 17,
      src: sass,
      title: "Sass",
      style: "shadow-pink-400",
    },
    {
      id: 18,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-600",
    },
  ];

  return (
    <section
      name="Technologies"
      className="relative w-full md:h-screen h-unset mt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h2 className="text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl">
            Technologies
          </h2>
          <p className="py-6">
            These are the technologies I&apos;ve worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 text-center py-8 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img className="w-20 mx-auto py-2 md:py-4" src={src} alt="" />
              <p className="mt-4 md:mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <ScrollLink
        to="Certifications"
        smooth
        duration={500}
        className="absolute bottom--1 z-10 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default Techs;
