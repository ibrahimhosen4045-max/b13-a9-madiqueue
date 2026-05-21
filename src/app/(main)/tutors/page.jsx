import OuterBanner from '@/component/sheardComponent/OuterBanner'
import TutorCard from '@/component/TutorCard'
import React from 'react'

const Tutors = async () => {
  const res = await fetch("http://localhost:5000/destination")
  const tutorData = await res.json()
  console.log(tutorData)
  return (
    <div>
      <OuterBanner></OuterBanner>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-11/12 mx-auto max-w-7xl'>
        {
          tutorData.map(item => <TutorCard item = {item} key={item._id}>
            
          </TutorCard>)
        }
      </div>
    </div>
  )
}

export default Tutors
