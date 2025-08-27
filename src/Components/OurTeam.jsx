import React from "react";
import pic from "../assets/pexels-thirdman-6194026.jpg";
import Navbar from "./Navbar";
import img1 from "../assets/1.jpg";
import img2 from "../assets/Noel.jpg";
import img3 from "../assets/Esther.jpg";
import img4 from "../assets/Lordina.jpg";
import img5 from "../assets/Sarah.jpg";
import img6 from "../assets/Ernest Sena.jpg";
import img7 from "../assets/george miller.jpg";
import img8 from "../assets/justice.jpg";
import img9 from "../assets/unknown.jpg";
import Footer from "./Footer";

const OurTeam = () => {
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

    { id: 7, name: "Mr. Justice Agbeko Akli", dept: "Media Team", img: img8 },
  ];

  const pastors = [
    { id: 6, name: "Ps. Ernest Sena Akogbe", img: img6 },
    { id: 7, name: "Ps. George Miller", img: img7 },
    { id: 7, name: "Ps. Unknown Name", img: img9 },
  ];
  return (
    <div className="font-mozilla-headline">
      <Navbar theme="light" />
      <section className="bg-gray-100  py-16 px-6">
        <div className="relative w-full max-w-full mx-auto rounded-lg overflow-hidden shadow-lg mb-12">
          <img
            src={pic}
            alt="About Us"
            className="w-full h-64 md:h-96 object-cover"
          />
          <h2 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white bg-black/50">
            Our Team
          </h2>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <h2 className="text-[3rem] font-bold text-center mb-12">OUR PASTORS</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {pastors.map((member) => (
            <div key={member.id} className="text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-55 h-55 object-cover object-top rounded-full mx-auto shadow-md"
              />
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.dept}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <h2 className="text-[3rem] font-bold text-center mb-12">
          DEPARTMENT LEADS
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {team.map((member) => (
            <div key={member.id} className="text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-55 h-55 object-cover object-top rounded-full mx-auto shadow-md"
              />
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.dept}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OurTeam;
