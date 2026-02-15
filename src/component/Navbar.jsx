import React from 'react'

const Navbar = () => {
  return (
    <div>
       <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <img
          src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-bg.jpg"
          alt="background"
          className="w-full h-full object-cover scale-110"
        />
         <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="absolute inset-0 bg-black/50 -z-10"></div>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        <button className="bg-blue-600 text-white py-3 px-7 shadow-lg">
         🛒 Buy Now
        </button>

        <button className="bg-white text-black py-3 px-6 shadow-lg">
          🎨Customize
        </button>
      </div>
      <header className="absolute top-3 left-0 w-full z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/site-logo-white.svg"
            alt="logo"
          />

          <ul className="flex gap-8 text-white font-medium">
            <li className="text-[#5B9F0C] cursor-pointer">Home</li>
            <li className="hover:text-[#5B9F0C] cursor-pointer">About Us</li>
            <li className="hover:text-[#5B9F0C] cursor-pointer">Our Work</li>
            <li className="hover:text-[#5B9F0C] cursor-pointer">Stories</li>
            <li className="hover:text-[#5B9F0C] cursor-pointer">Contact</li>
          </ul>

          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#5B9F0C] hover:text-white transition">
            Donate
          </button>
        </div>
      </header>
      <section  className="relative z-10 h-full flex items-center justify-center text-center px-6 -mt-8">
        <div className="max-w-6xl mx-auto mt-20">
          <h1 className="  font-semibold text-4xl md:text-5xl lg:text-8xl leading-tight  md:text-white text-amber-500 ">
            Empowering Change, One Step at a Time
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
            Every small act of kindness creates a ripple of positive change.
            Join us in making a difference lives together.
          </p>

          <button className="mt-10 bg-[#5B9F0C] text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-green-700 transition">
            Donate Now
          </button>
            </div>
        </section>
      </div>
    </div>
  );
};
   
export default Navbar
