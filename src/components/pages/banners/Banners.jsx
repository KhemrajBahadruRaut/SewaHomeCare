import React, { useState } from "react";


// Airline data with actual logos
const airlines = [
  { name: "Emirates", src: "partners/Alignable.png" },
  { name: "China Southern", src: "partners/axis_care.png" },
  { name: "Singapore Airlines", src: "partners/bill.png" },
  { name: "Qatar Airways", src: "partners/care_academy.png" },
  { name: "Turkish Airlines", src: "partners/care.png" },
  { name: "Korean Air", src: "partners/fallon.png" },
  { name: "Korean Air", src: "partners/GR8NEPAL-LOGO.png" },
  { name: "Korean Air", src: "partners/habitat.png" },
  { name: "Korean Air", src: "partners/home_care_alliance.png" },
  { name: "Korean Air", src: "partners/middlesex_west.png" },
  { name: "Korean Air", src: "partners/senior care association.png" },
];
const InfiniteMarquee = ({ children, speed = 60 }) => {
  return (
    <div className="overflow-hidden">
      <div
        className="flex animate-marquee"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          width: "calc(200% + 240px)", // Account for content width + spacing
        }}
      >
        <div className="flex items-center flex-shrink-0">{children}</div>
        {/* Duplicate content for seamless loop */}
        <div className="flex items-center flex-shrink-0">{children}</div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 120px));
          }
        }
        .animate-marquee {
          animation: marquee ${speed}s linear infinite;
        }
      `}</style>
    </div>
  );
};

const Banners = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white py-12">
        <h2
          className="text-6xl font-bold text-[#1c3c6b] mb-10 text-center"
          style={{ fontFamily: "chathura" }}
        >
          Our Partners
        </h2>

        <div className="container mx-auto px-4">
          <div
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg overflow-hidden  hover:shadow-md transition"
          >
            <InfiniteMarquee speed={25}>
              {airlines.map((airline, idx) => (
                <img
                  key={idx}
                  src={airline.src}
                  alt={airline.name}
                  style={{ width: 120, marginRight: 120 }}
                  className="object-contain"
                />
              ))}
            </InfiniteMarquee>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)} // Click outside
        >
          <div
            className="bg-white rounded-lg p-10 space-y-15! max-w-4xl w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal click from closing
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-2xl text-gray-500 hover:text-black"
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold text-[#1c3c6b] text-center mb-6">
              Our Partners
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-2 items-center">
              {airlines.map((airline, idx) => (
                <img
                  key={idx}
                  src={airline.src}
                  alt={airline.name}
                  title={airline.name}
                  className="max-h-20 object-contain hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Recognition section */}
      <div className="container mx-auto space-y-4">
        <p
          className="text-6xl font-bold text-center mt-10 mb-6 text-[#1c3c6b]"
          style={{ fontFamily: "chathura" }}
        >
          Recognition
        </p>

        {/* First row */}
        <div className="flex flex-col md:flex-row justify-center flex-wrap  md:space-x-30">
          <div
            className="flex-1 flex flex-col items-center md:items-end justify-end text-end p-4 font-bold text-[42px] md:text-[45px] lg:text-[60px]"
            style={{ fontFamily: "chathura" }}
          >
            <p>Highly Recommended By</p>
            <p className="mt-[-20px] md:pr-14 lg:pr-19">Locals on Alignable</p>
          </div>
          <div className="flex-1 flex items-center justify-center md:justify-start p-4">
            <img
              src="/partners/recognition/image4.png"
              alt=""
              className="w-full max-w-[300px] object-contain"
            />
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-col md:flex-row justify-center flex-wrap md:space-x-20">
          <div className="flex-1 flex items-center justify-center md:justify-end p-4">
            <img
              src="/partners/recognition/image2.png"
              alt=""
              className="w-full max-w-[300px] object-contain"
            />
          </div>
          <div className="flex-1 flex items-center justify-center md:justify-start p-4">
            <img
              src="/partners/recognition/image3.png"
              alt=""
              className="w-full max-w-[300px] object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banners;
