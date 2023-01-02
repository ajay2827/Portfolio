import React, { FunctionComponent, useState } from "react";
import { IsSkill } from "../type";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

const Skill: FunctionComponent<{ skill: IsSkill }> = ({
  skill: { des, Sicon, color },
}) => {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center ">
      <motion.div
        whileHover={{ rotateZ: 10, scale: 0.95, y: -5 }}
        transition={{ type: "spring", stiffness: 150, damping: 3 }}
      >
        {
          <Sicon
            className="cursor-pointer w-20 h-20"
            onMouseOver={() => setHidden(false)}
            onMouseOut={() => setHidden(true)}
            style={{ color: `${color}` }}
          />
        }
      </motion.div>
      {hidden === false && (
        <motion.div 
        initial={{opacity:0,x:-25}}
        animate={{opacity:1,x:0,rotateZ:12}}
        transition={{duration:0.4,delay:0.1}}
        className="absolute bottom-0 w-24 pt-1 font-medium tracking-wide text-center rounded-md dark:bg-cyan-600 bg-sky-600 h-9 div-2 font-Head">
          <p>{des}</p>
        </motion.div>
      )}
    </div>
  );
};

export default Skill;
