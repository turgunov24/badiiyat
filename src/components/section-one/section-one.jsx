import React from 'react';
import Navbar from '../navbar/navbar';
import SectionOneSwiper from './section-one-assets/section-one-swiper/swiper';


function SectionOne() {
    return ( 
        <div className='w-full h-screen flex flex-col items-center '>
            <Navbar />
           <div className='mt-10  w-11/12'>
            <SectionOneSwiper />
           </div>
        </div>
     );
}

export default SectionOne;