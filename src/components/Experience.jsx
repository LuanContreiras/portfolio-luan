import { FaCode, FaLaptopCode } from 'react-icons/fa'

export function Experience(){
  return(
    <div className='sm:flex lg:justify-center gap-10'>
      <div className='bg-gray-400 shadow-xl p-10 my-10 rounded-xl sm:max-w-xs sm:min-w-[250px] dark:bg-gray-900'>
        <FaCode className='mx-auto text-4xl'/>
        <h3 className='py-2 text-lg font-bold'>Front-end Developer</h3>
        <span className='py-2 font-bold'>mentalout</span>
        <p className='py-2 text-sm'>
          Auxiliar de desenvolvimento web, trabalhei utilizando Wordpress com Elementor. Era responsável pela criação e estilização de páginas usando HTML e CSS, e configuração de plugins.
        </p>
      </div>

      <div className='bg-gray-400 shadow-xl p-10 my-10 rounded-xl sm:max-w-xs sm:min-w-[250px] dark:bg-gray-900'>
        <FaLaptopCode className='mx-auto text-4xl'/>
        <h3 className='py-2 text-lg font-bold'>Técnico de infomática</h3>
        <span className='py-2 font-bold'>JLMC e advogados</span>
        <p className='py-2 text-sm'>
          Responsável pela montagem, manutenção de computadores, correção de erros, instalação e configuração de redes e sofwares.
        </p>
      </div>
    </div>
  )
}