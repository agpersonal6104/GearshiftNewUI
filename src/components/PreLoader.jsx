'use client';
import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Cars', 'Bikes', 'Customisation'];

const PreLoader = () => {

    const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000,
    );
    return () => clearTimeout(intervalId);
  }, []);
    
  return (
    <div className='h-[100vh] m-0 flex justify-center items-center flex-col'>

      <video autoPlay muted loop playsInline src="https://cdn.pixabay.com/video/2023/09/21/181537-866999852_large.mp4" id='backgroundClip'></video>

      <div className='absolute flex items-center justify-center lg:hidden left-1/2 top-[20%] right-1/2'>
        <h1 className='text-5xl italic font-bold text-center text-white'>Gearshift Garages</h1>
      </div>
       
      <div className='lg:h-[80%] lg:flex flex-col gap-2 justify-end items-center py-12 h-[70%] hidden '>
        
        <h1 className='text-5xl italic font-bold text-white'>Gearshift Garages</h1>
        <TextTransition springConfig={presets.wobbly} className='text-2xl italic text-white'>{TEXTS[index % TEXTS.length]}</TextTransition>
        
      </div>

      <div className='h-[5px] lg:flex justify-end items-center hidden'>
        <h2 className='text-xl italic text-center text-white self-bottom'>Your next Destination Starts Now..</h2>
      </div>

      <div className='absolute flex items-center justify-center lg:hidden top-[81%]'>
        <h2 className='text-xl italic text-center text-white'>Your next Destination Starts Now..</h2>
      </div>
      
      <div className='h-[15%] flex flex-col justify-center items-center'>
        
            <div className="progress-loader">
                <div className="progress" />
            </div>
        
      </div>

    </div>
  );
};

export default PreLoader;