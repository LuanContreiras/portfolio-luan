
import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaReact, FaNodeJs, FaBootstrap} from 'react-icons/fa'
import { SiTailwindcss, SiTypescript } from "react-icons/si";

export function SkillArea(){
  return(
    <div className='max-w-4xl mx-auto grid grid-cols-2  md:flex md:flex-row md:flex-wrap md:justify-center md:items-center gap-4'>

      <div className="skillCard hover:text-orange-600">
        <FaHtml5 className='w-8 h-8 md:w-14 md:h-14' />
        <span className='font-bold'>HTML5</span>
      </div>

      <div className="skillCard hover:text-blue-600">
        <FaCss3Alt className='w-8 h-8 md:w-14 md:h-14' />
        <span className='font-bold'>CSS3</span>
      </div>

      <div className="skillCard hover:text-blue-400">
        <SiTailwindcss className='w-8 h-8 md:w-14 md:h-14' />
        <span className='font-bold'>TailwindCSS</span>
      </div>

      <div className="skillCard hover:text-indigo-500">
        <FaBootstrap className='w-8 h-8 md:w-14 md:h-14' />
        <span className='font-bold'>Bootstrap</span>
      </div>

      <div className="skillCard hover:text-yellow-600">
        <FaJs className='w-8 h-8 md:w-14 md:h-14' />
        <span className='font-bold'>JavaScript</span>
      </div>

      <div className="skillCard hover:text-blue-500">
        <SiTypescript className='w-8 h-8 md:w-14 md:h-14' />
        <span className='font-bold'>TypeScript</span>
      </div>

      <div className="skillCard hover:text-blue-300">
        <FaReact className='w-8 h-8 md:w-14 md:h-14' />
        <span className='font-bold'>ReactJS</span>
      </div>

      <div className="skillCard hover:text-blue-300">
        <FaReact className='w-8 h-8 md:w-14 md:h-14' />
        <span className='font-bold'>React Native</span>
      </div>

      <div className="skillCard dark:hover:text-lime-500 hover:text-lime-600">
        <FaNodeJs className='w-8 h-8 md:w-14 md:h-14' />
        <span className='font-bold'>Node.js</span>
      </div>

      <div className="skillCard hover:text-orange-700">
        <FaGitAlt className='w-8 h-8 md:w-14 md:h-14' />
        <span className='font-bold'>Git & Github</span>
      </div>         
    </div>
  )
}