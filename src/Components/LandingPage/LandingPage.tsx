import React from 'react';
import Link from 'next/link';

function LandingPage() {
  return (
    <div>
      <section>
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/fit1.png)' }}>
          <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-6 bg-transparent">
            <div className="text-white text-2xl font-bold">DentAll</div>
            <ul className="flex space-x-4 text-white">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </nav>
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-5xl text-white font-bold mb-4">Bienvenidos a DentAll</h1>
            <p className="text-lg text-white mb-8">Tu salud dental en las mejores manos</p>
            <Link href="#">
              <button className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg">Contáctanos</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center md:flex-row md:items-start  bg-white">
        <div className="w-full md:w-1/2 md:relative md:-top-36">
          <img src="/fit2.png" alt="Second Section Image" className="w-full h-auto md:max-w-none" />
        </div>
        <div className="w-full md:w-1/2 md:ml-auto p-6">
          <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
          <p className="text-lg mb-4">En DentAll, nuestra misión es proporcionar cuidados dentales de alta calidad a todos nuestros pacientes.</p>
          <p className="text-lg">Nos esforzamos por crear un ambiente cómodo y amigable, y nos dedicamos a la excelencia en cada aspecto de nuestro trabajo.</p>
        </div>
      </section>

      <section className="relative bg-cover bg-center " style={{ backgroundImage: 'url(/fit2.png)' }}>
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-4xl text-white font-bold">Nuestros Servicios</h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
          {Array(4).fill(0).map((_, index) => (
            <div key={index} className="flex items-center border-4 border-red-600 bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="w-1/3">
                <img src={`/service${index + 1}.png`} alt={`Service ${index + 1}`} className="w-full h-full object-cover" />
              </div>
              <div className="w-2/3 p-4">
                <h3 className="text-2xl font-bold mb-2">Servicio {index + 1}</h3>
                <p className="text-lg">Descripción del servicio {index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
