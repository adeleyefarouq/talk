import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function another() {
  return (
    <div className="  flex justify-betwwen   gap-40 -mb-60 py-20 border border-black">
      <div  className=''>
        <img 
        src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/site-logo.svg" 
        alt="" />
        <p className='max-w-40'>
          The power of giving: Support a cause and make a difference through charity.
        </p>
      </div>
      <div>
        <h1 className='text-2xl font-semibold'>About Us</h1>
        <p className='max-w-40'>Our History
          What We Believe
          Our Programs
          Partners</p>
      </div>
      <div>
        <h1 className='text-2xl font-semibold'>Ways To Guide</h1>
        <p className='max-w-40'>Fundraise
           Planned Giving
           Brand Partnership
           Legacy Giving</p>
      </div>
      <div>
        <h1 className='text-2xl font-semibold'>Contact Info</h1>
        <p className='max-w-40'>1234 Thornridge Cir. Syracuse,
           Connecticut 56789
           (406) 555-0121
           mail@example.com</p>
      </div>
    </div>

  )
}

export default another