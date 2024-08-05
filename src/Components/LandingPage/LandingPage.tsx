import React from 'react';
import Link from 'next/link';
import NavBar from '../NavBar/NavBar';
import Image from 'next/image';
import Gradient from '../Gradient/Gradient';
function LandingPage() {
  return (
   <div>
      <NavBar />
      <section className='flex flex-row mx-20 gap-20 relative '>
        <div className=" absolute top-[106px] left-[-212px]">
          <Gradient />
        </div>
        
        <div className='flex flex-col justify-center gap-8 w-[50%]'>
          <p className='text-xl font-bold text-[#F7AC59]'>EL MEJOR GIMNASIO DE AYACUCHO</p>
          <p className="font-poppins text-[64px] font-extrabold text-white"><span className="font-poppins text-[64px] font-extrabold" >ENTRENA</span> HOY</p>
          <p className='font-poppins text-[64px] font-extrabold text-white'>DISFRUTA MAÑANA</p>
          <p className='text-sm text-white'>Descubre la mejor versión de ti mismo con nosotros. Ofrecemos un entorno motivador y equipos de última generación para que cada entrenamiento sea efectivo y agradable. 
            ¡Tu esfuerzo de hoy será tu orgullo de mañana!</p>
          <button className='bg-[#F7AC59] px-8 py-2 rounded w-1/4'>Empezar</button>
        </div>

        <div className='flex justify-center items-center w-[30%]'>
          <Image src='/gym1.svg' alt='Landing Page' width={600} height={600} />
        </div>
        
      </section>
  
   </div>
  );
}

export default LandingPage;
