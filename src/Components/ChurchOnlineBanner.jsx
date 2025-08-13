import React from "react";
import pic from "../assets/pexels-thirdman-6193853.jpg";

export default function ChurchOnlineBanner() {
  const phrases = [
    ["LATEST", "SERMON"],
    ["ONLINE", "SERMON"],
  ];

  const animationDuration = "40s";

  return (
    <div
      className="relative h-[17rem]   w-full bg-cover bg-top flex flex-col justify-center items-center overflow-hidden"
      style={{
        backgroundImage: `url(${pic})`,
        objectFit: "cover",
        position: "relative",
        backgroundPosition: "center 20%",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Two-line marquee scrolling text */}
      <div className="absolute bottom-4 left-0 w-full overflow-hidden pb-[5rem] pointer-events-none">
        <div
          className="flex whitespace-nowrap font-bold uppercase tracking-wide"
          style={{
            animation: `marqueeLTR ${animationDuration} linear infinite`,
            animationDirection: "alternate",
          }}
        >
          {/* Repeat phrases multiple times for continuous scrolling */}
          {Array(10)
            .fill(0)
            .flatMap((_, i) =>
              phrases.map((phrase, idx) => {
                const isLatestSermon =
                  phrase[0] === "LATEST" && phrase[1] === "SERMON";
                return (
                  <div
                    key={`${i}-${idx}`}
                    className="mx-12 align-top flex flex-col items-center"
                    style={{ lineHeight: 1, whiteSpace: "normal" }}
                  >
                    <div
                      className={`text-5xl leading-none ${
                        isLatestSermon
                          ? "text-transparent stroke-white"
                          : "text-white"
                      }`}
                      style={
                        isLatestSermon
                          ? {
                              WebkitTextStroke: "1px white",
                              textStroke: "1px white",
                            }
                          : {}
                      }
                    >
                      {phrase[0]}
                    </div>
                    <div
                      className={`text-5xl leading-none ${
                        isLatestSermon
                          ? "text-transparent stroke-white"
                          : "text-white"
                      }`}
                      style={
                        isLatestSermon
                          ? {
                              WebkitTextStroke: "1px white",
                              textStroke: "1px white",
                            }
                          : {}
                      }
                    >
                      {phrase[1]}
                    </div>
                  </div>
                );
              })
            )}
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes marqueeLTR {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
