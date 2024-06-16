import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import { FaArrowUpLong, FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl font-bold"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center">
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <div className="hover:text-neutral-400">
            <a href="https://github.com/nxtesh" target="_blank">
              <FaGithub />
            </a>
          </div>
          <div className="hover:text-neutral-400 ">
            <a
              href="https://www.linkedin.com/in/nitesh-ramharsh-yadav/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="hover:text-neutral-400">
            <a href="https://x.com/nitesh2003y" target="_blank">
              <FaSquareXTwitter />
            </a>
          </div>
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nitesh2003y@gmail.com&su=&body="
            target="_blank"
            className="border-b hover:bg-neutral-800 hover:text-white   "
          >
            nitesh2003y@gmail.com
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
