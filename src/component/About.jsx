import React from 'react'

const about = () => {
  return (
    <div>
    <section className="bg-[#e9e9e4] py-20 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

        <div className="flex-1">
          <p className="tracking-[3px] text-sm mb-5">
            ABOUT US
          </p>

          <h1 className="text-[55px] leading-tight text-[#2e3b00] mb-6 font-semibold">
            Our journey of <br />
            compassion and <br />
            hope
          </h1>

          <p className="text-lg leading-7 mb-5 text-gray-700">
            Join us on a journey towards compassion and hope.
            Through our non-profit organisation, we strive to
            make a positive impact on the world. Give back to
            your community and be a part of something greater
            than yourself.
          </p>

          <p className="text-lg leading-7 mb-8 text-gray-700">
            A transformational journey towards bringing hope
            and compassion to the world.
          </p>

          <button className="px-7 py-3 border border-[#2e3b00] rounded-lg font-semibold hover:bg-[#2e3b00] hover:text-white transition duration-300">
            Read More
          </button>
        </div>



        <div className="flex-1 grid grid-cols-2 gap-5">
          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-0001.jpg"
            alt=""
            className="h-[300px] w-[100%] object-scale-down rounded-2xl  "
          />

          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-03.jpg"
            alt=""
            className="mt-8 h-[280px] w-[100%] rounded-2xl"
          />

          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-02.jpg"
            alt=""
            className="h-[250px] w-full object-cover rounded-2xl"
          />

          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-0004.jpg"
            alt=""
            className=" h-[300px] w-[100%] rounded-2xl"
          />
        </div>

      </div>
    </section>
    </div>
  )
}

export default about
