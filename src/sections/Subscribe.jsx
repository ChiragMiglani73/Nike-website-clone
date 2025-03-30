import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className='w-full max-w-[1200px] mx-auto flex justify-between items-center max-lg:flex-col gap-10' id='contact-us'>
        <h3 className='text-4xl leading-[68px] lg:max-w-md font-[palanquin] font-bold'>Sign Up from <span className='text-red-400'>
                 Updates </span> & Newsletter
        </h3>
        <div className='lg:max-w-[40%] md:max-w-[80%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
            <input type='text' placeholder='subscribe@nike.com' className='input  outline-none '/>
            <div className='flex items-center justify-end w-full'>
                <Button label="Sign Up" fullWidth/>
            </div>
        </div>

    </section>
  )
}

export default Subscribe
