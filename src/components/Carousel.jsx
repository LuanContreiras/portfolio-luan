import { useRef, useState, useEffect} from 'react'

import { motion } from 'framer-motion'

import web1 from "../assets/bolao.png"
import web2 from "../assets/eSports.png"
import web3 from "../assets/DoctorCare.png"
import web4 from "../assets/Habits.png"
import web5 from '../assets/rvbPreview.jpeg'
import web6 from '../assets/constChallenge.png'


const images = [web1, web2, web3, web4, web5, web6]

export function Carousel(){
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  },[])

  return(
    <div className='flex items-center gap-4'>
      <p className='hidden md:inline'>.</p>
      <motion.div ref={carousel} className='hidden md:flex cursor-grab overflow-hidden md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1180px]' whileTap={{cursor: "grabbing"}}>
        <motion.div className='flex' drag="x" dragConstraints={{ right: 0, left: -width}}>

          {images.map(image => (
            <motion.div className="md:p-6 md:min-w-[600px] md:min-h-[400px] " key={image}>
              <img src={image} className="rounded-lg w-full h-[75%] pointer-events-none ring-4 ring-violet-600 ring-offset-4 ring-offset-gray-300 dark:ring-offset-gray-800"/>
            </motion.div>
          ))}

        </motion.div>
      </motion.div>
              
        
      <div className='flex md:hidden flex-col gap-10'>
        {images.map(image => (
          <div className='basis-1/3 flex-1' key={image}>
            <img src={image} className="rounded-lg  w-full h-full shadow-xl"/>
          </div>
        ))}
      </div>
      <p className='hidden md:inline'>.</p>
    </div>
  
  )
}