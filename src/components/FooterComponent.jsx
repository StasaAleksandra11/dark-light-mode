import React from 'react'
import logo from '../assets/logo.png'
import Imoodev from '../assets/Imoodev.png'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";


function FooterComponent({activeDark}) {
  return ( 
    <div>


<div className='container mx-auto mt-[100px] flex lg:flex-row flex-col lg:items-start items-center justify-around'> 
      
      {/* contact */}
        <div className='flex flex-col lg:items-start items-center justify-center mt-[8px] '>  
         {activeDark  ?  <img src={Imoodev} alt='logo' className='mb-[10px]'/> : <img src={logo} alt='logo' className='mb-[10px]' />} 
        
           <div className='flex items-center justify-center p-[10px]'> 
            {activeDark ? <CiLocationOn size={24} color='white'/> : <CiLocationOn size={24}/>}    
             <p className='ml-[5px] text-gray-600 dark:text-gray-100'>Sukabumi Utara, Indonesia</p>
           </div>
           <div className='flex items-center justify-center p-[10px]'>
            {activeDark ?  <MdOutlineMail size={24} color='white' /> :  <MdOutlineMail size={24} />}
             <p className='ml-[5px] text-gray-600 dark:text-gray-100'>elmous@yahoo.co.id</p>
           </div>
           <div className='flex items-center justify-center p-[10px]'>
             {activeDark ? <FaPhoneAlt size={24} color='white'/> : <FaPhoneAlt size={24}/>}
             <p className='ml-[5px] text-gray-600 dark:text-gray-100'>022 4567 8976</p>
           </div>

        </div>

     {/*our Feature */}
     <div className='flex flex-col items-start justify-center lg:mt-0 mt-[30px] '>
         <h3 className='font-semibold text-[20px] dark:text-white'>Our Feature</h3>
         <p className='text-gray-400 p-[5px]'>Paying Off Debt</p>
         <p className='text-gray-400 p-[5px]'>Planning Work</p>
         <p className='text-gray-400 p-[5px]'>Our Promise</p>
         <p className='text-gray-400 p-[5px]'>Employee Benefits</p>
     </div>

     {/* service */}
     <div className='flex flex-col items-start justify-center lg:mt-0 mt-[30px]'>
         <h3 className='font-semibold text-[20px] dark:text-white'>Our Service</h3>
         <p className='text-gray-400 p-[5px]'>Digital Service</p>
         <p className='text-gray-400 p-[5px]'>Marketing Service</p>
     </div>

     {/* e-mail */}
     <div className='flex flex-col lg:items-start items-center justify-center lg:mt-0 mt-[30px]'>
         <h3 className='font-semibold text-[20px] dark:text-white'>Join our email</h3>
         <p className='text-gray-400 p-[5px]'>Enter your email address for joined our agency</p>
         <div className='flex items-center justify-center mt-[10px]'>
             <input  className='border border-lightGray px-[15px] py-[5px] mr-[5px] outline-none dark:placeholder:text-mainBlue dark:mr-[20px]' type='text' placeholder='Email Address'/>
             <button>{activeDark ? <FaChevronCircleRight size={28} color='white'/> : <FaChevronCircleRight size={28}/>}</button>
         </div>
     </div>



   
 </div>

   <div className='bg-mainBlue dark:bg-white  h-[70px] mt-[20px]'>
     <h3 className='text-white dark:text-mainBlue font-semibold text-center p-[20px]'>Copyright @elmous 2021 All Right Reserved</h3>
   </div>
    </div>
   
  )
}

export default FooterComponent