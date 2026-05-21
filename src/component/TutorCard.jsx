import Image from 'next/image'
import React from 'react'
import { BiBook } from 'react-icons/bi'
import { FaUsers } from 'react-icons/fa'

const TutorCard = ({item}) => {
  return (
    <div className=' border-gray-50 shadow-sm rounded-md overflow-hidden cursor-pointer'>
      <div className=' overflow-hidden w-75 bg-amber-200 h-50 group'>
        <Image src={item.photo} width={400} height={500} alt='sss' className='w-100 h-50 group-hover:scale-105 transition-all duration-300'/>
      </div>
      <div className='pt-4 px-4'>
        <h1 className='text-xl font-semibold  '>{item.name}</h1>
        <p className='text-blue-500 text-sm'>Instructor</p>
        <div className='text-gray-500 text-sm grid grid-cols-2 py-4'>
            <h1 className='flex items-center gap-1 border-r border-gray-500 justify-start'><BiBook /> {item.subject}</h1>
            <h1 className='flex items-center gap-1 justify-end'><FaUsers /> Students 60+</h1>
        </div>
      </div>
    </div>
  )
}

export default TutorCard
