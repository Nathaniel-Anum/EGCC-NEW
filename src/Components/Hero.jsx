import { useState, useEffect, useRef } from "react";
import pic from "../assets/channels4_profile.jpg";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import pic2 from "../assets/pexels-thirdman-6194026.jpg";
import pic3 from "../assets/pexels-tima-miroshnichenko-6860495.jpg";
import pic4 from "../assets/pexels-safari-consoler-3290243-11536521.jpg";
import pic5 from "../assets/pexels-pavel-danilyuk-8815058.jpg";
import pic6 from "../assets/pexels-cottonbro-7520351.jpg";
import pic7 from "../assets/pexels-cottonbro-7520355.jpg";
import pic22 from "../assets/1.jpg";
import pic23 from "../assets/2.jpg";
import pic24 from "../assets/3.jpg";
import pic25 from "../assets/4.jpg";
import pic26 from "../assets/5.jpg";
import pic27 from "../assets/6.jpg";
import pic28 from "../assets/7.jpg";
import pic29 from "../assets/8.jpg";
import pic30 from "../assets/9.jpg";
import ChurchOnlineBanner from "./ChurchOnlineBanner";
import WorshipSection from "./WorshipSection";
import InfoGrid from "./InfoGrid";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import video from "../assets/Million Little Miracles _ Elevation Worship & Maverick City.mp4";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nodeRef = useRef(null);

  const backgrounds = [
    // {
    //   type: "image",
    //   src: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c",
    // },
    { type: "image", src: pic22 },
    { type: "image", src: pic23 },
    { type: "image", src: pic24 },
    { type: "image", src: pic25 },
    { type: "image", src: pic26 },
    { type: "image", src: pic27 },
    { type: "image", src: pic28 },
    { type: "image", src: pic29 },
    { type: "image", src: pic30 },

    // { type: "image", src: pic3 },
    // { type: "image", src: pic4 },
    // { type: "image", src: pic5 },
    // { type: "image", src: pic6 },
    // { type: "image", src: pic7 },
    // { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    // {
    //   type: "video",
    //   src: "/videos/Million Little Miracles _ Elevation Worship & Maverick City.mp4",
    // },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const currentBg = backgrounds[currentIndex];

  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        {/* Background */}
        <TransitionGroup component={null}>
          <CSSTransition
            key={currentIndex}
            nodeRef={nodeRef}
            timeout={1000}
            classNames="fade"
          >
            <div ref={nodeRef}>
              {currentBg.type === "image" ? (
                <div
                  className="absolute inset-0 bg-cover bg-center pan-animation"
                  style={{ backgroundImage: `url(${currentBg.src})` }}
                />
              ) : (
                <video
                  className="absolute inset-0 w-full h-full object-cover pan-animation"
                  src={currentBg.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                />
              )}
            </div>
          </CSSTransition>
        </TransitionGroup>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <Navbar theme="dark" />
        <header className="relative"></header>

        {/* Hero Content */}
        <div className="relative bottom-[6rem] md:bottom-[8rem] z-10 flex flex-col items-center justify-center text-center h-full text-white px-4">
          <h2 className="lg:text-[5rem] text-[4rem] md:text-6xl italic  font-corinthia-regular ">
            Welcome To
          </h2>
          <h2 className="text-4xl font-mozilla-headline md:text-6xl  font-bold mb-1">
            Experience Grace
          </h2>
          <h2 className="text-4xl md:text-6xl font-mozilla-headline font-bold mb-4">
            City Church
          </h2>
          <div className="flex gap-6 font-mozilla-headline mt-3">
            <button className="bg-red-500 px-6 py-3 rounded-lg text-lg hover:bg-red-600 cursor-pointer transition">
              Plan Your Visit
            </button>
            <button
              className="button-animated px-6 py-3 rounded-lg text-lg cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/@ExperienceGraceCityChurch",
                  "_blank"
                )
              }
            >
              Watch Live
            </button>
          </div>
        </div>
      </div>
      <ChurchOnlineBanner />
      <WorshipSection />
      <InfoGrid />
      <Footer />
    </div>
  );
}
