import React from "react";
import ProjectItem from "../ProjectItem";

import ProjectAbout from "../ProjectAbout";
// import "./index.css";

const data = [
  {
    id: 1,
    name: "Wikipedia",
    link: "https://shubwikipedia.ccbp.tech/",
    github: "https://github.com/0107shubham/WIikipedia",
    image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1704967447/wiki_kg4hwx.png",
    text: "Developed a custom Wikipedia search application where users can search and view curated results. Users can also see detailed explanations on Wikipedia by clicking on specific results. Fetched search results from the server asynchronously using a fetch GET HTTP API call. When the user clicks on a particular result, its website is opened in a new tab using the target attribute of the anchor tag in HTML.",
  },
  {
    id: 2,
    name: "Match-Game",
    link: "https://matchgamesttt.ccbp.tech/",
    github: "https://github.com/0107shubham/MatchGame",
    image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1704991250/matchgame_mob3cf.png",
    text: "I developed a responsive matching game where users can score points by clicking on identical images. The game has a time limit of 60 seconds, and the player with the highest score wins. After winning the game, a winning poster is displayed. Technologies used include React.js for the frontend, CSS for styling, for responsive design.",
  },
  {
    id: 3,
    name: "Appointments App",
    link: "https://appointmentst.ccbp.tech/",
    github: "https://github.com/0107shubham/Appointments-App",
    image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1704991238/Appointment_eu1g5a.png",
    text: "It's a user-friendly appointment app that simplifies your scheduling. Add, star, and filter appointments effortlessly. Technologies: React JS, JSX, CSS",
  },
  {
    id: 4,
    name: "App-Store",
    link: "https://appstorest.ccbp.tech/",
    github: "https://github.com/0107shubham/App-Store",
    image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1704991193/AppStore_fki0v5.png",
    text: "I developed a responsive matching game where users can score points by clicking on identical images. The game has a time limit of 60 seconds, and the player with the highest score wins. After winning the game, a winning poster is displayed. Technologies used include React.js for the frontend, CSS for styling for responsive design.",
  },
  {
    id: 5,
    name: "Comment App",
    link: "https://commentappst.ccbp.tech/",
    github: "https://github.com/0107shubham/Comments-App",
    image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1704991183/Comments_agughl.png",
    text: "It's a user-friendly comment app that simplifies your enquiry. Add, Like, and Delete effortlessly. Technologies: React JS, JSX, CSS.",
  },
  {
    id: 7,
    name: "Cryptocurrency-Tracker",
    link: "https://crptocrencyst.ccbp.tech/",
    github: "https://github.com/0107shubham/CryptocurrencyTracker",
    image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1704991166/currencyCripto_zaiycq.png",
    text: "Built a reliable tool to monitor cryptocurrency market prices.Displayed crypto data in a user-friendly table with React and Bootstrap. Ensured optimal viewing on all devices through Bootstrap and CSS.Technologies used: React JS, REST API Calls, CSS, Bootstrap",
  },
  {
    id: 8,
    name: "Emoji Game",
    link: "https://emojigamest.ccbp.tech/",
    github: "https://github.com/0107shubham/Emoji-Game",
    image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1704991156/EmojiGame_gsekg4.png",
    text: "Developed responsive Emoji memory game where users can win it by clicking unique emoji each time till all displayed emojis are clicked. All emojis positions will be randomized after each clickList of Emojis is displayed by using React components, props , lists, conditional rendering, styled using CSS and randomized emojis placed using event listeners by updating react state.Updated different game states such as emojis list, winning state and losing state by using game state variable and conditional rendering.Technologies used: React.js, CSS, Bootstrap",
  },
  {
    id: 9,
    name: "IPL Dashboard",
    link: "https://ipldashst.ccbp.tech/",
    github: "https://github.com/0107shubham/IPL-Dashboard-App",
    image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1704991149/iplDashborad_yqcexj.png",
    text: "Implemented IPL Dashboard app where users can list of ipl team, individual team details and respective team matches info.Implemented UI such as home dashboard, individual team info routes by using React Router library components like Route, Switch, Link, props, lists & keys. Fetched teams list from server asynchronously using fetch GET HTTP API call & individual teamdetails, matches info by sending team id as path parameter.Implemented 404 not found page for invalid paths by keeping 404 Route as last route in the Switch component with * path.Technologies used: React JS, Routing, REST API Calls, CSS, Bootstrap",
  },
  {
    id: 10,
    name: "Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)",
    link: "https://nxttrendzapps.ccbp.tech/login",
    github: "https://github.com/0107shubham/nzttrenz-shopping-final",
    image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1704994077/NxtTranze_kmm8ac.png",
    text: "Developed a complete ECommerce platform inspired by Amazon and Flipkart. Implemented user authentication with JWT tokens stored in secure cookies. Utilized React Router for seamless multi-page navigation and dynamic rendering.Technologies: React JS, JavaScript, CSS, Bootstrap, REST API Calls, Cookies, JWT Token",
  },
  {
    id: 11,
    name: "Jobby App",
    link: "https://jobbyappst.ccbp.tech/",
    github: "https://github.com/0107shubham/jobby_app",
    image:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1704994063/nobby_bffnpn.png",
    text: "Developed a complete job Searching platform . Implemented user authentication with JWT tokens stored in secure cookies. Utilized React Router for seamless multi-page navigation and dynamic rendering.Technologies: React JS, JavaScript, CSS, Bootstrap, REST API Calls, Cookies, JWT Token",
  },
  // Add more objects as needed
];

const Projects = () => {
  return (
    <div id="projects">
      <ProjectAbout />
      <ul className="flex flex-row justify-center flex-wrap">
        {data.map((project) => (
          <ProjectItem key={project.id} data={project} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
