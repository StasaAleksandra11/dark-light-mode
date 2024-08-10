import React from 'react'
import Rectangle from '../assets/Rectangle.png'

function ConsultComponent() {
  return (
    <div className='container mx-auto items-center mt-[40px] flex lg:flex-row flex-col'>
        {/* text */}
        <div className='lg:w-[50%] p-[20px] items-center mx-auto '>
          <h3 className='text-[#FF6F29] text-[24px] p-[10px]'>Who is Imoodev?</h3>
          <h2 className='dark:text-white text-mainBlue text-[42px] font-semibold'>we are a service engaged in digital marketing</h2>
          <p className=' dark:text-white text-mainBlue p-[10px] '>Do not miss this opportunity. With our experience, Whello will find something unique in your brand. Analyze and try to follow what your audience really likes and is looking for, so that your customers will be more loyal to you.</p>
          <button className='dark:bg-white dark:text-mainBlue border-none cursor-pointer bg-mainBlue text-white lg:px-[87px] lg:py-[16px] md:px-[65px] md:py-[12px] px-[50px] py-[10px] font-bold mt-[15px] '>Consult now</button>
            
        </div>
        {/*image */}
        <div className='lg:w-[50%] w-[80%]'>
          <img src={Rectangle} alt='' />
        </div>

       

    </div>
  )
}

export default ConsultComponent