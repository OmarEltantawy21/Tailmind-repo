import React from 'react'

const StayProductive = () => {
  return (
    <section className='pb-[150px]'>
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center'>
            <div>
                <img src='/src/assets/images/illustration-stay-productive.png' alt='stayProductive-img'/>
            </div>
            <div className='text-white'>
                <h3 className='text-4xl font-medium pb-3 leading-[50px]'>
                    Stay productive,
                    <br />
                    wherever you are
                </h3>
                <div className='text-sm font-normal tracking-[0.8px]' >
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                        excepturi incidunt quo deserunt quidem accusamus iure ab earum
                        reprehenderit debitis!
                    </p>
                    <p className='my-[15px]'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                        excepturi incidunt quo deserunt quidem accusamus iure ab earum
                        reprehenderit debitis!
                    </p>
                        <a href='/' className='text-primary hover:text-[#42b0d1] border-b-2 border-primary
                        pb-[5px] flex items-center justify-center gap-3 w-fit
                        transition-colors duration-200
                        '>
                        See How Fylo Works
                        <img src='/src/assets/images/icon-arrow.svg'
                        className='w-[20px] h-[20px] object-contain 
                        animate-[moveRight_1s_ease-in-out_infinite]' alt='arrow'/>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StayProductive