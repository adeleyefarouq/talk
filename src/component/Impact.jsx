import React from 'react'

function Impact() {
  return (
    <div className="justify-between flex flex-col gap-20  m-0 p-19">
    <div className="flex  justify-between">
      <div className="max-w-100  flex flex-col gap-4 justify-between">
        <p>our impact </p>

       <h1 className="text-4xl font-semibold ">The impact we have made in our community</h1>
      </div>
      <div className="max-w-100 flex flex-col gap-4 ">
        <p className="text-gray-700">
           We have made a significant impact in our community through our non- 
           profit organization. By providing services and support to those in need 
           we have created a positive change. Our efforts have helped to improve 
           the lives of many and we are committed to continuing to make a difference.</p>
      </div>
    </div>
    <div className="  text-black flex justify-between divide-x">
          <div className="justify-center items-center text-center gap-5">
           <h1 className='text-3xl
                  font-bold px-20'>20m+</h1> 
           <p>people served worldwide</p> 
          </div>   
          <div className="justify-center items-center text-center gap-5 ">
            <h1  className='text-3xl
                  font-bold px-20'>142,790</h1> 
           <p>project funded</p>
          </div>
          <div className="justify-center items-center text-center gap-5">
            <h1 className='text-3xl
                  font-bold px-20'>1.8M</h1> 
            <div></div>
           <p>people  to take action</p>
          </div>
          <div className="justify-center items-center text-center gap-5"> 
             <h1 className='text-3xl
                  font-bold px-20'>5,246</h1> 
           <p>partner organization</p>
          </div>
    </div>
    </div>
  )
}

export default Impact
