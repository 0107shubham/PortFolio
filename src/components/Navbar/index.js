import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

import final_resume_latest from "../../Asset/final_resume_latest.pdf";
import { BsLinkedin, BsGithub, BsFillTelephoneFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import "./index.css";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Effect to handle scrolling behavior
  useEffect(() => {
    if (isDrawerOpen) {
      // Prevent scrolling when drawer is open
      document.body.style.overflow = "hidden";
    } else {
      // Allow scrolling when drawer is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset body overflow style
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDrawerOpen]);

  return (
    <div className="w-full">
      {/*****************************************  mobile ***************************/}
      <div className="w-full  flex items-center  h-[6vw] bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300  min-h-[60px]">
        <button
          className="text-white text-[16px] w-full flex justify-between px-[2vw]   font-medium rounded-lg text-sm  py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
        >
          <p className="text-[20px]"> Shubham Tyagi </p>{" "}
          <GiHamburgerMenu onClick={toggleDrawer} className="text-[20px]" />
        </button>{" "}
      </div>{" "}
      <div
        className={`fixed top-0 left-0   w-[80%] max-w-[310px]  bg-white z-40 h-screen p-4 overflow-y-auto transition-transform transform  dark:bg-gray-800 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        tabIndex="-1"
      >
        <h1
          id="drawer-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <p className="text-gray-900 font-bold text-[18px]"> Shubham Tyagi </p>{" "}
        </h1>{" "}
        <button
          type="button"
          onClick={toggleDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>{" "}
        </button>{" "}
        <ul
          onClick={toggleDrawer}
          className="flex flex-col  h-[80%] gap-5 bg-purple-500"
        >
          <li>
            <Link
              onClick={toggleDrawer}
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-white hover:text-black font-semibold text-xl p-4"
            >
              Home{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link
              onClick={toggleDrawer}
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-white hover:text-black font-semibold text-xl p-4 my-[100px]"
            >
              Skills{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link
              onClick={toggleDrawer}
              activeClass="active"
              to="qualification"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-white hover:text-black font-semibold text-xl p-4"
            >
              Education & Experience{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link
              onClick={toggleDrawer}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-white hover:text-black font-semibold text-xl p-4"
            >
              Projects{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <a
              onClick={toggleDrawer}
              className="text-white hover:text-black font-semibold  p-4 text-xl"
              href={final_resume_latest}
              download="shubham-Resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume{" "}
            </a>{" "}
          </li>{" "}
          <div className="flex flex-row justify-center space-x-4 ">
            <div>
              <a
                href="https://www.linkedin.com/in/shubhamm-tyagi/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-white text-[40px] is-medium icon-color ">
                  <BsLinkedin />
                </span>{" "}
              </a>{" "}
            </div>{" "}
            <div>
              <a
                href="https://github.com/0107shubham"
                rel="noreferrer"
                target="_blank"
              >
                <span className="text-white text-[40px] is-medium icon-color">
                  <BsGithub />
                </span>{" "}
              </a>{" "}
            </div>{" "}
            <div>
              <a href="tel:+91-91313-54232">
                <span className="text-white text-[40px] ">
                  <BsFillTelephoneFill />
                </span>{" "}
              </a>{" "}
            </div>{" "}
            <div>
              <a href="mailto:shubhamtyagi.lncte@gmail.com">
                <span className="text-white text-[40px] is-medium icon-color">
                  <AiOutlineMail />
                </span>{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </ul>{" "}
      </div>
      {/* ********************************   desktop     ********************/}
      <div className="hidden lg:flex justify-between p-5 fixed top-0 left-0 right-0 z-50 h-24 bg-purple-500">
        <div>
          <h1 className="text-white font-bold text-2xl"> Shubham Tyagi </h1>{" "}
        </div>{" "}
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
              Home{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-white hover:text-black font-semibold text-xl p-4"
            >
              Skills{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link
              activeClass="active"
              to="qualification"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-white hover:text-black font-semibold text-xl p-4"
            >
              Education & Experience{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-white hover:text-black font-semibold text-xl p-4"
            >
              Projects{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <a
              className="text-white hover:text-black font-semibold text-xl"
              href={final_resume_latest}
              download="shubham-Resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume{" "}
            </a>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default Navbar;

// import { Link } from "react-scroll";
// import React, { useState } from "react";

// import resume_final from "../../Asset/resume_final.pdf";

// import "./index.css";

// const Navbar = () => {
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//     const toggleDrawer = () => {
//         setIsDrawerOpen(!isDrawerOpen);
//     };
//     return ( <
//         div className = "w-full" >
//         <
//         div > { /* Button to show drawer */ } <
//         div className = "text-center" >
//         <
//         button className = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//         type = "button"
//         onClick = { toggleDrawer } >
//         Show drawer <
//         /button> <
//         /div>

//         { /* Drawer component */ } <
//         div className = { `fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform transform bg-white w-80 dark:bg-gray-800 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}` }
//         tabIndex = "-1"
//         aria - labelledby = "drawer-label" >
//         <
//         h5 id = "drawer-label"
//         className = "inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400" >
//         <
//         svg className = "w-4 h-4 me-2.5"
//         aria - hidden = "true"
//         xmlns = "http://www.w3.org/2000/svg"
//         fill = "currentColor"
//         viewBox = "0 0 20 20" >
//         <
//         path d = "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" / >
//         <
//         /svg>
//         Info <
//         /h5> <
//         button type = "button"
//         onClick = { toggleDrawer }
//         aria - controls = "drawer-example"
//         className = "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
//         <
//         svg className = "w-3 h-3"
//         aria - hidden = "true"
//         xmlns = "http://www.w3.org/2000/svg"
//         fill = "none"
//         viewBox = "0 0 14 14" >
//         <
//         path stroke = "currentColor"
//         strokeLinecap = "round"
//         strokeLinejoin = "round"
//         strokeWidth = "2"
//         d = "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" /
//         >
//         <
//         /svg> <
//         span className = "sr-only" > Close menu < /span> <
//         /button> <
//         p className = "mb-6 text-sm text-gray-500 dark:text-gray-400" >
//         Supercharge your hiring by taking advantage of our { ' ' } <
//         a href = "#"
//         className = "text-blue-600 underline dark:text-blue-500 hover:no-underline" >
//         limited - time sale <
//         /a>{' '}
//         for Flowbite Docs + Job Board.Unlimited access to over 190 K top - ranked candidates and the #1 design job board.

//         </p>

//         <div className= "grid grid-cols-2 gap-4" >
//         <
//         a href = "#"
//         className = "px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" >
//         Learn more <
//         /a> <
//         a href = "#"
//         className = "inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >
//         Get access { ' ' } <
//         svg className = "rtl:rotate-180 w-3.5 h-3.5 ms-2"
//         aria - hidden = "true"
//         xmlns = "http://www.w3.org/2000/svg"
//         fill = "none"
//         viewBox = "0 0 14 10" >
//         <
//         path stroke = "currentColor"
//         strokeLinecap = "round"
//         strokeLinejoin = "round"
//         strokeWidth = "2"
//         d = "M1 5h12m0 0L9 1m4 4L9 9" /
//         >
//         <
//         /svg> <
//         /a> <
//         /div> <
//         /div> <
//         /div> { " " } <
//         div className = " flex justify-between  p-5 fixed top-0 left-0 right-0 z-50 h-24 bg-purple-500" >
//         <
//         div >
//         <
//         h1 className = "text-white font-bold text-2xl" > Shubham Tyagi < /h1>{" "} <
//         /div>{" "} <
//         ul className = "flex justify-between" >
//         <
//         li >
//         <
//         Link activeClass = "active"
//         to = "home"
//         spy = { true }
//         smooth = { true }
//         offset = { 50 }
//         duration = { 500 }
//         className = "text-white hover:text-black font-semibold text-xl p-4" >
//         Home { " " } <
//         /Link>{" "} <
//         /li>{" "} <
//         li >
//         <
//         Link activeClass = "active"
//         to = "skills"
//         spy = { true }
//         smooth = { true }
//         offset = { 50 }
//         duration = { 500 }
//         className = "text-white hover:text-black font-semibold   text-xl p-4" >
//         Skills { " " } <
//         /Link>{" "} <
//         /li>{" "} <
//         li >
//         <
//         Link activeClass = "active"
//         to = "qualification"
//         spy = { true }
//         smooth = { true }
//         offset = { 50 }
//         duration = { 500 }
//         className = "text-white hover:text-black font-semibold   text-xl p-4" >
//         Education & Experience { " " } <
//         /Link>{" "} <
//         /li>{" "} <
//         li >
//         <
//         Link activeClass = "active"
//         to = "projects"
//         spy = { true }
//         smooth = { true }
//         offset = { 50 }
//         duration = { 500 }
//         className = "text-white hover:text-black font-semibold   text-xl p-4" >
//         Projects { " " } <
//         /Link>{" "} <
//         /li>{" "} <
//         li >
//         <
//         a className = "text-white hover:text-black font-semibold   text-xl"
//         href = { resume_final }
//         download = "shubham-Resume"
//         target = "_blank"
//         rel = "noreferrer" >
//         Resume { " " } <
//         /a>{" "} <
//         /li>{" "} <
//         /ul>{" "} <
//         /div> <
//         /div>
//     );
// };

// export default Navbar;
