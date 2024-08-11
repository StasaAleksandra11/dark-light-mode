import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

function SatisfactionComponent() {

   let cards = [{
    number: '01',
    title: 'expand your business to the online realm',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat '
   },
   {
    number: '02',
    title: 'expand your business to the online realm',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat '
   },
   {
    number: '03',
    title: 'enjoy the results of selling online',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat '
   }]

  return (
    <div className='dark:bg-white bg-mainBlue mt-[50px] flex flex-col items-center justify-center'>
        <div>
        <h2 className='dark:text-lightBlue text-white lg:text-[40px] text-[25px] lg:mt-[30px] text-center font-semibold'>We always prioritize customer satisfaction</h2>
        </div>
        
        {/*cards */}
        <div className='flex lg:flex-row flex-col p-[20px]'>
          {cards.map((item, index) => {
            return <div key={index} className=' bg-white border border-lightGray p-[20px] flex flex-col mx-[30px] mt-[10px] text-mainBlue'>
                <h2 className='font-semibold text-[40px] text-mainBlue'>{item.number}</h2>
                <h3 className='font-bold text-[20px]'>{item.title}</h3>
                <p className='text-lightGray'>{item.text}</p>
                <div className='flex items-center justify-center p-[5px]'>
                <Link to='/features' className='p-[5px] border-b-2 border-mainBlue font-bold '>Learnmore  </Link>
                <FaArrowRightLong/>
                </div>
            </div>
          })}
        </div>
    </div>
  )
}

export default SatisfactionComponent