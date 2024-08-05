import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <div className='flex flex-row mx-20 my-10 justify-between text-white'>
        <div>
            <Image src="/AstrosLogo.svg" alt="Logo" width={300} height={300} />
        </div>
        <nav className='flex justify-center items-center text-base font-medium'>
          <ul className='flex flex-row gap-20 justify-center items-center'>
            <li className='relative'>
              <a href="#" className='relative text-white hover:text-yellow-500 transition-colors duration-300 after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:scale-x-100 after:scale-x-0'>
                Inicio
              </a>
            </li>
            <li className='relative'>
              <a href="#" className='relative text-white hover:text-yellow-500 transition-colors duration-300 after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:scale-x-100 after:scale-x-0'>
                Programas
              </a>
            </li>
            <li className='relative'>
              <a href="#" className='relative text-white hover:text-yellow-500 transition-colors duration-300 after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:scale-x-100 after:scale-x-0'>
                Servicios
              </a>
            </li>
            <li className='relative'>
              <a href="#" className='relative text-white hover:text-yellow-500 transition-colors duration-300 after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:scale-x-100 after:scale-x-0'>
                Nosotros
              </a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar

