import React from 'react'

const Button = ({label,iconURL,backgroundColor,textColor,borderColor,fullWidth}) => {
  return (
<button className={`rounded-full cursor-pointer flex justify-center items-center gap-1 px-8 py-4 border text-sm leading-none
    ${backgroundColor? `${backgroundColor} ${textColor} ${borderColor}`:
  'bg-red-400  text-white border-red-500 hover:bg-red-500 transition '}rounded-full ${fullWidth && 'w-full'}"}`}>
{label}
       {iconURL && <img src={iconURL}
        alt="arrow right icon"
        className='ml-2 rounded-full w-5 h-5'/>}
    </button>
  )
}
export default Button
