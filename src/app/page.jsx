'use client';
import React from 'react';

const Home = () => {
  return (
    <div className='flex flex-col items-center gap-0 m-0'>
      
      <div className='relative w-full h-[92vh]'>
      <div className='relative w-full h-full'>
        <div className='absolute inset-0 w-full h-full'>
          <video autoPlay muted loop playsInline src="Homevideo.mp4" id='backgroundHome' className='absolute inset-0 object-cover w-full h-full'
          ></video>
        </div>
      </div>
      </div>

<div className='absolute top-[70vh] left-[10vh]' id='homeContent'>
<h1 className='text-3xl italic font-bold text-white'>Gearshift Garages</h1>
</div>

    </div>
  )
}

export default Home;