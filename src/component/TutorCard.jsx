import Image from 'next/image'
import React from 'react'
import { BiBook } from 'react-icons/bi'
import { FaUsers } from 'react-icons/fa'
import { TbExternalLink } from 'react-icons/tb'

const TutorCard = ({ item }) => {
  return (
    <div className='border border-gray-100 shadow-sm rounded-md overflow-hidden cursor-pointer group bg-white'>

      {/* IMAGE */}
      <div className='relative w-full h-52 overflow-hidden bg-amber-200'>
        <Image
          src={item.photo}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className='object-cover group-hover:scale-105 transition-all duration-300'
        />
      </div>

      {/* CONTENT */}
      <div className='pt-4 px-4 '>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-semibold'>
            {item.name}
          </h1>

          <span className='group-hover:text-blue-500 transition'>
            <TbExternalLink />
          </span>
        </div>

        <p className='text-blue-500 text-sm'>
          Instructor
        </p>

        <div className='text-gray-500 text-sm grid grid-cols-2 py-4'>
          <h1 className='flex items-center gap-1 border-r border-gray-300 justify-start'>
            <BiBook />
            {item.subject}
          </h1>

          <h1 className='flex items-center gap-1 justify-end'>
            <FaUsers />
            Students 60+
          </h1>
        </div>
      </div>
    </div>
  )
}

export default TutorCard