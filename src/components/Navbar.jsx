import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <motion.nav
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
      className="border-[1px] border-[#282828] rounded-[1000px] bg-[#252525] mb-20 mt-5 flex items-center justify-between backdrop-filter backdrop-blur-lg "
    >
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="w-20 h-20 mb-1" />
      </div>

      <div>
        <Link
          to="about"
          smooth={true}
          duration={1000}
          className="hover:text-neutral-400 cursor-pointer sm:ring-emerald-50 hidden lg:block"
        >
          About
        </Link>
      </div>
      <div>
        <Link
          to="technologies"
          smooth={true}
          duration={1100}
          className="hover:text-neutral-400 cursor-pointer sm:ring-emerald-50 hidden lg:block"
        >
          Technologies
        </Link>
      </div>
      <div>
        <Link
          to="projects"
          smooth={true}
          duration={1200}
          className="hover:text-neutral-400 cursor-pointer sm:ring-emerald-50 hidden lg:block"
        >
          Projects
        </Link>
      </div>

      <div>
        <Link
          to="contact"
          smooth={true}
          duration={1500}
          className="hover:text-neutral-400 cursor-pointer sm:ring-emerald-50 hidden lg:block"
        >
          Contact
        </Link>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <div className="hover:text-neutral-400">
          <a href="https://github.com/nxtesh" target="_blank">
            <FaGithub />
          </a>
        </div>
        {/* <div className="hover:text-neutral-400">
          <FaInstagram />
        </div> */}
        <div className="hover:text-neutral-400">
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
    </motion.nav>
  );
};

export default Navbar;
