import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Seevices = () => {
  return (
    <section className='pt-8 w-full max-w-[1200px] mx-auto flex justify-centerflex-wrap gap-9'>
       {services.map((service)=>(
        <ServiceCard key={service.label}
        {...service}/>
       ))}
    </section>
  )
}

export default Seevices
