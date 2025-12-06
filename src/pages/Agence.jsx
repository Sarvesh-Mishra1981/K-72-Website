import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import React, { useRef } from 'react';
import image1 from "/Users/sarvesh/Documents/K-72 Website/src/assets/image.png"
import image2 from "/Users/sarvesh/Documents/K-72 Website/src/assets/image copy.png"
import image3 from "/Users/sarvesh/Documents/K-72 Website/src/assets/image copy 3.png"
import image4 from "/Users/sarvesh/Documents/K-72 Website/src/assets/image copy 4.png"
import image5 from "/Users/sarvesh/Documents/K-72 Website/src/assets/image copy 5.png"
import image6 from "/Users/sarvesh/Documents/K-72 Website/src/assets/image copy 6.png"
import image7 from "/Users/sarvesh/Documents/K-72 Website/src/assets/image copy 7.png"
import image8 from "/Users/sarvesh/Documents/K-72 Website/src/assets/image copy 8.png"
gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
  const imagedivref = useRef(null);
const imageRef=useRef(null);
  const imagearray=[
    image1,image2,image3,image4,image5,image6,image7,image8
  ]
  useGSAP(() => {
    ScrollTrigger.create({
        trigger: imagedivref.current,
        start: 'top 30%', 
        end: 'top -47%', 
        pin: true,
        pinSpacing: false, 
       onUpdate: (self) => {
            const index = Math.min(
                Math.floor(self.progress * imagearray.length), 
                imagearray.length - 1
            );
            if(imageRef.current) {
                imageRef.current.src = imagearray[index];
            }}
    });
  });

  return (
    <div>
      <div className='section1'>
        <div
          className=' absolute h-[17vw] w-[13vw] top-67 rounded-3xl overflow-hidden left-[31vw]'
          ref={imagedivref}
        >
          <img
            className='h-full w-full object-cover' ref={imageRef}
            src='https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7'
          />
        </div>
        <div>
          <div className='mt-[50vh] relative'>
            <h1 className='text-[35vh] text-center uppercase leading-60'>
              SEVEN7Y<br />TWO
            </h1>
          </div>
          <div className='pl-[40%] pt-10 gap-2 relative '>
            <p className='text-[6vh] leading-14'>
              We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner...
            </p>
          </div>
        </div>
      </div>

      <div className='section2 h-screen'></div>
    </div>
  );
};

export default Agence;