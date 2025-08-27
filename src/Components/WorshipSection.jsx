import visitImg1 from "../assets/Sunday.jpg"; // Replace with your images
import visitImg2 from "../assets/Tuesday.jpg";
import visitImg3 from "../assets/Friday.jpg";
import visitImg4 from "../assets/Wednesday.jpg";

const WorshipSection = () => {
  const cards = [
    {
      title: "1. Come this Sunday",
      description:
        "Step into a morning of inspiration and community at 8:00 AM, where every heart is welcomed. Experience uplifting worship, powerful music, and messages that speak to your soul. Bring your family and friends to join a warm, vibrant community, where children’s activities, fellowship, and moments of reflection create a truly unforgettable experience. ",
      image: visitImg1,
    },
    {
      title: "2. Tuesday Service",
      description:
        "Join us every Tuesday at 6pm for a refreshing service filled with inspiring worship, uplifting music, and a message that speaks to your heart. Come connect with our community, grow in faith, and experience fellowship in a welcoming and warm environment.",
      image: visitImg2,
    },
    {
      title: "3. Jabez Hour",
      description:
        "Join us every Wednesday at 9am for a refreshing service filled with inspiring worship, uplifting music, and a message that speaks to your heart. Come connect with our community, grow in faith, and experience fellowship in a welcoming and warm environment.",
      image: visitImg4,
    },
    {
      title: "3. Friday Service",
      description:
        "Join us every Friday at 6pm for an intimate time of prayer and prophetic ministry. Experience God’s presence as we seek His guidance, intercede for our community, and hear words of encouragement and revelation. Whether you are looking for personal breakthroughs, spiritual growth, or a deeper connection with God, this service is designed to uplift, inspire, and empower you. ",
      image: visitImg3,
    },
  ];

  return (
    <section className="bg-gray-100 py-5 font-mozilla-headline">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-[3rem]  font-bold mb-4 relative inline-block">
          WORSHIP
          <span className="after:block after:h-1 after:w-20 after:bg-yellow-500 after:mt-2 after:rounded-full"></span>
          WITH US
        </h2>

        <div className="mt-4 grid lg:grid-cols-2  md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white pb-2 rounded-md shadow-md overflow-hidden flex flex-col "
            >
              <div
                className={`w-full h-87 md:h-[79] bg-cover  bg-center ${
                  index === 0 ? "rounded-b-lg" : ""
                }`}
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-700 flex-1">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorshipSection;
