import {  FaGithub, FaLinkedin, FaAt, FaWhatsapp } from 'react-icons/fa'
import imgPerfil from "../assets/perfil.jpg"

export function Home(){
  return(
    <>
      <div className='text-center p-6'>
            <img src={imgPerfil} className='w-80 mx-auto rounded-pf'/>
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
    </>
    
  )
}

const BallIcon = ({ icon, text, link}) => (
  <div className="ball-icon group">
    <a href={link} target='_blank'>{icon}</a>

    <span className='ball-icon-text group-hover:scale-100'>
      {text}
    </span>
  </div>
);