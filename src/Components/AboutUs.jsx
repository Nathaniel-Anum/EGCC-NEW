import pic from "../assets/pexels-thirdman-6194026.jpg";
import { FaBullseye, FaLightbulb } from "react-icons/fa";
import Footer from "./Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar theme="light"/>
      <section className="bg-gray-100 font-mozilla-headline py-16 px-6">
        {/* Image with About Us overlay */}
        <div className="relative w-full max-w-full mx-auto rounded-lg overflow-hidden shadow-lg mb-12">
          <img
            src={pic}
            alt="About Us"
            className="w-full h-64 md:h-96 object-cover"
          />
          <h2 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white bg-black/50">
            About Us
          </h2>
        </div>

        {/* Welcome paragraph */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-gray-700 text-lg">
            Welcome to our church! We are committed to creating a warm and
            welcoming environment where everyone can grow spiritually and feel
            connected. Our community is centered around worship, prayer,
            fellowship, and service.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-md p-8 shadow-lg flex flex-col items-start gap-4">
            <FaBullseye className="text-yellow-400 text-3xl" />
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-gray-600">
              To inspire and nurture a community of believers who follow
              Christ’s teachings, actively engage in service, and live a life of
              love, faith, and hope.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-md p-8 shadow-lg flex flex-col items-start gap-4">
            <FaLightbulb className="text-yellow-400 text-3xl" />
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="text-gray-600">
              To create a vibrant, inclusive, and spiritually enriching
              environment where individuals can deepen their faith, grow in
              community, and make a positive impact in the world.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
