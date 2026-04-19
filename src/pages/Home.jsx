import React from 'react'

export default function Home() {
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center bg-gray-50 px-5 text-center'>
      <h1 className='text-5xl md:text-7xl font-extrabold text-gray-800 mb-4'>Hello I am <span className='text-blue-600'>Rahmatullah</span></h1>
      <p className='text-lg md:text-2xl text-gray-600 max-w-2xl mb-8'>I am a Full-Stack Web Developer. I build modern solutions for your business using React and CSS.</p>
      <div className='flex gap-4'>
        <button className='bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-md border-none'>See my works</button>
        <button className='border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition'>Contact Us</button>
      </div>
    </div>
  )
}
