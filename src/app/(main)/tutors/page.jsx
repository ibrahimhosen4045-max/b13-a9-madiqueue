import TutorCard from '@/component/TutorCard'
import React from 'react'

const Tutors = async () => {
  const res = await fetch("http://localhost:5000/destination")
  const tutorData = await res.json()
  console.log(tutorData)
  return (
    <div>
      <h1 className=''>Our Tutors</h1>
      <div>
        {
          tutorData.map(item => <TutorCard item = {item} key={item._id}>
            
          </TutorCard>)
        }
      </div>
    </div>
  )
}

export default Tutors
