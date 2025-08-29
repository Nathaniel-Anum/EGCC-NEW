import React from "react";
import pic from "../assets/pexels-thirdman-6194026.jpg";
import Navbar from "./Navbar";
// import img1 from "../assets/1.jpg";
import img2 from "../assets/Noel.jpg";
import img3 from "../assets/Esther.jpg";
import img4 from "../assets/Lordina.jpg";
import img5 from "../assets/Sarah.jpg";
import img6 from "../assets/Ernest Sena.jpg";
import img7 from "../assets/george miller.jpg";
import img8 from "../assets/justice.jpg";
import img9 from "../assets/unknown.jpg";
import img10 from "../assets/Lydia.jpg";
import img11 from "../assets/lady elsie.jpg";
import Footer from "./Footer";

const OurTeam = () => {
  const team = [
    {
      id: 1,
      name: "Lady Elsie Danso",
      dept: "Head of Women's Fellowship",
      img: img11,
    },
    {
      id: 2,
      name: "Ps. Ernest Sena Akogbe",
      dept: "Head of Saviors Group",
      img: img6,
    },
    // { id: 10, name: "Ps.  Isaac Clement Nana Kwaku Boateng", img: img7 },
    {
      id: 3,
      name: "Ps. Godwin Dugble Morrison",
      dept: "Head of Builders Group",
      img: img9,
    },
    {
      id: 4,
      name: "Ps. Lydia Ayorkor Lamptey",
      dept: "Head of Helpers Group",
      img: img10,
    },
    {
      id: 5,
      name: "Ms. Esther Tetteh",
      dept: "P.A & Head of Announcement Team",
      img: img3,
    },
    {
      id: 6,
      name: "Mr. Noel Kommey",
      dept: "Head of Protocol Team",
      img: img2,
    },

    {
      id: 7,
      name: "Dr. Lordina Gyimah",
      dept: "Head of Royal Ladies",
      img: img4,
    },
    {
      id: 8,
      name: " Mrs. Sarah Adjetey",
      dept: "Head of Children's Ministry",
      img: img5,
    },

    {
      id: 9,
      name: "Mr. Justice Agbeko Akli",
      dept: "Head of Media Team",
      img: img8,
    },
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
        <h2 className="text-[3rem] font-bold text-center mb-12">OUR HEADS</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 px-[3rem] sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
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
