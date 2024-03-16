import React from "react";
import { Chrono } from "react-chrono";
// import graduation from "../../assets/img/graduation.png";

const data = [
  {
    title: "2013-2014",
    cardTitle: "Intermediate (Class XII)",
    cardSubtitle: `Maharani LaxmiBai Convent School - Bhind`,
    cardDetailedText: "Completed Class XII with 76.8% in Mp State Board",
  },
  {
    title: "2015-2019",
    cardTitle: "B.E in Mechanical",
    cardSubtitle: "LNCT Group of College - Bhopal",
    cardDetailedText: "Graduated with 7.25 CGPA",
  },
  {
    title: "2019-2021",
    cardTitle: "Quality Support Analyst",
    cardSubtitle: "Teleperformance, Indore",
    cardDetailedText: `The role of a Quality Support Analyst (QSA) for 
    e-commerce clients is to monitor, improve, and maintain high-quality 
    services, analyze performance, provide feedback, identify and fix issues, 
    and ensure compliance while fostering continuous improvement.`,
  },
  {
    title: "2022-Present",
    cardTitle: "Content Moderator",
    cardSubtitle: "Task Us - Indore",
    cardDetailedText: `As a content moderator focusing on social and political issues at a major social media platform, my primary responsibility involves reviewing user-generated content specifically related to social and political topics..`,
  },
  {
    title: "2022-Present",
    cardTitle: "Full Stack Development Trainee with MERN Specialization",
    cardSubtitle: "NxtWave Disruptive Technologies - Hyderabad",
    cardDetailedText: `Built several impressive Static, Dynamic and Responsive Website using JS, React and Express
    Solved several problems using Python covering concepts like Functions and Recursion, Strings, Lists, Dictionaries, Sets and Tuples`,
  },
  // {
  //   title: "2022-Present",
  //   cardTitle: "Full Stack Developer",
  //   cardSubtitle: "Kayrros",
  //   cardDetailedText: `Worked on Migration of Millions of Data from Excel, Elasticsearch DB, PostgreSQL to modern Schema PostgreSQL DB.
  //   Worked on developing Modern Frontend Web Portal with multiple routes and API integration. Used Stencil.js for developing web components initially. Later integrated all Web
  //   components using React and Redux Toolkit. Used Bulma CSS
  //   library for styling.`,
  // },
];

const Qualification = () => {
  return (
    <div id="qualification" className=" pt-44 ">
      <div className="">
        <h1 className="text-center text-5xl font-bold">
          Education & Experience
        </h1>
      </div>

      <div className="h-full">
        <Chrono
          theme={{
            primary: "#6643b5",
            secondary: "#e7eaf6",
            // cardBgColor: "yellow",
            // cardForeColor: "violet",
            // titleColor: "black",
            // titleColorActive: "red",
          }}
          useReadMore={false}
          items={data}
          mode="VERTICAL_ALTERNATING"
          cardHeight={130}
          slideShow
          slideItemDuration={3000}
        >
          <div className="chrono-icons">
            {/* <img src={graduation} alt="graduation" /> */}
            {/* <img src={graduation} alt="graduation" /> */}
            <img
              src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
              alt="work"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
              alt="work"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
              alt="work"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
              alt="work"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
              alt="work"
            />
          </div>
        </Chrono>
      </div>
    </div>
  );
};

export default Qualification;
