import React from "react";
import { BsLinkedin, BsGithub, BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail, AiOutlineArrowRight } from "react-icons/ai";

import "./index.css";
const Home = () => {
    return (
      <div>
        <div
          className=" grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 pt-[10vw] "
          id="home"
        >
          <div className="hidden lg:block outer-social">
            <div className="flex flex-row lg:flex-col space-y-8 p-4">
              <div>
                <a
                  href="https://www.linkedin.com/in/shubhamm-tyagi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon is-medium icon-color ">
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
                  <span className="icon is-medium icon-color">
                    <BsGithub />
                  </span>{" "}
                </a>{" "}
              </div>{" "}
              <div>
                <a href="tel:+91-91313-54232">
                  <span className="icon ">
                    <BsFillTelephoneFill />
                  </span>{" "}
                </a>{" "}
              </div>{" "}
              <div>
                <a href="mailto:shubhamtyagi.lncte@gmail.com">
                  <span className="icon is-medium icon-color">
                    <AiOutlineMail />
                  </span>{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-span-2 order-2 sm:order-1 pl-[10px] sm:px-0 sm:pl-[2vw] lg:pl-0">
            <h1 className="name  whitespace-nowrap text-[35px] lg:text-[40px]">
              Hi, I am Shubham{" "}
            </h1>{" "}
            <p className=" text-[35px] sm:text-[30px] lg:text-[40px] text-purple-800 font-semibold">
              Full Stack Web Developer{" "}
            </p>{" "}
            <p className="skills  sm:text-[18px]  md:text-[24px]">
              I am a <span className=""> Full Stack Web developer </span> with
              excellent Problem Solving Skills and ability to perform well in a
              team.Passionate about Coding and enjoy building Web Applications.{" "}
            </p>{" "}
            <a
              href="tel:+91-9131354232"
              className="bg-purple-500 p-4 flex justify-center align-center w-44 my-14 rounded-2xl"
            >
              <span className=" text-white"> Contact Me </span>{" "}
              <span className="text-white pt-1 px-1">
                <AiOutlineArrowRight />
              </span>{" "}
            </a>{" "}
          </div>{" "}
          <div className="col-span-2 flex order-1 w-full sm:order-2 justify-center">
            <img
              className=" w-[60%] aspect-[16/20] sm:w-[250px] lg:w-[300px]  sm:h-[350px] lg:h-[450px]"
              src={
                "https://res.cloudinary.com/drvjsegeb/image/upload/e_improve,e_sharpen/v1698516873/shubham_px_lite_fgteme.png"
              }
              alt="profile-pic"
            />
          </div>{" "}
        </div>{" "}
      </div>
    );
};

export default Home;