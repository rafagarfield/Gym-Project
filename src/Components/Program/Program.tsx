import { services } from "@/helpers/services"
import Image from "next/image"


function Program() {
  return (
    
    <div className="grid grid-cols-3 gap-4">
        {services.map((service,index)=>{
            return (
                <div key={index} className="bg-[#1F2125] flex flex-col gap-3 p-4">
                    
                        <div className="flex flex-col gap-7">
                            <Image src={service.image} alt={service.description} width={50} height={50} />
                            <h2 className="text-lg text-white font-extrabold">{service.title}</h2>
                        </div>
                        
                        <p className="text-sm font-light text-[#FFFFFF]">{service.description}</p>
                    
                    
                </div>
            )
        })}
      
    </div>
  )
}

export default Program