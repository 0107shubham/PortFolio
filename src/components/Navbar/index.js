import { Link } from "react-scroll";

import resume_final from "../../Asset/resume_final.pdf";

import "./index.css";

const Navbar = () => {
  return (
    <div className=" flex justify-between  p-5 fixed top-0 left-0 right-0 z-50 h-24 bg-purple-500">
      <div>
        <h1 className="text-white font-bold text-2xl">Shubham Tyagi</h1>
      </div>
      <ul className="flex justify-between">
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-white hover:text-black font-semibold text-xl p-4"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-white hover:text-black font-semibold   text-xl p-4"
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="qualification"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-white hover:text-black font-semibold   text-xl p-4"
          >
            Education & Experience
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-white hover:text-black font-semibold   text-xl p-4"
          >
            Projects
          </Link>
        </li>
        <li>
          <a
            className="text-white hover:text-black font-semibold   text-xl"
            href={resume_final}
            download="shubham-Resume"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
