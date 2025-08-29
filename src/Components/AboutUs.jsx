import pic from "../assets/pexels-thirdman-6194026.jpg";
import { FaBullseye, FaLightbulb } from "react-icons/fa";
import Footer from "./Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import meet2 from "../assets/papa.jpg";
import img1 from "../assets/1.jpg";
import img2 from "../assets/Noel.jpg";
import img3 from "../assets/Esther.jpg";
import img4 from "../assets/Lordina.jpg";
import img5 from "../assets/Sarah.jpg";
import img6 from "../assets/Ernest Sena.jpg";
import img7 from "../assets/7.jpg";
const AboutUs = () => {
  const team = [
    {
      id: 1,
      name: "Alice Johnson",
      dept: "Engineering",
      img: img1,
    },
    {
      id: 2,
      name: "Mr. Noel Kommey",
      dept: "Head of Protocol Team",
      img: img2,
    },
    {
      id: 3,
      name: "Ms. Esther Tetteh",
      dept: "Personal Assistant/ Head of Announcement Team",
      img: img3,
    },
    {
      id: 4,
      name: "Dr. Lordina Gyimah",
      dept: "Head of Royal Ladies",
      img: img4,
    },
    {
      id: 5,
      name: " Mrs. Sarah Adjetey",
      dept: "Children's Ministry",
      img: img5,
    },
    { id: 6, name: "Ps. Ernest Sena Akogbe", dept: "Operations", img: img6 },
    { id: 7, name: "George Miller", dept: "Sales", img: img7 },
  ];

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
            About Us
          </h2>
        </div>

        {/* Welcome paragraph */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to our church! We are committed to creating a warm and
            welcoming environment where everyone can grow spiritually and feel
            connected. Our community is centered around worship, prayer,
            fellowship, and service.
            <span className="font-semibold block mt-4">
              Our motto is:{" "}
              <span className="text-yellow-600">
                "Building a Great Family, Winning Souls, and Shaping Destiny."
              </span>
            </span>
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-md p-8 shadow-lg flex text-center justify-center flex-col items-start gap-4">
            <FaBullseye className="text-yellow-400 self-center text-[4rem]" />
            <h3 className="text-2xl self-center font-semibold">Our Mission</h3>
            <p className="text-gray-600">
              Building a great family,we strive to create a nurturing
              environment where individuals can deepen their relationship with
              God, support one another on their spiritual journeys, and actively
              engage in compassionate service to our local and global
              communities.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-md p-8 text-center  shadow-lg flex flex-col items-start gap-4">
            <FaLightbulb className="text-yellow-400 self-center text-[4rem]" />
            <h3 className="text-2xl font-semibold self-center">Our Vision</h3>
            <p className="text-gray-600">
              To be a vibrant and inclusive church dedicated to spreading God's
              love, fostering spiritual growth, and making a positive impact on
              lives through worship, fellowship, and outreach.
            </p>
          </div>
        </div>

        {/* Meet Our Pastor */}
        <div>
          <div className="flex justify-center font-mozilla-headline items-center min-h-screen bg-gray-100 p-5 md:p-10">
            <div className="bg-black text-white rounded-sm p-8 shadow-md">
              <h3 className="text-center text-[2rem] max-sm:text-[1.5rem] max-sm:pb-4">
                Meet Our Pastor
              </h3>
              <div className="space-y-16">
                <div className="grid md:grid-cols-2 gap-8 items-center min-h-[400px] md:min-h-[600px]">
                  {/* Image Section - always on the left */}
                  <div className="flex justify-center">
                    <div className="overflow-hidden rounded-md shadow-lg w-full h-[350px] md:h-[500px]">
                      <img
                        src={meet2}
                        alt="Pastor"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  {/* Text Section - always on the right */}
                  <div className="flex flex-col justify-center space-y-6">
                    <p className="text-lg">
                      Dr Eric Nana Danso is a dedicated and compassionate pastor
                      with a deep commitment to fostering both physical and
                      spiritual growth and advancement within the body of Christ
                      .With over 20 years of pastoral experience, he brings a
                      wealth of knowledge and wisdom to his ministry. Known for
                      his engaging sermons and approachable demeanor, Dr Eric
                      Nana Danso strives to create an inclusive and supportive
                      church environment where individuals can find solace,
                      guidance, and a sense of belonging.
                    </p>
                    <div className="flex justify-center md:block"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
