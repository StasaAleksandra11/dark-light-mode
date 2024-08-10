import React from 'react'

function HeroComponent() {
  return (
    <div className='container mx-auto mt-[59px]'>
      <h2 className=' lg:text-[48px] md:text-[43px] text-[30px]  dark:text-white text-mainBlue text-center font-extrabold lg:w-[85%] mx-auto'>We are creative agency capable of creating outstanding designs and websites</h2>
      <p className='text-lightGray text-center mt-5'>with Immodev Reach more customers and grow your business potential online by building a website with us</p>
      <div className='flex justify-center gap-5 mt-10'>
         <button className='dark:bg-white dark:text-mainBlue border-none cursor-pointer bg-mainBlue text-white lg:px-[87px] lg:py-[16px] md:px-[65px] md:py-[12px] px-[50px] py-[10px]'>Consult now</button>
         <button className='dark:bg-mainBlue bg-white dark:border border dark:border-white border-mainBlue dark:text-white text-mainBlue lg:px-[87px] lg:py-[16px] md:px-[65px] md:py-[12px] px-[50px] py-[10px]'>About Us</button>
      </div>
    </div>
  )
}

export default HeroComponent