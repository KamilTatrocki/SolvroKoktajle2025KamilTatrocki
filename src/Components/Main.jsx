import React from 'react'
import Slider from 'react-slick'
import { useState } from 'react';
import Modal from './Modal';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = ({CocktailData}) => {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px]
      bg-[var(--color3)] flex justify-center items-center duration-200'>

      <div className='container pb-8 sm:pb-0 z-10 relative'>
        <Slider {...settings}>
          {CocktailData.map(data => (
            <div key={data.id}>
              <div className='grid grid-cols-1 sm:grid-cols-2'>
               
                {/* image */}
                <div className='order-1 sm:order-2 flex justify-center'>
                  <div 
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className='relative z-10'>
                    <div className='bg-gradient-to-bl from-[var(--color5)] to-[var(--color3)] rounded-[20px]'>
                       <img
                         src={data.imageUrl}
                       alt={data.name}
                      className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px]
                                sm:scale-100 object-cover mx-auto
                                rounded-[20px] border-[15px] border-yellow-50/0'
                     />
                    </div>
                  </div>
                </div>

              
                <div className='relative flex flex-col justify-center gap-4 pt-12 sm:pt-0
                                text-center order-2 sm:order-2 max-w-full'>
                  
                  
                  <div className='h-4/5 w-full bg-[var(--color2)]
                      absolute blur-xl rounded-full  z-0 ' />

                  <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true" className="text-black text-5xl sm:text-6xl lg:text-7xl font-bold relative z-10">
                    {data.name}
                  </h1>
                      <p 
                   data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="text-black text-sm relative z-10">
                    {data.description}
                  </p>
                  <div data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300">
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Main
