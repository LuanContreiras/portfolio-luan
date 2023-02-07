import { useState } from 'react'
import './styles/global.css'

import { FaMoon, FaSun} from 'react-icons/fa'

import { Home } from './components/Home'
import { SkillArea } from './components/SkillArea';
import { Carousel } from './components/Carousel';
import { Experience } from './components/Experience';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className='bg-gray-300 font-roboto text-black dark:bg-gray-800 dark:text-white transition-colors duration-200 ease-linear'>

        <nav className='flex justify-between items-center shadow-lg py-6 px-10 md:px-20 lg:px-40 bg-gray-400 dark:bg-gray-900 z-20'>
          <strong className='text-xl lg:text-3xl'>LuanContreiras</strong>
            {darkMode ? <FaMoon onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl '/> : <FaSun onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl '/>}
        </nav>
        
        <section className='min-h-fit py-10 px-10 md:px-20 lg:px-40 '> 
          <Home />
        </section>


        <section className='mi-h-fit py-10 text-center px-10 md:px-20 lg:px-40'>
          <h1 className='text-2xl pt-2 pb-10 font-bold'>Habilidades</h1>   
          <SkillArea />
        </section>

   

        <section  className='min-h-fit py-10 text-center px-10 md:px-20 lg:px-40 '>
          <h1 className='text-2xl pt-2 font-bold'>Experiência Profissional</h1>
          <Experience />
        </section>

        <section className='min-h-fit text-center pt-10 pb-5 px-10 md:px-20 lg:px-40 flex flex-col items-center'>
          <h1 className='text-2xl pt-2 pb-10 font-bold'>Portfolio</h1>    
          <Carousel />  
           
        </section>
      </main>
    </div>
  )
}


export default App

