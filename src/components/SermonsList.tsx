import React from 'react'
import SermonCard from './SermonCard'

const SermonsList = () => {
  return (
    <section className='w-full flex flex-col md:flex-row flex-wrap items-center justify-center gap-5'>
        {
            [0,1,2,3,4,5,6,7,8].map((_, idx) => (
                <>
                <SermonCard key={idx} />
                </>
            ))
        }
    </section>
  )
}

export default SermonsList