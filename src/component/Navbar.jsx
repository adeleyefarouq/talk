import React, { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [donate, setDonate] = useState(false);

  const [mobilenav,setMobilenav] = useState(false)
  const donated = () => {
    setDonate(true);
  };


  const openMobilenav = () =>{
    setMobilenav(!mobilenav)
  }
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <img
          src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-bg.jpg"
          alt="background"
          className="w-full h-full object-cover scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-black/50 -z-10"></div>
      <header className="absolute top-3 left-0 w-full z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/site-logo-white.svg"
            alt="logo"
          />

          <ul className="md:flex gap-8 text-white font-medium hidden">
            <li className="text-[#5B9F0C] cursor-pointer">Home</li>
            <li className="hover:text-[#5B9F0C] cursor-pointer">About Us</li>
            <li className="hover:text-[#5B9F0C] cursor-pointer">Our Work</li>
            <li className="hover:text-[#5B9F0C] cursor-pointer">Stories</li>
            <li className="hover:text-[#5B9F0C] cursor-pointer">Contact</li>
          </ul>
          {mobilenav && (
          <div className="lg:hidden block bg-white w-full absolute top-20">
            <ul className="gap-8 text-black font-medium">
              <li className="text-[#5B9F0C] cursor-pointe r">Home</li>
              <li className="hover:text-[#5B9F0C] cursor-pointer">About Us</li>
              <li className="hover:text-[#5B9F0C] cursor-pointer">Our Work</li>
              <li className="hover:text-[#5B9F0C] cursor-pointer">Stories</li>
              <li className="hover:text-[#5B9F0C] cursor-pointer">Contact</li>
            </ul>
          </div>)}

          <button
            onClick={donated}
            className="hidden md:flex bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#5B9F0C] hover:text-white transition"
          >
            {donate ? "Donated" : "Donate"}
          </button>
          { mobilenav ? (
          <IoMdClose
          onClick={openMobilenav}
          className="text-white text-4xl  lg:hidden flex"
          />
          ) :(
          <IoMdMenu 
          onClick={openMobilenav}
          className="text-white text-4xl  lg:hidden flex" />
          )}
        </div>
      </header>
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-6xl mx-auto mt-20">
          {donate ? (
            <h1 className="font-semibold text-5xl md:text-7xl lg:text-8xl leading-tight md:text-white  text-red-400">
              Thank you, for your donation
            </h1>
          ) : (
            <h1 className="font-semibold text-5xl md:text-7xl lg:text-8xl leading-tight md:text-white  text-red-400">
              Empowering Change, One Step at a Time
            </h1>
          )}

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
            Every small act of kindness creates a ripple of positive change.
            Join us in making a difference lives together.
          </p>
          <button></button>
        </div>
      </div>
    </section>
  );
};

export default  Navbar ;