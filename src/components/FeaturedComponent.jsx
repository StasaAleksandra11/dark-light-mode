import React from 'react'

/*card icons */
import Heart from '../assets/Heart.png'
import Edit from '../assets/Edit.png'
import Image from '../assets/Image.png'
import Category from '../assets/Category.png'

function FeaturedComponent() {
  
    let allCards = [{
        imageUrl : Edit,
        title : 'Web Development',
        description: 'Easy to modify from the provided template settings page without the need for complicated coding skills.',
        color: '#0D1337'
    },
    {
        imageUrl: Heart,
        title: 'UI Design',
        description: 'Equipped with basic SEO techniques such as H1 H2 H3 and breadcrumbs so that the website is liked by search engines like Google, Bing etc.',
        color: '#00B4D8'
    },
    {
        imageUrl: Image,
        title: 'Graphic Design',
        description: 'Elegant and professional design, your website will have more value & attractive in the eyes of your visitors or customers.',
        color: '#7400B8'
    },
    {
        imageUrl: Category,
        title: 'Invitations and gifts',
        description: 'Easy to use even for new people and comes with documentation to make it easier',
        color: '#FF4D6D'
    }]
  return (
   <div className='dark:bg-mainBlue bg-white'>
        <div className='container mx-auto mt-[40px]  '>
            {/*header */}
        <div className='flex lg:flex-row items-center flex-col '>
          <div className='lg:w-[50%] w-[80%]'>
             <h3 className='text-[#FF6F29] text-[24px]'>What Does Imoodev Do?</h3>
             <h2 className='dark:text-white text-mainBlue lg:text-[42px]  text-[30px] font-semibold'>Analyzing Target Customers with the Right!</h2>
          </div>
          <p className='lg:w-[50%] w-[80%] dark:text-white text-mainBlue '>Do not miss this opportunity. With our experience, Whello will find something unique in your brand. Analyze and try to follow what your audience really likes and is looking for, so that your customers will be more loyal to you.</p>

        </div>
        {/*our cards */}
        <div className='grid lg:grid-cols-2 mt-[40px] gap-[20px] lg:mx-0 mx-[20px]'>
        {allCards.map((card, index)=> {
           return <div key={index} className='border border-lightGray rounded-[10px] p-[20px] hover:dark:bg-white hover:dark:text-mainBlue hover:dark:font-semibold dark:text-white  text-mainBlue hover:bg-mainBlue hover:text-white hover:font-semibold transition-all duration-500 cursor-pointer'>
                <img src={card.imageUrl} className='p-[5px] rounded-full' style={{backgroundColor: card.color}}/>
                <h3 className='mt-[30px] text-[24px]'>{card.title}</h3>
                <p className='mt-[20px]'>{card.description}</p> 
            </div>
        })}
        </div>

    </div>
   </div>
  )
}

export default FeaturedComponent