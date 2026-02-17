import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


function Create () {
  return (
  //  button/ and one pic and words
  <div className=" bg-[#dcf1df]    border[0.5px] ">
    <div className="  ">
    <div className="  bg-green-500  justify-between   flex gap-20   rounded-xl  p-13">
        <div className='flex  flex-col px-0'>
      <div className=" ">
        <h1 className="text-4xl font-semibold">We create a better tomorrow</h1>
       </div>
       <div className="  flex items-center text-center">
        <p>Every dollar counts and help us bring hope and essential resouces to those in need.....</p>
      </div>
      </div>
      <div className="  px-7">
        <button className=" bg-white text-black py-4 px-10 rounded-xl font-bold text-lg hover:bg-green-700 transition">Donate</button>
      </div>
</div>
       <div className= "bg-[#dcf1df] py-4  flex justify-between rounded-2xl ">
      <div className=" mt-20  rounded-2xl ">
        <img className="rounded-2xl mw-full"
        src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-05.jpg"
        alt="pic"
        />
      </div>
      <div className="  mt-20  max-w-180 flex flex-col gap-4 px-20 py-10">
          <p >GET INVOLVED</p>

          <h1 className="text-5xl font-semibold">Join our movement for change</h1>


          <p>Join our non-profit organisation and be a part of our movement for positive change. We empower communities, support vulnerable individuals and strive towards building an equitable society. Together, we can create a better world. Join us now</p>

          <p>Become part of a transformative movement by supporting our non-profit organization. Together we can make lasting change.</p>

          <button className=" w-fit 
                   border border-[#1F3A2E] 
                   rounded-2xl 
                   px-6 py-3 
                   font-semibold">Register Now</button>
      </div>
    </div>
       {/* twopic */}

         <div className="w-full mx-auto-mb-90">
        <div className="flex flex-col justify-center  items-center text-center gap-3 font-semibold  w-full bg-[#ffffff] py-10 m-0bg-white px-30 divide ">
           <h1  className="text-4xl ">Inspiring tales of transformation</h1>
           <p>Get inspired by the remarkable stories of transformation through our non-profit organization. Join us in making a positive impact today.</p>
        </div>
        <div className="rounded-xl  bg-[#ffffff]  divide-y ">
        <div className="justify-between grid grid-cols-2     divide-x   mt-20 rounded-2xl  divide-y- p-10">
        <div className="px-10 mt-10 " >
             <img className="rounded-2xl -mt-30"
             src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-06.jpg"
             alt=""
             />
           <h3 className="text-xl  font-medium mt-6">The Special One</h3>
           <p   className="mb-6">Join our non-profit organisation to help create a brighter future for those in need. Every donation counts towards making a difference in the lives of those less fortunate.</p>
           <a className="font-semibold flex items-center gap-2">Readmore <FaLongArrowAltRight /></a>
        </div>
        <div className=" mt-10 px-14">
            <img className="rounded-2xl -mt-30 "
             src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-07.jpg"
             alt=""
             />
           <h3 className="text-xl  font-medium  mt-6">A Better Education for Everyone</h3>
           <p   className="mb-6">Our non-profit organisation is dedicated to improving access to education for all. With your support, we can help provide the resources and opportunities needed for success.</p>
           <a className="font-semibold flex items-center gap-2  mt-6">Readmore <FaLongArrowAltRight /></a>
        </div>
        </div>
        </div>


        <div className="flex justify-center items-center  flex-col  p-13      bg-[#d9e6db]  border-[#1F3A2E]  " >
      <div className="text-2xl -mt-6 ">
        <h1>Our Partners</h1>
      </div>
      <div className="justify-center flex">
        <img 
        src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/logo-01.svg" 
        alt="" />

         <img 
        src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/logo-02.svg" 
        alt="" />

         <img 
        src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/logo-03.svg" 
        alt="" />


         <img 
        src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/logo-04.svg" 
        alt="" />

         <img 
        src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/logo-05.svg" 
        alt="" />

         <img 
        src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/logo-06.svg" 
        alt="" />
      </div>
    </div>
    
    </div> 
    

    
    </div>
    </div>
  )
}

export default Create

