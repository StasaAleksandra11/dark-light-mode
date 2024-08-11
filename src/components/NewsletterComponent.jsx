import React from 'react'

function NewsletterComponent() {
  return (
    <div className='dark:bg-mainBlue bg-white' >
      <div className='container mx-auto flex flex-col items-center dark:bg-white bg-pink-200 lg:h-[200px] h-[200px] lg:w-[900px] w-[400px] mt-[30px] mb-[50px] dark:rounded-none rounded-3xl'>
            <h3 className='text-mainBlue lg:text-[35px] text-[20px] pt-[30px] font-semibold'>Subs Our Newsletter for Daily Update</h3>
            <div className='flex pt-[30px]'>
              <input type='text' placeholder='Your email address here' className='lg:px-[25px] px-[15px] rounded-l-2xl outline-none font-semibold dark:border dark:border-mainBlue dark:bg-mainBlue dark:text-white dark:rounded-none'/>
              <button className='px-[20px] py-[15px] border bg-mainBlue text-white  dark: border-lightGray rounded-r-2xl dark:rounded-none dark:bg-white dark:text-mainBlue dark:font-semibold'>Subscribe</button>
            </div>
      </div>

    </div>
  )
}

export default NewsletterComponent