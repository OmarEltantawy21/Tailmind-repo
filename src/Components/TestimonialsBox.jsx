import React from 'react'

const TestimonialsBox = ({desc,name,image,position}) => {
  return (
    <div className=' text-white bg-[#21293c] p-[30px] rounded-md shadow-[8px_8px_1px_8px_#1c202c]'>
        <div className='text-sm font-normal tracking-[0.8px]'>
            <p>{desc}</p>
        </div>
        <div className=' pt-[30px] flex items-center gap-[15px]'>
            <div>
                <img src={`/src/assets/images/${image}`} alt='test-img' className='w-[50px] h-[50px] rounded-full object-contain' />
            </div>
            <div>
                <strong className='block mp-[5px]'>{name}</strong>
                <p className='text-gray-100 text-sm font-normal tracking-[0.8px]'>{position}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialsBox