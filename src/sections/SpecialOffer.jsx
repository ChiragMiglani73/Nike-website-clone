import React from 'react'
import offer from '../assets/images/offer.svg'
import Button  from "../components/Button";
import arrowRight from '../assets/icons/arrow-right.svg'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 w-full max-w-[1200px] mx-auto '>
        <div className='flex-1'>
            <img src={offer} 
            width={773}
            height={687}
            className='object-contain w-full'/>
        </div>
        <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-red-400'>Special </span>
          Offer
        </h2>
        <p className='mt-4 font-[montserrat] text-slate-gray text-lg leading-7'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 font-[montserrat] text-slate-gray text-lg leading-7'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
        </div>
    </section>
  )
}

export default SpecialOffer
