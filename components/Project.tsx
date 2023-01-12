import React, { FunctionComponent, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { ISProject } from "../type";
import Image from "next/image";
import { FadInup, stragger } from "../animation";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

const Project: FunctionComponent<{
  project: ISProject;
  showdetail: number | null;
  setShowdetail: (id: number | null) => void;
}> = ({
  project: {
    name,
    category,
    description,
    github_url,
    image_path,
    key_techs,
    id,
  },
  showdetail,
  setShowdetail,
}) => {

  return (
    <motion.div  >
      <motion.div  >
      <Image
        src={image_path}
        alt={name}
        width="300"
        height="150"
        className="object-fill h-40 rounded-md cursor-pointer w-80"
        onClick={() => {setShowdetail(id)}}
        
      />
      
      <p className="my-2 text-lg font-semibold tracking-wide text-center text-gray-800 dark:text-white font-Balsamiq">{name}</p>
      </motion.div>

      {/* // card showen only when we click on it */}

      {showdetail === id && (
        
        <div  className="absolute top-0 left-0 grid w-full h-auto p-2 text-black bg-gray-300 rounded-md dark:bg-dark-100 dark:text-white md:grid-cols-2 gap-x-12">
          {/* left */}
          <motion.div
            className="mx-4 my-4"
            variants={stragger}
            initial="initial"
            animate="animate"
          >
            
            <Tilt 
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}>
            <motion.div className="rounded-lg" variants={FadInup} whileHover={{boxShadow:'0px 0px 10px #fff'}}>
              <Image
                className="w-full h-full border-2 border-white rounded-lg"
                src={image_path}
                alt={name}
                width="300"
                height="150"
              />
            </motion.div>
            </Tilt>
            <motion.div variants={FadInup} className="flex justify-center my-4">
              <a
                href={github_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-400 rounded-md dark:bg-dark-200 hover:animate-pulse"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
            </motion.div>
          </motion.div>

          {/* right */}

          <motion.div
            className="mt-8"
            variants={stragger}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="mb-3 text-xl font-medium tracking-wide font-Balsamiq md:text-2xl lg:text-3xl"
              variants={FadInup}
            >
              {name}
            </motion.h2>
            <motion.h3 className="mb-3 font-semibold text-gray-800 dark:text-white font-Hanken" variants={FadInup}>
              {description}
            </motion.h3>
            <motion.div
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wide"
              variants={FadInup}
            >
              {key_techs.map((k) => (
                <span
                  key={k}
                  className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                >
                  {k}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.button
            variants={FadInup}
            initial="initial"
            animate="animate"
            onClick={() => setShowdetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full dark:bg-dark-200 top-3 right-3"
          >
            <MdClose size={30} />
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};

export default Project;
