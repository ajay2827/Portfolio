import { motion } from "framer-motion";
import React from "react";
import { FadInup, routeAnimation, stragger } from "../animation";
import Skill from "../components/Skill";
import { skilldata } from "../data";

const Techstack = () => {
  const TFadInup={
    initial:{
        opacity:0,
        y:60
    },
    animate:{
        opacity:1,
        y:0,
        transition:
        {
            type:'spring',
            stiffness:160,
            damping:5
        }
    },
    exit:{
        opacity:0,
        transition:
        {
            duration:0.2
        }
    }
}
const Tstragger={
  initial: {},
  animate:{
      transition:{
          staggerChildren:0.1,
      }
  },
  exit:{}
}
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center justify-center w-full h-full mt-3 rounded-t-sm bg-slate-800 dark:bg-dark-100"
    > 
      <motion.div   
       className="flex items-center justify-center">
        <h1 className="mx-3 mb-5 text-5xl font-semibold tracking-wide text-center text-green font-Dancing">Tech</h1>
        <h1 className="mb-5 text-5xl font-semibold tracking-wide text-center text-black dark:text-white font-Dancing"> i Know</h1>
      </motion.div>
      <motion.div className="flex flex-wrap w-full gap-5 lg:px-24 sm:px-auto" variants={Tstragger} initial='initial' animate='animate'>
        {skilldata.map((skill) => (
         <motion.div variants={TFadInup} key={skill.id} className="relative mx-5 my-5 "> <Skill skill={skill}/></motion.div> 
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Techstack;
