import React from "react";


const About = () => {
  return (

    <section className="py-24 bg-[#F7F9F1]">
     {/* <Aboutus></Aboutus> */}
      <div className="px-8 mt-23">
     
        <div className="grid lg:grid-cols-2 gap-16 items-center">
        
          <div className="w-96">
            <span className="uppercase tracking-[0.15em] text-sm text-[#000000]">
              ABOUT US
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold leading-tight text-[#2C3A04]">
              Our journey of compassion and hope
            </h2>

            <p className="mt-6 text-[#46512A]">
              Join us on a journey towards compassion and hope. Through our
              non-profit organization, we strive to make a positive impact on
              the world. Give back to your community and be a part of something
              greater than yourself.
            </p>

            <p className="mt-6 text-[#46512A]">
              A transformational journey towards bringing hope and compassion to
              the world.
            </p>

            <button className="mt-8 px-7 py-3 border border-[#000000] rounded-lg font-medium text-[#000000] hover:bg-[#2f3b12] hover:text-white transition duration-300">
              Read More
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img
                src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-0001.jpg"
                alt="Helping hands"
                className="rounded-3xl"
              />

              <img
                src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-03.jpg"
                alt="Donations"
                className="rounded-3xl"
              />
            </div>

            <div className="space-y-6 mt-12">
              <img
                src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-02.jpg"
                alt="Volunteers"
                className="rounded-3xl "
              />
              <img
                src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-0004.jpg"
                alt="Comunity Support"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;