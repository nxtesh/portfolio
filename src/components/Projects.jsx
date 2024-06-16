import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className="border-[1px] border-[#282828] rounded-[30px] p-5 mt-4 pb-4 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1}}
        className="my-20 text-center font-extrabold text-4xl"
      >
        PROJECTS
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center  p-4 ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 "
            >
              <img

                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="rounded-lg mt-3"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 "
            >
              <div className="flex items-center gap-[10px]">
                <h6 className="mb-2 font-extrabold text-[18px] mt-2 text-lg tracking-wider  ">
                  {project.title}
                </h6>
              </div>

              <p className="mb-4 font-[14px] text-[#A2A2A2]">
                {project.description}
              </p>
              <a
                target="_blank"
                href={project.link}
                className="flex gap-2 items-center text-[#A2A2A2] "
              ><FaGithub />github/{project.title}
              </a>
              {/* {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className=" mr-2 bg-neutral-900 rounded px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))} */}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
