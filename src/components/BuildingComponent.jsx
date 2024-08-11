import React from 'react'
import Rectanglee from '../assets/Rectanglee.png'
function BuildingComponent() {
  return (
   <div className='dark:bg-mainBlue bg-white'>
        <div className='container mx-auto mt-[40px] flex lg:flex-row flex-col'>
        {/*image */}
        <div className='lg:w-[50%] w-[80%] lg:ml-0 ml-[43px]'>
            <img src={Rectanglee} alt='' className=''/>

        </div>
        {/*text */}
        <div className='lg:w-[50%] items-center ml-[20px] mt-[30px]  '>
            <h2 className='dark:text-white text-mainBlue lg:text-[42px] text-[25px] font-semibold'>expand your business by building a website online</h2>
            <p className=' dark:text-white text-mainBlue p-[10px] mt-[20px]'>Do not miss this opportunity. With our experience, Whello will find something unique in your brand. Analyze and try to follow what your audience really likes and is looking for, so that your customers will be more loyal to you.</p>
            <button  className='dark:bg-white dark:text-mainBlue border-none cursor-pointer bg-mainBlue text-white lg:px-[87px] lg:py-[16px] md:px-[65px] md:py-[12px] px-[50px] py-[10px] font-bold mt-[20px] '>Consult now</button>
        </div>

    </div>
   </div>
  )
}

export default BuildingComponent