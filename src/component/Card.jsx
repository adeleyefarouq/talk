import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


const Card = ({number, sub , body, link}) => {
  return (
    <div>
          <div>
        <div className='p-10'>
                <h1 className='
                  text-2xl
                  font-bold
                  text-[grey]'>{number}</h1>
                <h3 className='text-xl  font-semibold text-[#2e3b00] mb-4'>{sub}</h3>
                <p className='text-gray-700 mb-6'>{body}</p>
                <a href="#" className='font-semibold flex items-center gap-2'>{link}<FaLongArrowAltRight /> </a>
            </div>
    </div>
    </div>
  )
}

export default Card
