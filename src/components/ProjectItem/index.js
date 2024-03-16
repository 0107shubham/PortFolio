import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

import "./index.css";

const ProjectItem = (props) => {
  const { data } = props;
  const { id, image, text, name, link, github } = data;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (visible) {
        e.preventDefault();
      }
    };

    if (visible) {
      document.body.style.overflow = "hidden"; // Disable scrolling
      document.addEventListener("scroll", handleScroll, { passive: false });
    } else {
      document.body.style.overflow = ""; // Enable scrolling
      document.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.body.style.overflow = ""; // Reset overflow style on unmount
      document.removeEventListener("scroll", handleScroll);
    };
  }, [visible]);

  const imageContainer = () => {
    return (
      <motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={image}
            alt={`Project ${id}`}
            className="z-10 h-[220px] w-[450px]"
          />
        </motion.div>
      </motion.div>
    );
  };

  const textContainer = () => {
    return (
      <div className="textContainer">
        <div className="bg-blue-600 w-[450px] text-white absolute top-[25%] left-[30%]">
          <motion.div
            initial={{ opacity: 0.5, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-3xl text-black font-bold ">{name}</p>
          </motion.div>
          <p className="p-2">{text}</p>
          <div>
            <motion.a
              initial={{ opacity: 0.5, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.9 }}
              className="link"
              target="_blank"
              href={link}
            >
              Live
              <IoIosArrowRoundForward className="text-2xl" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0.5, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.9 }}
              className="link"
              target="_blank"
              href={github}
            >
              Source Code <IoIosArrowRoundForward className="text-2xl" />
            </motion.a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className=" flex flex-col justify-center items-center  w-[450px] h-[250px] m-10 cursor-pointer"
      onClick={() => setVisible(!visible)}
    >
      {imageContainer()}
      {visible && textContainer()}
    </div>
  );
};

export default ProjectItem;
