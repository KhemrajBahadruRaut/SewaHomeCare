import { Link } from "react-router-dom";

import InfoSection from "./Whoweare";

const teamMembers = [
  {
    id: "mala-lama",
    name: "Mala Lama",
    role: "Owner | Care Director",
    image: "/about/photo3.png",
  },
  {
    id: "debbie-jackson",
    name: "Debbie Jackson",
    role: "Care Manager",
    image: "/about/photo4.png",
  },
  {
    id: "suraj-tamrakar",
    name: "Suraj Tamrakar",
    role: "Owner | Director",
    image: "/about/photo1.png",
  },
  {
    id: "luise-rodriguez",
    name: "Luise Rodriguez",
    role: "Administrator | TA Coordinator",
    image: "/about/photo2.png",
  },
];

const About = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="py-16 px-2 mb-10 " id="about-us">
        <h2 id="meet-the-team" className="text-center text-6xl md:text-7xl font-bold mb-14 text-[#1c3c6b]" style={{fontFamily: "chathura"}}>
          Meet the Sewa team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 place-items-center max-w-6xl mx-auto ">
          {teamMembers.map((member, index) => (
            <Link to={`/${member.id}`} key={member.id}>
              <div
                key={index}
                className="flex flex-col items-center text-center relative "
              >
                {/* Box with lined background */}
                <div className="relative sm:w-80 sm:h-80 bg-[url('/about/icon.png')] bg-contain bg-no-repeat bg-center rounded-md flex items-center justify-center">
                  {/* Person image floating above background */}
                  <div className="w-46 h-63 shadow-md z-10 transform transition-transform duration-300 ease-in-out hover:scale-105">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className=" absolute top-57 right-[10px] z-100 space-y-2 bg-white rounded-l-[22px] pl-4">
                  <h3 className="text-[12px] font-semibold text-[#1c3c6b] uppercase tracking-wide">
                    {member.name}
                  </h3>

                  <p className="text-sm text-[#1990ff] font-medium uppercase">
                    {member.role}
                  </p>
                </div>

                <button className=" absolute top-72 bg-[white] z-100 mt-1 px-16 py-1 border border-[#1990ff] text-[#1990ff] rounded-full text-sm hover:bg-[#1990ff] hover:text-white transition">
                  Talk to me
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <InfoSection/>
      {/* <FooterButtons /> */}
    </>
  );
};

export default About;
