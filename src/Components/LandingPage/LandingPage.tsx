import React from 'react';
import Link from 'next/link';
import NavBar from '../NavBar/NavBar';
import Image from 'next/image';
import Gradient from '../Gradient/Gradient';
import GradientRed from '../GradientRed/GradientRed';
import styles from "./LandingPage.module.css"
function LandingPage() {
  return (
   <div>
      <NavBar />
      <section className='flex flex-row mx-20 gap-40 relative justify-center '>
        <div className=" absolute top-[106px] left-[-212px]">
          <Gradient />
        </div>
        
        <div className='flex flex-col justify-center gap-8 w-[50%]'>
          <p className='text-xl font-bold text-[#F7AC59]'>EL MEJOR GIMNASIO DE AYACUCHO</p>
          <p className="font-poppins text-[64px] font-extrabold text-white"><span className={styles.training} >ENTRENA</span> HOY</p>
          <p className='font-poppins text-[64px] font-extrabold text-white'>DISFRUTA MAÑANA</p>
          <p className='text-sm text-white'>Descubre la mejor versión de ti mismo con nosotros. Ofrecemos un entorno motivador y equipos de última generación para que cada entrenamiento sea efectivo y agradable. 
            ¡Tu esfuerzo de hoy será tu orgullo de mañana!</p>
          <button className='bg-[#F7AC59] px-8 py-2 rounded w-1/4 text-white font-medium'>Empezar</button>
        </div>

        <div className='flex justify-center items-center w-[30%]'>
          <Image src='/gym1.svg' alt='Landing Page' width={600} height={600} />
        </div>
        <div className=" absolute top-[186px] right-[146px]">
          <GradientRed />
        </div>
      </section>

      <section className='mx-40 my-20 relative'>
        <div className='flex flex-row items-center justify-between '>
          <h2 className='text-white text-2xl font-semibold'>EXPLORA NUESTRO PROGRAMA</h2>
          <div className='flex flex-row gap-9'>
            <Image src='/ArrowCircleLeft.svg' alt='ArrowCircleLeft' width={50} height={50} />
            <Image src='/ArrowCircleRight.svg' alt='ArrowCircleRight' width={50} height={50} />
          </div>
          <div className=" absolute top-[-151px] right-[-90px]">
            <Gradient/>
          </div>
          
        </div>
        


      </section>
  
   </div>
  );
}

export default LandingPage;
