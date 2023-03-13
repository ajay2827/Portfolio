import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'
import { HydrationProvider, Client } from "react-hydration-provider";
import { Router } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps ,router}: AppProps) {
  return (
    <HydrationProvider>
      <Client>
   <ThemeProvider attribute='class'>
    <div className='grid grid-cols-12 gap-6 px-6 my-10 lg:px-48 sm:px-20 md:px-32'>
      <div className='h-full col-span-12 p-4 text-base text-center dark:bg-extblue-400 dark:shadow-custom-blue shadow-custom-dark lg:col-span-3 rounded-2xl bg-dark-500'><Sidebar/> </div>
      
      <div className='flex flex-col col-span-12 overflow-hidden dark:bg-extblue-400 dark:shadow-custom-blue lg:col-span-9 rounded-2xl bg-dark-500 shadow-custom-dark'>
      <Navbar/>
     
      <AnimatePresence  mode='wait'>
      <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      </div>
    
    </div>
    </ThemeProvider>
    </Client>
    </HydrationProvider>
  )
}
