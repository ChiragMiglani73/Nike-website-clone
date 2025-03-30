import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='pt-16 w-full max-w-[1200px] mx-auto'>
        <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
            <div className='flex flex-col items-start'>
                <a href='/'>
                <img src={footerLogo}
                width={150}
                height={46}
                /></a>
                <p className='mt-6 text-base leading-7 font-[montserrat] text-white sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store.Find your perfect size in store.Get Rewards </p>
                <div className='flex items-center gap-5 mt-8'>
                    {socialMedia.map((icon)=>(
                        <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer'>
                            <img src={icon.src}
                            alt={icon.alt}
                            width={24}
                            height={24}
                            />
                            </div>
                    ))}

                </div>
            </div>
            <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
                {footerLinks.map((section)=>(
                    <div key-={section}>
                        <h4 className='text-white font-[montserrat] text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
                        <ul>
                            {section.links.map((link)=>(
                                <li className='mt-3 text-white font-[montserrat] text-base leading-normal hover:text-gray-400 transition-colors duration-300'
                                key={link.name}>
                                    <a href={link.url || "#"} >{link.name}</a>
                                </li>
                            ))}
                        </ul>

                        </div>
                ))}
            </div>

        </div>
        <div className='flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center'>
            <div className='flex flex-1 justify-start items-center gap-2 font-[montserrat] cursor-pointer'>
                <img src={copyrightSign}
                alt='copy right sign'
                width={20}
                height={20}
                className='rounded-full m-0'
                />
                <p>Copyright. All rights reserved.</p>
            </div>
            <p className='font-[montserrat] cursor-pointer'>Terms & Conditions </p>

        </div>
    </footer>
    
    
  )
}

export default Footer
