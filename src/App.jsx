import { FaMoon, FaGithub, FaLinkedin, FaAt, FaWhatsapp, FaCode, FaLaptopCode, FaSun} from 'react-icons/fa'


import { useState } from 'react'

import imgPerfil from "./assets/perfil.jpg"
import web1 from "./assets/bolao.png"
import web2 from "./assets/eSports.png"
import web3 from "./assets/DoctorCare.png"
import web4 from "./assets/Habits.png"
import web5 from './assets/rvbPreview.jpeg'
import web6 from './assets/constChallenge.png'

import './styles/global.css'
import { SkillArea } from './components/SkillArea';

function App() {
  const [darkMode, setDarkMode] = useState(false)
 
  return (
    <div className={darkMode ? "dark w-screen" : "w-screen"}>
      <main className='bg-gray-300  font-roboto text-black  dark:bg-gray-800 dark:text-white transition-colors duration-200 ease-linear'>

        <nav className='flex justify-between items-center shadow-lg py-6 px-10 md:px-20 lg:px-40 bg-gray-400 dark:bg-gray-900 z-20'>
          <strong className='text-xl lg:text-3xl'>LuanContreiras</strong>
            {darkMode ? <FaMoon onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl '/> : <FaSun onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl '/>}
        </nav>
        
        <section className='min-h-fit py-10 px-10 md:px-20 lg:px-40 '> 
          <div className='text-center p-6'>
            <img src={imgPerfil} alt="" className='w-80 mx-auto rounded-pf'/>
            <h1 className='text-3xl py-2 font-bold md:text-5xl'>Luan Contreiras</h1>
            <span className='text-xl py-2 md:text-3xl'>Front-end Developer</span>
            <p className='text-sm py-5 leading-6 opacity-80 md:text-base max-w-lg mx-auto'>
              Formado em Análise e Desenvolvimento de Sistemas, venho trabalhando como freelancer há 1 ano, desenvolvendo minhas habilidades com objetivo de me tornar Senior no que faço.
            </p>
          </div>

          <div className='flex max-w-lg mx-auto'>
            <BallIcon className="logo" link="https://github.com/LuanContreiras" text="github.com/LuanContreiras" icon={<FaGithub size="24"/>}/>
            <BallIcon  link="https://www.linkedin.com/in/luan-contreiras-9b9b67183/" text="in/luan-contreiras-9b9b67183/" icon={<FaLinkedin size="24"/>}/>
            <BallIcon className="logo" text="luan.contreiras@hotmail.com" icon={<FaAt size="24"/>}/>
            <BallIcon className="logo"link="wa.me/+5571992505190" text="Whatsapp" icon={<FaWhatsapp size="24"/>}/>
          </div>
        </section>

        <section className='text-center py-14 px-10 md:px-20 lg:px-40'>

          <h1 className='text-2xl pt-2 pb-10 font-bold'>Habilidades</h1>
          
          <SkillArea />
          
        </section>

        <section  className='text-center py-14 px-10 md:px-20 lg:px-40 '>
          <h1 className='text-2xl pt-2 font-bold'>Experiência Profissional</h1>

          <div className='lg:flex lg:justify-center gap-10'>
            <div className='bg-gray-400 shadow-xl p-10 my-10 rounded-xl lg:max-w-xs dark:bg-gray-900'>
              <FaCode className='mx-auto text-4xl'/>
              <h3 className='py-2 text-lg font-bold'>Front-end Developer</h3>
              <span className='py-2 font-bold'>mentalout</span>
              <p className='py-2 text-sm'>
                Auxiliar de desenvolvimento web, trabalhei utilizando Wordpress com Elementor. Era responsável pela criação e estilização de páginas usando HTML e CSS, e configuração de plugins.
              </p>
            </div>

            <div className='bg-gray-400 shadow-xl p-10 my-10 rounded-xl lg:max-w-xs dark:bg-gray-900'>
              <FaLaptopCode className='mx-auto text-4xl'/>
              <h3 className='py-2 text-lg font-bold'>Técnico de infomática</h3>
              <span className='py-2 font-bold'>JLMC e advogados</span>
              <p className='py-2 text-sm'>
                Responsável pela montagem, manutenção de computadores, correção de erros, instalação e configuração de redes e sofwares.
              </p>
            </div>
          </div>

        </section>

        <section className='text-center pb-10 px-10 md:px-20 lg:px-40'>
          <h1 className='text-2xl pt-2 pb-10 font-bold'>Portfolio</h1>
          <div className='flex flex-col gap-10 lg:flex-row lg:flex-wrap'>

              <div className='basis-1/3 flex-1'>
                <img src={web1} className="rounded-lg  w-full h-full shadow-xl"/>
              </div>
              <div className='basis-1/3 flex-1'>
                <img src={web2} className="rounded-lg object-cover w-full h-full shadow-xl"/>
              </div>
              <div className='basis-1/3 flex-1'>
                <img src={web3} className="rounded-lg object-cover w-full h-full shadow-xl"/>
              </div>
              <div className='basis-1/3 flex-1'>
                <img src={web4} className="rounded-lg w-full h-full shadow-xl"/>
              </div>
              <div className='basis-1/3 flex-1'>
                <img src={web5} className="rounded-lg w-full h-full shadow-xl"/>
              </div>
              <div className='basis-1/3 flex-1'>
                <img src={web6} className="rounded-lg  w-full h-full shadow-xl"/>
              </div>
          </div>
        </section>
      </main>
    </div>
  )
}


export default App

const BallIcon = ({ icon, text, link}) => (
  <div className="ball-icon group">
    <a href={link} target='_blank'>{icon}</a>

    <span className='ball-icon-text group-hover:scale-100'>
      {text}
    </span>
  </div>
);