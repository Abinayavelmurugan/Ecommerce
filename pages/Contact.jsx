import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewLeterBox from '../components/NewLeterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'Contact'} text2={'Us'} />

      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>11/66 f1,sakthi <br/> Valparai main road,Pollachi,Coimbatore</p>
          <p>Tel: (425) 324-234234 <br/> Email: admin@forever.com </p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job opennings</p>
          <p className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</p>
        </div>
         
      </div>
      <NewLeterBox />
    </div>
  )
}

export default Contact
