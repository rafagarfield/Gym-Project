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
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Programas</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Nosotros</a></li>
          </ul>
        </nav>  


    </div>
  )
}

export default NavBar
