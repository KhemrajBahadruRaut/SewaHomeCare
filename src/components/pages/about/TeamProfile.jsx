import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../layouts/Navbar";
import FooterButtons from "../../home/FooterButtons";

const teamMembers = [
  {
    id: "mala-lama",
    name: "Mala Lama",
    role: "Owner | Care Director",
    image: "/about/photo3.png",
    bio: `I’m Mala Lama, a Registered Nurse, Certified Geriatric Care Manager, and Certified Dementia Practitioner with over a decade of experience in the healthcare field. As the owner and operator of Sewa Home Care, I have been proudly providing high-quality home care services to elderly and disabled clients for the past seven years.
At Sewa Home Care, our team of dedicated and compassionate caregivers works closely under the supervision of a Registered Nurse to deliver personalized care plans. We are committed to addressing the unique needs of our clients and their families, ensuring they receive the best possible support and care.`,
  },
  {
    id: "debbie-jackson",
    name: "Debbie Jackson",
    role: "Care Manager",
    image: "/about/photo4.png",
    bio: `I'm Debbie Jackson, an RN with 40 years of experience, primarily in Boston's hospitals across Med-Surg, Ortho, and Oncology, but my heart has always been with the geriatric community. Transitioning from hospital work, I climbed the ranks from Nursing Supervisor to Director of Nursing in skilled nursing facilities, dedicating 34 years to improving geriatric care. My role as a Nursing Executive was both a privilege and an honor.
Recently, I've moved into home care as a Director of Resident Care and Care Manager. This shift has deepened my appreciation for the teams that enable individuals to stay in their homes, reinforcing my values of empathy, compassion, and patience. The joy of making a tangible difference in someone's life continues to be my greatest reward.`,
  },
  {
    id: "suraj-tamrakar",
    name: "Suraj Tamrakar",
    role: "Owner | Director",
    image: "/about/photo1.png",
    bio: `I’m Suraj Tamrakar, a Owner / Director with over a decade of experience. As the owner and operator of Sewa Home Care, I have been proudly providing high-quality home care services to elderly and disabled clients for the past seven years.
At Sewa Home Care, our team of dedicated and compassionate caregivers works closely under the supervision of a Registered Nurse to deliver personalized care plans. We are committed to addressing the unique needs of our clients and their families, ensuring they receive the best possible support and care.`,
  },
  {
    id: "luise-rodriguez",
    name: "Luise Rodriguez",
    role: "Administrator | TA Coordinator",
    image: "/about/photo2.png",
    bio: `I'm Luisa Rodriguez, an Administrator and TA Coordinator with years of experience. Recently, I've moved into home care as a Director of Resident Care and Care Manager. This shift has deepened my appreciation for the teams that enable individuals to stay in their homes, reinforcing my values of empathy, compassion, and patience. The joy of making a tangible difference in someone's life continues to be my greatest reward.`,
  },
];

const TeamProfile = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === id);

  if (!member)
    return <div className="text-center py-20">Team member not found.</div>;

  return (
    <>
      <Navbar />
      <div className="flex max-w-7xl mx-auto px-4 py-10 gap-6">
        {/* Left: Scrollbar with profile thumbnails */}
        <div className="w-24 md:h-90 overflow-y-scroll pr-2 mt-3 hidden md:block scrollbar-hide">
          <div className="flex flex-col gap-2 items-center sticky ">
            {teamMembers.map((team) => (
              <Link to={`/about/${team.id}`} key={team.id}>
                <img
                  src={team.image}
                  alt={team.name}
                  className={`w-16 h-16 rounded-full border-2 ${
                    team.id === id ? "border-[#1990ff]" : "border-gray-300"
                  } hover:scale-105 transition`}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Main content */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left - Image */}
          <div className="relative w-full flex justify-center">
            <div className="relative w-130 h-130 bg-[url('/about/icon.png')] bg-contain bg-no-repeat bg-center flex items-center justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-60 h-80 absolute  top-[60px] object-cover border-4shadow-lg z-10"
              />
              <div className="absolute z-100 right-30 bg-white rounded-l-[22px] space-y-1 top-75 px-4 py-2 shadow text-left ">
                <h3 className="text-sm font-semibold text-[#1c3c6b] uppercase">
                  {member.name}
                </h3>
                <p className="text-xs text-[#1990ff] font-medium uppercase">
                  {member.role}
                </p>
              </div>
            </div>
            <button className="absolute top-94 z-100 mt-4 border-2 bg-white border-[#1990ff] text-[#1990ff] px-10 py-1 rounded-full text-sm hover:bg-[#1990ff] hover:text-white transition">
              Talk to me
            </button>
          </div>

          {/* Right - Text */}
          <div className="text-[#1c3c6b] text-xl leading-relaxed whitespace-pre-line">
            <p>{member.bio}</p>
          </div>
        </div>
      </div>
      <FooterButtons />
    </>
  );
};

export default TeamProfile;
