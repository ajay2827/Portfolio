import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IconType } from "react-icons";
import { ISProject, IsService, IsSkill } from "./type";
import {
  SiJavascript,
  SiCss3,
  SiDocker,
  SiHeroku,
  SiHtml5,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSass,
  SiWebpack,
  SiBabel,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGooglecloud,
  SiLinux,
  SiMocha,
  SiJest,
  SiPostgresql,
  SiRedux,
  SiNetlify,
  SiTypescript,
  SiUbuntu,
  SiFirebase,
  SiMarkdown,
  SiWordpress,
  SiVercel,
  SiCplusplus,
  SiCanva,
  SiMysql,
  SiFlask,
  SiDjango,
  SiSolidity,
  SiWeb3Dotjs,
  SiIpfs,
  SiExpress,
  SiEthereum,
  SiGitlab,
  SiTailwindcss,
  SiPostman,
  SiLit,
  SiHasura,
  SiGraphql,
  SiStrapi,
  SiMaterialui,
  SiBitbucket,
  SiShopify,
  SiPolymerproject,
  SiRedis,
  SiGo,
  SiChainlink,
  SiCypress,
  SiChakraui,
  SiNextdotjs
} from "react-icons/si";

import {
  FaCouch,
  FaNodeJs,
  FaHardHat
} from "react-icons/fa"



export  const services:IsService[]=[

    {
        id:1,
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:
          "I can build a beautiful and scalable SPA using  HTML,CSS and React.js ",
      },
      {
        id:2,
        Icon: FaServer,
        title: "Backend  Development",
        about:
          "handle database, server, api using Express & other popular frameworks",
      },
      {
        id:3,
        Icon: AiOutlineApi,
        title: "API Development",
        about:
          "I can develop robust  REST API using  Node API ",
      },
      {
        id:4,
        Icon: MdDeveloperMode,
        title: "Competitive Coder",
        about: "a daily problem solver in HackerRank and Leet Code ",
      },
      {
        id:5,
        Icon: AiOutlineAntDesign,
        title: "UI/UX designer",
        about:
          "stunning user interface designer using Figma and Framer ",
      },
      

]

export const myprojects:ISProject[]=[
  {
    id:1,
    name:'AjaxChat',
    description:'FullStack Chat Application',
    image_path:"/Image/chat.png",
    github_url:'https://github.com/ajay2827/AjaxChat',
    category:['react','express'],
    key_techs:["React",'TailwindCSS','NodeJs','Express','Socket.io'],
  },
  {
    id:2,
    name:'Keytrove',
    description:'command line tool Keytrove to authenticate users and store data in the form of key-value pairs directly from the terminal.',
    image_path:'/Image/keytrove.png',
    github_url:'https://github.com/ajay2827/keytrove_cli',
    category:['express'],
    key_techs:['NodeJs','Express']
  },
  {
    id:3,
    name:'AdventureVerse',
    description:'React Full Stack Blogging App',
    image_path:"/Image/adventureverse.png",
    github_url:'https://github.com/ajay2827/AdventureVerse',
    category:['react','express'],
    key_techs:["React",'Node','Express','Framer-motion'],
  },

  {
    id:4,
    name:'Deliciousss',
    description:'A React Food Recipe App',
    image_path:"/Image/food_recipe.png",
    github_url:'https://github.com/ajay2827/FoodRecipe',
    category:['react'],
    key_techs:["React",'Framer','CSS'],
  },
  {
    id:5,
    name:'QR-Code-Generator',
    description:'A Simple QR-Code-Generator app using JavaScript',
    image_path:"/Image/qr-code.png",
    github_url:'https://github.com/ajay2827/QR-Code-Generator',
    category:['javascript'],
    key_techs:['JavaScript','CSS'],
  },
  {
    id:6,
    name:'PortFolio',
    description:'Portfolio made with Next JS Framer Motion and TypeScript',
    image_path:"/Image/port.png",
    github_url:'https://github.com/ajay2827/Portfolio',
    category:['react'],
    key_techs:["NextJS",'Framer','Tailwind','TypeScript'],
  },
]

export const skilldata:IsSkill[]=[
  {
    id:1,
    des:'C++',
    Sicon: SiCplusplus,
    color:'#00599C'
  },
  {
    id:2,
    des:'HTML5',
    Sicon:SiHtml5,
    color:'#E34F26'
  },
  {
    id:3,
    des: 'CSS3',
    Sicon: SiCss3,
    color:'#1572B6'
  },
  {
    id:4,
    des: 'Tailwind',
    Sicon: SiTailwindcss,
    color:'#06B6D4'
  },
  {
    id:5,
    des: 'JavaScript',
    Sicon: SiJavascript,
    color:'yellow'
  },
  {
    id:6,
    des: 'TypeScript',
    Sicon: SiTypescript,
    color:'#3178C6'
  },
  {
    id:7,
    des: 'GitHub',
    Sicon: SiGithub,
    color:'white'
  },
  {
    id:8,
    des: 'Git',
    Sicon: SiGit,
    color:'#F05032'
  },
  {
    id:9,
    des: 'Canva',
    Sicon: SiCanva,
     color:'#00C4CC'
  },
  {
    id:10,
    des: 'Express',
    Sicon: SiExpress,
    color:'white'
  },
  {
    id:11,
    des: 'Postman',
    Sicon: SiPostman,
    color:'#FF6C37'
  },
  {
    id:12,
    des: 'MongoDB',
    Sicon: SiMongodb,
    color:'#47A248'
  },
  {
    id:13,
    des: 'NodeJS',
    Sicon: FaNodeJs,
    color:'#339933'
  },
  {
    id:14,
    des: 'React',
    Sicon: SiReact,
    color:'#61DAFB'
  },
  {
    id:15,
    des:'Next',
    Sicon:SiNextdotjs,
    color:'white'
  }

]
