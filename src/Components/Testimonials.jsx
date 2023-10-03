import React, { useState } from 'react'
import TestimonialsBox from './TestimonialsBox';

const Testimonials = () => {
    const [testData, setTestData] = useState([
    {
        id: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
        image: "profile-1.jpg",
        position: "Founder & CEO, Huddle",
        name: "Ahmed",
    },
    {
        id: 2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
        image: "profile-2.jpg",
        position: "Founder & CEO, Huddle",
        name: "Mohamed",
    },
    {
        id: 3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
        image: "profile-3.jpg",
        position: "Founder & CEO, Huddle",
        name: "Eman",
    },
  ]);
  return (
    <section className='pb-[150px]'>
        <div className='container relative'>
            <div className='absolute top-[-35px] left-[20px]'>
                <img src='/src/assets/images/bg-quotes.png' alt='quote'/>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10'>
            {
                testData.map((item)=>(
                    <TestimonialsBox key={item.id} desc={item.desc} image={item.image} name={item.name} position={item.position} />
                ))
            }
            </div>
            
        </div>
    </section>
  )
}

export default Testimonials