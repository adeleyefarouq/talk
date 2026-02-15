import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


function aboutpage() {


    const about = [
        {
          number: "01",
          sub: "Prove every project",
          body: "Our Non-profit Organisation delivers transparent and accountable results for every project we undertake.",
            link: "see proof"
        },
        {
            number: "02",
            sub: "Open book",
            body: "We firmly believe in transparency and strive to maintain an open book approach with all stakeholders.",
            link: "view finacials",
        },
        {
            number: "03",
            sub: "Local partnerships",
            body: "Building strong relationships with the community is vital and we work closely with local partners.",
            link: "learn more"
        }
        ]

  return (
           <div className='grid grid-cols-3 gap-5 divide-x rounded-2xl bg-[#dfdfd5]'>
           { about.map((p, index) => ( 
              <div key={index} className='p-10'>
                      <h1 className='
                        text-2xl
                        font-bold
                        text-[#8080809e]'>{p.number}</h1>
                      <h3 className='text-xl  font-semibold text-[#2e3b00] mb-4'>{p.sub}</h3>
                      <p className='text-gray-700 mb-6'>{p.body}</p>
                      <a href="#" className='font-semibold flex items-center gap-2'>{p.link}<FaLongArrowAltRight /> </a>
                  </div> ))
            }
          </div>

  )
}

export default aboutpage
