import React from 'react'
import image from '@/assets/group-students-doing-project.jpg'
import Image from 'next/image'

const OuterBanner = () => {
  return (
    <div>
      <div>
        <Image src={image} alt='sss' width={1450} height={1000}/>
      </div>
    </div>
  )
}

export default OuterBanner
