import React from "react";
import pic from "../assets/pexels-cottonbro-7520355.jpg";
import Navbar from "./Navbar";
import give from "../assets/give.jpg";
import Footer from "./Footer";
const Giving = () => {
  return (
    <div>
      <Navbar theme="light" />
      <section className="bg-gray-100 font-mozilla-headline py-16 px-6">
        {/* Image with About Us overlay */}
        <div className="relative w-full max-w-full mx-auto rounded-lg overflow-hidden shadow-lg mb-12">
          <img
            src={pic}
            alt="About Us"
            className="w-full h-64 md:h-96 object-cover"
          />
          <h2 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white bg-black/50">
            Offertory
          </h2>
        </div>
        <div className="  bg-gray-100">
          {/* Black card container */}
          <div className="bg-black pb-[2rem] text-white rounded-lg shadow-lg  w-full p-10 text-center">
            {/* Giving text */}
            <h2 className="text-[2rem] font-bold mb-4">Give</h2>
            <p className="text-gray-300 mb-8">
              Giving is an act of worship and gratitude. Your generosity helps
              us continue our mission to serve, support, and reach our community
              with love.
            </p>

            {/* Image placeholder */}
            <div className="flex justify-center">
              <img
                src={give}
                alt="Giving"
                className="rounded-md shadow-md w-[43rem]  object-cover"
              />
            </div>
          </div>
        </div>
      </section>
       <Footer />
    </div>
  );
};

export default Giving;
