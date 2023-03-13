import Link from 'next/link';
import React, { useState,useEffect, FunctionComponent } from 'react';
import { useRouter } from 'next/router'

const NavItem: FunctionComponent<{
   active: string
   setActive: Function
   name: string
   route: string
}> = ({ active, setActive, name, route }) => {
   return active !== name ? (
      <Link href={route}>
         
            <span
               className='mx-2 text-lg cursor-pointer text-Para font-Kasuhan hover:border-b-4 hover:text-green'
               onClick={() => setActive(name)}>
               {name}
            </span>
         
      </Link>
   ) : null
}

function Navbar() {
   const [active, setActive] = useState('')
  const{pathname}=useRouter();
  useEffect(()=>{
      if(pathname==='/')setActive('About')
      if(pathname==='/Projects')setActive('Projects')
      if(pathname==='/Techstack')setActive('SkillSet')
      console.log(pathname);
      
  },[pathname])
  return (
    <div className='flex justify-between px-5 py-3 my-3'>
       <span className='text-4xl font-bold tracking-wide text-white scale-110 border-b-4 font-Kasuhan dark:text-green border-green md:text-2xl'>{active}</span>

       <div className='flex space-x-4 font-lg'>
       
            <NavItem
               active={active}
               setActive={setActive}
               name='About'
               route='/'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Projects'
               route='/Projects'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='SkillSet'
               route='/Techstack'
            />
       </div>
    </div>
  )
}

export default Navbar
