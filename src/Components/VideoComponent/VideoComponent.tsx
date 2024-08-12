import Image from 'next/image'

export default function VideoComponent() {
  return (
    <div className='flex justify-center items-center'>
      <video
        controls
        preload="metadata"
        poster="https://res.cloudinary.com/df5rqpdzh/image/upload/v1723394853/Rectangle_9567_f8qji6.svg"
        width="50%"
        height="auto"
      >
        <source src="https://res.cloudinary.com/df5rqpdzh/video/upload/v1723394648/ASTROSGYM_VIDEOCLIP_Hecho_con_Clipchamp_adpwrh.mp4" />

        Your browser does not support the video tag.
      </video>
    </div>
  );
}
