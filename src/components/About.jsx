import React from "react";
import aboutImg from "../assets/aboutimg.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="mt-4 border-[1px] border-[#282828] p-5 rounded-[30px] ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -70 }}
        transition={{ duration: 1}}
        className="my-10 text-center text-4xl font-extrabold"
      >
        ABOUT ME
      </motion.h1>
      <div className=" flex flex-wrap ">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center "
          >
            <img src={aboutImg} alt="about" className="w-[160px] h-[150px]" />
          </motion.div>
        </div>
        <div className=" w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className=" font-normal  my-9 max-w-xl py-6"
            >
              {" "}
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
