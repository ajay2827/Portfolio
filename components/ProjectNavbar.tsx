import React, { FunctionComponent } from 'react'
import { Category } from '../type'


export const ProjectItem:FunctionComponent<{value:Category|"all", handlerfiltercategory:Function,active:string}> = ({value,handlerfiltercategory,active}) => {
    
    let className='text-lg font-medium capitalize cursor-pointer dark:text-gray-400 dark:hover:text-green hover:text-green font-Satisfy';
    if(active===value)
    {
        className+=' text-green dark:text-green';
    } 

  return (
    <li className= {className} onClick={()=>handlerfiltercategory(value)}>
      {value}
    </li>
  )
}




const ProjectNavbar:FunctionComponent<{handlerfiltercategory:Function,active:string}> = (props) => {
  return (
    <div className='flex px-3 py-2 space-x-5 list-none'>
      <ProjectItem value='all' {...props}/>
      <ProjectItem value="react" {...props}/>
      <ProjectItem value='javascript' {...props}/>
      <ProjectItem value='express' {...props}/>
    </div>
  )
}

export default ProjectNavbar
