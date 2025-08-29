import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import pic from "../assets/channels4_profile.jpg";

const Footer = () => {
  return (
    <footer className="bg-black font-mozilla-headline text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Church Info */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={pic}
            alt="Church Logo"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-xl font-bold mb-2">
            Experience Grace City Church
          </h2>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-yellow-400" />
            <span>experiencegracecityc@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-yellow-400" />
            <span>0200318872 / 0542046406</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-yellow-400" />
            <span>Teshie-Lekma, Behind Benziz</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-400">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaTiktok size={24} />
            </a>
            <a
              href="https://www.youtube.com/@ExperienceGraceCityChurch"
              className="hover:text-yellow-400"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-12 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Experience Grace City Church. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
