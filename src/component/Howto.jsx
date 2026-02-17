import React from 'react'
import Card from './Card'

const Howto = () => {
  return (
    // <div>
    //  <div className='h-screen'>
    //    <article className='w-[90%] rounded-3xl bg-amber-200 mx-auto grid grid-cols-3 gap-4 divide-x px-'>
    //      <div >
    //    <h1>01</h1>
    //        <h3>cause</h3>
    //        <p>We support education, healthcare, and poverty reduction.</p>
    //        <a>see proof</a>
    //      </div>
    //      <div>
    //        <h1>02</h1>
    //        <h3>Get Involved</h3>
    //        <p>volunterr or donatae your skills to make  diference</p>
    //        <a>view finacials</a>
    //      </div>
    //      <div>
    //        <h1>03</h1>
    //        <h3>Donation</h3>
    //        <p>Contribute today and help us change lives and build a better future</p>
    //        <a>learn more</a>
    //      </div>
    //    </article>
    //  </div>
    //  </div>






    <div>
    <div className='  md:grid-cols-3    min-h-screeen    grid-row  md:flex  items-center justify-center px-6'>
        <article className=''>
            <div className='
            w-[90%] rounded-3xl
    bg-[#dcf1df]
        mx-auto
        grid
        grid-cols-3
        overflow-hidden
        divide-x
        -mt-10'>
            <Card 
            number="01"
            sub="cause"
            body="We support education, healthcare, and poverty reduction."
            link="see proof"
            />
            <Card 
              number="02"
              sub="Get Involved"
              body="volunterr or donatae your skills to make  diference"
              link="view finacials" 
            
            />
            <Card 
              number="03"
              sub="Donation"
              body="Contribute today and help us change lives and build a better future"
              link="learn more"
            />
          </div>
        </article>
    </div>
    </div> 
  )
}

export default Howto
