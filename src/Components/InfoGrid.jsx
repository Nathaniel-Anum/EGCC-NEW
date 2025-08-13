import React from "react";
import visitImg1 from "../assets/meet1.jpg"; // Replace with your images
import visitImg2 from "../assets/meet2.jpg";
import visitImg3 from "../assets/meet3.jpg";

const sections = [
  {
    title: "We Have A Sit For You",
    description:
      "Trying out a new church can be hard. We’ve got the scoop on parking, kid check-in, worship, and more to help take the guesswork out of your next visit.",
    button: "Get Info",
    image: visitImg1,
  },
  {
    title: "Connect With Us",
    description:
      "We love meeting new people! Whether you’ve attended church before or it’s your first time, you’re welcome here.",
    button: "Learn More",
    image: visitImg2,
  },
  {
    title: "Join A Group",
    description:
      "Small groups are the heartbeat of our community. Find a group near you and grow together in faith.",
    button: "Find a Group",
    image: visitImg3,
  },
];

const InfoGrid = () => {
  return (
    <div className="flex justify-center font-mozilla-headline items-center min-h-screen bg-gray-100 p-5 md:p-10">
      <div className="bg-black text-white rounded-sm p-8 shadow-md">
        <div className="space-y-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center  min-h-[400px] md:min-h-[600px]`}
            >
              {/* Text Section */}
              <div
                className={`flex flex-col justify-center space-y-6 ${
                  index % 2 !== 0 ? "md:order-2" : ""
                }`}
              >
                <h2 className=" md:text-[4rem] text-[2rem] text-center md:text-left font-bold ">
                  {section.title}
                </h2>
                <p className="text-lg ">{section.description}</p>
                <div className="flex justify-center  md:block">
                  <button className="button-animated cursor-pointer px-6 py-3 rounded-md w-fit">
                    {section.button}
                  </button>
                </div>
              </div>

              {/* Image Section */}
              <div
                className={`${
                  index % 2 !== 0 ? "md:order-1" : ""
                } flex justify-center`}
              >
                <div className="overflow-hidden rounded-md shadow-lg w-full h-[350px] md:h-[500px]">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoGrid;
