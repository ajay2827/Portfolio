import React, { FunctionComponent } from 'react'
import { IconType } from "react-icons";
import { services } from '../data';
import { IsService } from '../type';

const ServiceCard:FunctionComponent<{service:IsService}>=({service:{Icon,about,title}})=> {
  return (
    <div className='flex items-center p-2 space-x-4'>
      <Icon className='w-12 h-12 text-green'/>
      <div>
        <h4 className='text-lg font-semibold tracking-wide text-gray-800 dark:text-white font-Balsamiq'>{title}</h4>
        <p className='font-semibold text-gray-700 dark:text-white font-Hanken'>{about}</p>
      </div>
    </div>
  )
}

export default ServiceCard
