import React from 'react'

const GetStarted = () => {
  return (
    <section className='mb-[280px]'>
        <div className='container relative'>
            <div className='bg-[#1c2230]  text-white text-center absolute left-[50%] translate-x-[-50%] top-[150px] rounded-[5px]
            element-center flex-col w-[865px] max-w-full min-h-[275px] p-[30px] '>
                <h3 className='text-[25px] md:text-[40px] font-medium pb-[20px]'>Get early access today</h3>
                <p className='text-sm font-normal w-[550px] max-w-full mx-auto pb-[30px]'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                    tempore? Vero adipisci eveniet voluptatibus cupiditate!
                </p>
                <form className='w-full flex items-center justify-between md:px-[30px] gap-[30px] '>
                    <input  type='email' placeholder='email@example.com'
                    className=' w-full md:flex-1 h-[50px] rounded-[30px] pl-[30px] outline-none border-none text-sm text-black  '
                    />
                    <button type='submit' className='w-full md:w-[200px] h-[50px] bg-[#42b0d1] hover:bg-[#8cdae4] transition-all duration-200 rounded-[30px] text-white ' >get Started For Free</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default GetStarted