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
      <div className="py-16 px-2 mb-10 container mx-auto" id="about-us border">

        <h2 id="meet-the-team" className=" text-6xl md:text-6xl  mb-14" style={{fontFamily: "chathura"}}>
          MEET THE SEWA TEAM
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-10 place-items-center max-w-6xl mx-auto ">
          {teamMembers.map((member, index) => (
            <Link to={`/${member.id}`} key={member.id}>
              <div
                key={index}
                className="flex flex-col items-center  text-center bg-[#EBEBEB] border-red-600 relative "
              >
                {/* Box with lined background */}
                <div className="relative sm:w-54 sm:h-63 bg-[url('/about/icon.png')] bg-contain bg-no-repeat bg-center rounded-md flex items-center justify-center">
                  {/* Person image floating above background */}
                  <div className="w-48 h-63    transform transition-transform  duration-300 ease-in-out hover:scale-105">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className=" absolute top-50 right-[1px] py-[2px] bg-[#EBEBEB] rounded-l-[22px] pl-4 pr-4">
                  <h3 className="text-[10px] font-semibold text-[#1c3c6b] uppercase tracking-wide">
                    {member.name}
                  </h3>

                  <p className="text-[8px] text-[#1990ff] font-medium uppercase">
                    {member.role}
                  </p>
                </div>

                <button className=" absolute top-65   bg-[#EBEBEB]  mt-1 px-16 py-1 border border-[#1990ff] text-[#1990ff] hover:rounded-tr-[10px] hover:rounded-bl-[10px]  text-sm hover:bg-[#1990ff] hover:text-white transition">
                  TALK TO ME
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
