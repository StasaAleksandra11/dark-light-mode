import React from 'react'
import figma from '../assets/figma.png'
import kids from '../assets/kids.png'
import koto from '../assets/koto.png'
function NewsComponent() {
  
    let cards = [
        {
            imageUrl : figma,
            date: 'September 9, 2020',
            admin: 'Posted By Admin',
            title: 'Introducing Uncode 2.3.0 and the WooCommerce Builder',
            text: 'We are pleased to bring you Uncode 2.3.0 the latest and greatest version of our pixel-perfect, creative, multipurpose WordPress . . . .'
        },
        {
            imageUrl: kids,
            date: 'Desember 03, 2020',
            admin: 'Posted By Admin',
            title: 'Introducing Uncode 2.3.0 and the WooCommerce Builder',
            text: 'We are pleased to bring you Uncode 2.3.0 the latest and greatest version of our pixel-perfect, creative, multipurpose WordPress . . . .'
        },
        { 
            imageUrl: koto,
            date: 'january 01, 2021',
            admin: 'Posted By Admin',
            title: 'Introducing Uncode 2.3.0 and the WooCommerce Builder',
            text : 'We are pleased to bring you Uncode 2.3.0 the latest and greatest version of our pixel-perfect, creative, multipurpose WordPress . . . .'

        }]

  return (
    <div className='ontainer mx-auto mt-[30px] dark:bg-mainBlue bg-white'>
        <div className=''>
            <h2 className='dark:text-white text-mainBlue lg:text-[42px] text-center lg:text-left text-[25px] font-semibold ml-[30px]' >Latest news from Imoodev</h2>
        </div>
        <div className='flex lg:flex-row flex-col '>
            {cards.map((card, index) => {
                return <div key={index} className='  mx-[20px] my-[30px] border border-lightGray dark:border-mainBlue dark:bg-white lg:p-[20px]'>
                    <img src={card.imageUrl} alt='' />
                    <div className='bg-white '>

                    <div className=' dark:text-lightGray flex items-center justify-start  px-[5px] '>
                      <p className='mr-[20px]'>{card.date}</p> 
                      <p>{card.admin}</p>
                    </div>
                    <h3 className='dark:text-mainBlue  text-[25px] font-semibold mt-[10px] px-[10px]'>{card.title}</h3>
                    <p className='text-lightGray py-[15px] px-[10px]'>{card.text}</p>
                </div>
                    </div>
            })}
        </div>
    </div>
  )
}

export default NewsComponent