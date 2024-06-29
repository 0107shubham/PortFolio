import React, { Fragment, useState } from "react";
import Progressbar from "../ProgressBar";
import "./iindex.css";

const Skills = () => {
  const frontendSkillSet = [
    { name: "HTML & CSS", completion: "90" },
    { name: "Bootstrap", completion: "90" },
    { name: "JavaScript", completion: "80" },
    { name: "React & React Hooks", completion: "80" },
    { name: "Tailwind", completion: "80" },
  ];
  const backendSkillSet = [
    { name: "Git", completion: "80" },
    { name: "Python", completion: "80" },
    { name: "Node & Express", completion: "70" },
    { name: "sqlLite", completion: "80" },
    { name: "Data Structures & Algorithms", completion: "30" },
  ];
  const [startFlag, startFlagSetter] = useState(false);

  return (
    <div
      className="pt-44 -z-1000 min-h-[90vh] "
      id="skills"
      onMouseEnter={(e) => {
        e.preventDefault();
        startFlagSetter(true);
      }}
    >
      <div className="">
        <h1 className="text-center font-bold text-5xl"> My Skills </h1>{" "}
      </div>{" "}
      <div className="  grid grid-cols-1 lg:grid-cols-2 gap-8 px-[3.5vw]">
        <div className="">
          <div>
            <h1 className="font-bold text-3xl"> Frontend </h1>{" "}
          </div>{" "}
          {frontendSkillSet.slice().map((item, index) => (
            <Fragment key={index}>
              <p className="is-size-5 has-text-weight-semibold">
                {" "}
                {item.name}{" "}
              </p>{" "}
              <Progressbar done={item.completion} start={startFlag} />{" "}
            </Fragment>
          ))}{" "}
        </div>{" "}
        <div className="">
          <div>
            <h1 className="font-bold text-3xl "> Backend </h1>{" "}
          </div>{" "}
          {backendSkillSet.slice().map((item, index) => (
            <Fragment key={index}>
              <p className="is-size-5 has-text-weight-semibold">
                {" "}
                {item.name}{" "}
              </p>{" "}
              <Progressbar done={item.completion} start={startFlag} />{" "}
            </Fragment>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Skills;
