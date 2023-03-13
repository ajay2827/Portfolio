import { GetServerSidePropsContext } from 'next';
import React from 'react'
import { FadInup, routeAnimation, stragger } from '../animation';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data'
import { motion } from 'framer-motion';


const index=()=> {
  
  return (
    <motion.div className='flex flex-col flex-grow px-6 pt-1' variants={routeAnimation} initial='initial' animate='animate' exit='exit'>
      <h5 className='my-3 font-semibold text-white font-Hanken'>I am currently pursuing B.Tech Degree (2nd year) in Computer Science Engineering from IIITM Gwalior.<br/>I am Full Stack Developer based in India and build dynamic data-driven websites and applications using a rich ensemble of technologies and techniques.</h5>
      
      <div className='flex-grow p-4 mt-4 dark:bg-extblue-500 bg-dark-100 ' style={{marginLeft:'-1.5rem',marginRight:'-1.5rem'}}>
        <h6 className='my-3 text-2xl font-medium tracking-wide text-white dark:text-white font-Acme'>What i am doing currently</h6>
        <motion.div variants={stragger} initial='initial' animate='animate' className='grid gap-6 mt-5 lg:grid-cols-2'>
          {
            services.map(service=>( <motion.div variants={FadInup} key={service.id} className='rounded-lg dark:bg-extblue-300 dark:bg-opacity-70 bg-dark-200 lg:col-span-1'>
              <ServiceCard service={service} />
              </motion.div> ))
          }
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index


