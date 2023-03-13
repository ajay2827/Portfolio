import React, { useState } from "react";
import { FadInup, routeAnimation, stragger } from "../animation";
import Project from "../components/Project";
import ProjectNavbar from "../components/ProjectNavbar";
import { myprojects } from "../data";
import { Category } from "../type";
import { motion } from "framer-motion";


 const Projects=()=> {
    
  const [projectsa,setProjecta]=useState(myprojects);
  const[ active,setActive]=useState("all");
  const [showdetail,setShowdetail]=useState<number|null>(null); 
  
  const handlerfiltercategory=(cat:Category|'all')=>{

         if(cat==='all')
         {
            setProjecta(myprojects);
            setActive(cat);
            return;
         } 
         
         const newArray=myprojects.filter((p)=>p.category.includes(cat));
         setProjecta(newArray);
         setActive(cat);
  }
   const PFadInup={
    initial:{
        y:60,
    },
    animate:{
        y:0,
        transition:
        {
            type:'spring',
            stiffness:150,
            damping:5,
        }
    },
   
    exit:{
      opacity:0
    }
}

 const Pstragger={
  initial: {},
  animate:{
      transition:{
          staggerChildren:0.1,
      }
  },
  exit:{},
}
   
  return (
    <motion.div variants={routeAnimation} initial='initial' animate='animate' exit='exit' className="px-5 py-2 ">
       <ProjectNavbar handlerfiltercategory={handlerfiltercategory} active={active}/> 

    <motion.div layout className="relative grid grid-cols-12 gap-4 my-3" variants={Pstragger} initial='initial' animate='animate' exit='exit'>
        {projectsa.map((p) => (
          
          <motion.div layout variants={PFadInup} key={p.id} className="col-span-12 p-3 rounded-lg dark:bg-slate-600 sm:col-span-6 lg:col-span-4 bg-dark-200"><Project showdetail={showdetail} setShowdetail={setShowdetail} project={p}/> </motion.div>
    
        ))}
      </motion.div>
    </motion.div>
  );
}

export default  Projects