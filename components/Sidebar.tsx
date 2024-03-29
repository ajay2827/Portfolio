import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {CiLocationOn} from 'react-icons/ci'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {MdContactPage} from 'react-icons/md'
import { useTheme } from 'next-themes'



function Sidebar() {
     
   const {theme,setTheme}=useTheme();
   const [download,setDownload]=useState<Boolean>(false)
   

   const changetheme=()=>{
    setTheme(theme==='light'?'dark':'light');
   }
 

     
  return (
    <div>
       <Image src='/Image/profile.jpg' alt="user-avatar" width={144} height={144} className='object-cover object-top mx-auto border-2 border-white rounded-full w-36 h-36 shadow-white '/>
        
       <h3 className='my-4 text-3xl font-semibold tracking-wider text-center dark:text-gray-500 font-Kasuhan'>
        <span className='text-green dark:text-white'>Ajay </span> 
        Singh
       </h3>
  
      <p className='px-2 py-1 my-4 text-lg font-medium tracking-wide text-center text-white rounded-full dark:bg-extblue-300 dark:bg-opacity-75 font-Balsamiq bg-dark-200' >Web Developer</p>
      <a href='/assests/AjaySingh-Resume.pdf'
       download='AjaySingh-Resume'
        onClick={()=>setDownload(true)} 
        className='flex flex-row justify-center px-2 py-1 my-3 text-lg font-medium tracking-wide text-center text-white rounded-full dark:bg-extblue-300 dark:bg-opacity-75 font-Balsamiq place-items-center bg-dark-200' > 
        <MdContactPage className='w-5 h-5 mx-2 hover:scale-105 hover:animate-pulse'/>{download?'Downloaded !':'Download Resume'}
        </a>
      
      {/* // socail icon */}
      <div className='flex flex-row mx-auto my-5 text-gray-300 text-opacity-90 justify-evenly'>
        <a href="https://www.linkedin.com/in/ajay-singh-9a73281a0" rel="noreferrer" target='_blank'> <AiFillLinkedin className='w-8 h-8 duration-500 cursor-pointer hover:text-gray-50 hover:scale-125'/> </a>
        <a href="https://github.com/ajay2827" rel="noreferrer" target='_blank'> <BsGithub className='w-8 h-8 duration-500 cursor-pointer hover:text-gray-50 hover:scale-125'/> </a>
        <a href="https://www.instagram.com/ajay.singh0710/" rel="noreferrer" target='_blank'> <BsInstagram className='w-8 h-8 duration-500 cursor-pointer hover:text-gray-50 hover:scale-125'/> </a>
      </div>
      
      {/* email and address */}
      <div className='py-4 my-5 text-center rounded-md dark:bg-extblue-300 dark:bg-opacity-70 bg-dark-200' style={{marginRight:'-1rem' ,marginLeft:'-1rem'}}>
        <div className='flex flex-row items-center justify-center space-x-1 text-xl font-medium tracking-wider text-white font-Great '>
            <CiLocationOn/>
            <span> Gwalior, India</span>
        </div>
        <p className='my-3 text-xl font-medium tracking-wider text-white font-Great'>ajay27singh09@gmail.com</p>
      </div>

      <div className='flex flex-col items-center justify-center'>
      <button className='w-8/12 px-5 py-2 mx-auto my-2 text-lg font-semibold text-white rounded-full hover:animate-pulse font-Balsamiq bg-gradient-to-r from-green to-blue-400 focus:outline-none' onClick={()=>window.open('mailto:ajaythesmart27@gmail.com')} >Email me</button>
      <button onClick={changetheme} className='w-8/12 px-5 py-2 mx-auto my-2 text-lg font-semibold text-white uppercase rounded-full hover:animate-pulse font-Balsamiq bg-gradient-to-r from-green to-blue-400'>{theme==='light'?'dark':'blue'} UI</button>
      </div>
      
    </div>
  )
}

export default Sidebar
