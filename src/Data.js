import { SiExpress, SiNodedotjs, SiSequelize, SiJquery, SiHandlebarsdotjs, SiHtml5, SiCss3, SiSpotify, SiJest, SiBootstrap, SiMysql, SiReact, SiStyledcomponents } from "react-icons/si";
import { GrCli } from "react-icons/gr";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const slider = [
  {
    text: "HTML",
    width: "65%",
  },
  {
    text: "CSS",
    width: "70%",
  },
  {
    text: "Bootstrap",
    width: "60%",
  },
  {
    text: "JS",
    width: "80%",
  },
  {
    text: "React JS",
    width: "70%",
  },
];

export const projects = [
  {
    image: "./assets/images/Cat_Wonderland.png",
    alt: "Cat Wonderland Image",
    heading: "Cat Wonderland",
    github: "https://github.com/richardjhong/cat-wonderland",
    deployed_site: "https://cat-wonderland.herokuapp.com/",
    description: "This app leverages a deckbuilder npm package along with various other npm packages to create a fullstack card game taking care of a cat.",
    devicons: [
      {
        icon: SiNodedotjs,
        tooltipMessage: "Node"
      },
      {
        icon: SiExpress,
        tooltipMessage: "Express"
      },
      {
        icon: SiSequelize,
        tooltipMessage: "Sequelize"
      },
      {
        icon: SiJquery,
        tooltipMessage: "jQuery"
      },
      {
        icon: SiHandlebarsdotjs,
        tooltipMessage: "Handlebars"
      }
    ]
  },
  {
    image: "./assets/images/Journal_Playlist.gif",
    alt: "Journal Playlist Image",
    heading: "Journal Playlist",
    github: "https://github.com/richardjhong/journal-playlist",
    deployed_site: "https://cat-wonderland.herokuapp.com/",
    description: "This app leverages Emotion Analysis API and Spotify API to provide playlists upon detecting the emotion of user input text.",
    devicons: [
      {
        icon: SiHtml5,
        tooltipMessage: "HTML5"
      },
      {
        icon: SiCss3,
        tooltipMessage: "CSS3"
      },
      {
        icon: SiSpotify,
        tooltipMessage: "SpotifyAPI"
      },  
    ]
  },
  {
    image: "./assets/images/react_portfolio.png",
    alt: "React Image",
    heading: "React Portfolio",
    github: "https://github.com/richardjhong/portfolio-v2",
    deployed_site: null,
    description: "This app (the very one that is being viewed now!) showcases use of React and its robust dependencies to create an online interactive portfolio.",
    devicons: [
      {
        icon: SiReact,
        tooltipMessage: "React"
      },
      {
        icon: SiStyledcomponents,
        tooltipMessage: "styled-components"
      },
      {
        icon: SiBootstrap,
        tooltipMessage: "Bootstrap"
      },
      {
        icon: SiHtml5,
        tooltipMessage: "HTML5"
      },
      {
        icon: SiCss3,
        tooltipMessage: "CSS3"
      },  
    ]
  },
  {
    image: "./assets/images/forum.png",
    alt: "Refactor Forum Blog Image",
    heading: "Refactor Forum Blog",
    github: "https://github.com/richardjhong/refactor-forum-blog",
    deployed_site: "https://refactor-forums.herokuapp.com/login",
    description: "This app leverages SQL database and handlebars to create a mock forum blog in which users can post threads and comment on existing posts.",
    devicons: [
      {
        icon: SiNodedotjs,
        tooltipMessage: "Node"
      },
      {
        icon: SiExpress,
        tooltipMessage: "Express"
      },
      {
        icon: SiSequelize,
        tooltipMessage: "Sequelize"
      },
      {
        icon: SiHandlebarsdotjs,
        tooltipMessage: "Handlebars"
      }
    ]
  },
  {
    image: "./assets/images/team_badge_generator.png",
    alt: "Team Badge Generator Image",
    heading: "Team Badge Generator",
    github: "https://github.com/richardjhong/team-badge-generator",
    deployed_site: null,
    description: "This app takes user input via the CLI and creates an index.html file with a badge for each team member based on the information given. Testing (with Jest) is also emphasized in this project.",
    devicons: [
      {
        icon: SiNodedotjs,
        tooltipMessage: "Node"
      },
      {
        icon: SiExpress,
        tooltipMessage: "Express"
      },
      {
        icon: SiJest,
        tooltipMessage: "Jest"
      },
      {
        icon: GrCli,
        tooltipMessage: "CLI"
      },
    ]
  },
  {
    image: "./assets/images/weather_forecast.gif",
    alt: "Weather Forecast Image",
    heading: "Weather Forecast",
    github: "https://github.com/richardjhong/weather-forecast",
    deployed_site: "https://richardjhong.github.io/weather-forecast/",
    description: "This app leverages jQuery, Bootstrap, and API calls from OpenWeather to get/store a city's local weather/ 5 day forecast with persistent data.",
    devicons: [
      {
        icon: SiHtml5,
        tooltipMessage: "HTML5"
      },
      {
        icon: SiCss3,
        tooltipMessage: "CSS3"
      },
      {
        icon: SiJquery,
        tooltipMessage: "jQuery"
      },
      {
        icon: SiBootstrap,
        tooltipMessage: "Bootstrap"
      }
    ]
  },
  {
    image: "./assets/images/employee_management_tracker.png",
    alt: "Employee Management Tracker ",
    heading: "Employee Management Tracker",
    github: "https://github.com/richardjhong/employee-management-tracker",
    deployed_site: null,
    description: "This app takes user input via CLI (command line interface) commands and can interact, update, add, and delete employees/roles/departments to an SQL database.",
    devicons: [
      {
        icon: SiNodedotjs,
        tooltipMessage: "Node"
      },
      {
        icon: SiExpress,
        tooltipMessage: "Express"
      },
      {
        icon: SiMysql,
        tooltipMessage: "MySQL"
      },
    ]
  },
];

export const socialLinks = [
  {
    "name":"linkedin",
    "url":"https://www.linkedin.com/in/hongjrichard/",
    "className": "faLinkedIn",
    "key": "linkedin-social",
    "icon": FaLinkedin 
  },
  {
    "name":"github",
    "url":"https://github.com/richardjhong",
    "className": "faGithub",
    "key": "github-social",
    "icon": FaGithub
  },
]

export const websiteTechStack = {
  devicons: [
    {
      icon: SiReact,
      tooltipMessage: "React"
    },
    {
      icon: SiStyledcomponents,
      tooltipMessage: "styled-components"
    },
    {
      icon: SiBootstrap,
      tooltipMessage: "Bootstrap"
    },
    {
      icon: SiHtml5,
      tooltipMessage: "HTML5"
    },
    {
      icon: SiCss3,
      tooltipMessage: "CSS3"
    },  
  ]
}