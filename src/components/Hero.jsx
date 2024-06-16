import React from "react";
import { HERO_CONTENT } from "../constants";
// import profilePic from "../assets/imoji.png";
import edit from "../assets/heroedit.mp4";
import { RandomReveal } from "react-random-reveal";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const colors = ["#636793", "#FF5757" ,];

const Hero = () => {
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      style={{ backgroundColor: color }}
      className="border-[1px]  border-[#282828] rounded-[30px] p-5 border-b pb-4 lg:mb-35  "
    >
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="pl-5 flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-4xl font-extrabold lg:mt-14 lg:text-6xl"
            >
              <RandomReveal
                isPlaying={true}
                duration={0.7}
                revealDuration={15}
                revealEasing="linear"
                characters="Nitesh Yadav"
              />
              <span className="text-6xl font-bold  animate-pulse">{"."}</span>
            </motion.h1>
            <span className="bg-gradient-to-r text-white bg-clip-text text-4xl tracking-tight text-transparent ">
              <Typewriter
                options={{
                  strings: ["< web developer />", "< video editor />"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-normal"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className=" w-full lg:w-1/2 lg:p-8 ">
          <div className="flex justify-center  ">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="border-[1px] border-[#181818] rounded-[10px] mt-6 lg:ml-8 p-3 "
            >
              <video
                src={edit}
                loop
                controls
                className="rounded-[10px] "
              ></video>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
