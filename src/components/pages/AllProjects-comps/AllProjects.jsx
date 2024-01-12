import { Link } from "react-router-dom";

import dropoutdevs from "/images/projectsImages/dropoutdevs.png";
import seraab from "/images/projectsImages/seraabvalley.png";
import books from "/images/projectsImages/bookshop.png";
import ensueno from "/images/projectsImages/ensueno.png";
import HFS from "/images/projectsImages/HFS.png";
import imagesearch from "/images/projectsImages/imagesearch.png";
import kiadah from "/images/projectsImages/kiadah.png";
import rent from "/images/projectsImages/rent.png";
import shuttle from "/images/projectsImages/shuttlelane.png";
import travelbasic from "/images/projectsImages/travelbasic.png";
import traveller from "/images/projectsImages/traveller.png";
import recipies from "/images/projectsImages/recipies.png";

const AllProjects = () => {
  const projects = [
    {
      id: 1,
      src: dropoutdevs,
      demo: "https://dropoutdevs.in/",
      code: "https://github.com/iqbalwalii/dropoutdevs",
    },
    {
      id: 2,
      src: seraab,
      code: "https://github.com/iqbalwalii/seraabvalley",
    },
    {
      id: 3,
      src: shuttle,
      demo: "https://shuttlelane.com/",
      code: "https://github.com/iqbalwalii/shuttlelane",
    },
    {
      id: 4,
      src: ensueno,
      demo: "https://kashmirensueno.com/",
      code: "https://github.com/iqbalwalii/kashmirtreks",
    },
    {
      id: 5,
      src: books,
      demo: "https://klusterbookstore.netlify.app",
      code: "https://github.com/iqbalwalii/bookstore",
    },
    {
      id: 6,
      src: recipies,
      code: "https://github.com/iqbalwalii/recipies",
    },
    {
      id: 7,
      src: HFS,
      code: "https://github.com/iqbalwalii/HFS",
    },
    {
      id: 8,
      src: kiadah,
      demo: "https://play.google.com/store/apps/details?id=com.kiadah.kiadahpatient",
      code: "https://github.com/iqbalwalii/kashmirCure",
    },
    {
      id: 9,
      src: imagesearch,
      demo: "https://imagesearch.vercel.app/",
      code: "https://github.com/iqbalwalii/tenimages",
    },
    {
      id: 10,
      src: rent,
      demo: "https://pokedex-bydt.netlify.app/",
      code: "https://github.com/iqbalwalii/rent_a_movie",
    },
    {
      id: 11,
      src: traveller,
      code: "https://github.com/iqbalwalii/traveller",
    },
    {
      id: 12,
      src: travelbasic,
      demo: "https://travelbasic.netlify.app",
      code: "https://github.com/iqbalwalii/travel_basic",
    },
  ];

  const handleClickDemo = (demoUrl) => {
    const newWindow = window.open(demoUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  const handleClickCode = (codeUrl) => {
    const newWindow = window.open(codeUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  return (
    <section
      name="Projects"
      className="relative w-full text-white md:min-h-screen mt-24 mb-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl">
            Projects
          </h2>
          <p className="py-6">Check out my best web applications here.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(({ id, src, demo, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto"
            >
              <img
                loading="lazy"
                src={src}
                alt="project card"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleClickDemo(demo)}
                  className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleClickCode(code)}
                  className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          to="https://github.com/iqbalwalii"
          className="text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300"
        >
          <span className=""></span>
          View More Projects
        </Link>
      </div>
      <div className="flex justify-center">
        <Link
          to="/"
          className="text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300"
        >
          <span className="">
            <i className="bx bx-home-heart mr-2"></i>
          </span>
          Go back
        </Link>
      </div>
    </section>
  );
};

export default AllProjects;
