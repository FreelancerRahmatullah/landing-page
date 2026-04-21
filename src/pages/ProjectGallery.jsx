import React from 'react';
import userList from '../assets/userList.png';
import shoppingCart from '../assets/shoppingCart.png'
import { Link } from 'react-router-dom';
const myWorks =[
  {
    title: 'E-commerce Shopping Cart',
    desc: 'Built with React Hook JavaScript and Tailwind CSS. Can add and delete as many products as you want',
    link: '/shop',
    image: shoppingCart
  },
  {
    title: 'User List (API Fetch)',
    desc: 'Fetching real users data using JSONPlaceholder API',
    link: '/users',
    image: userList
  },

];

export default function ProjectGallery(){
  return (
    <div className='py-20 bg-gray-50 px-10'>
      <h2 className='text-4xl font-bold text-center mb-12 text-gray-800'>My Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto'>
        {myWorks.map((work, index) => (
          <div key={index} className='group bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-300'>
            <img src={work.image} alt="" className='w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500' />
            <div className='p-8'>
                <h3 className='text-gray-600 mb-6'>{work.title}</h3>
            <Link to={work.link} className='inline-block bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition text-duration-none'>Watch live demo</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}