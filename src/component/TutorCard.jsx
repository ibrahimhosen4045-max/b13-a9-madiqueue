import Image from 'next/image'
import React from 'react'

const TutorCard = ({item}) => {
  return (
    <div>
      <div>
        <Image src={item.photo} width={400} height={500} alt='sss'/>
      </div>
      <div>
        <h1>{item.name}</h1>
        <p>Instructor</p>
        <div>
            <h1>{item.}</h1>
        </div>
      </div>
    </div>
  )
}

export default TutorCard
