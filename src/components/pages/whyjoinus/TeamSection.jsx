




const TeamSection = () => {
  return (
    <div className="  flex items-center justify-center sm:p-8 ">
      <div className="max-w-7xl w-full bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          
          {/* Left Section - Image */}
          <div className="lg:w-1/2 relative flex items-center justify-center sm:p-8 mt-10 z-[1]">
           <img src="/join/join.png" alt="" />
          </div>
          
          {/* Right Section - Content */}
          <div className="lg:w-1/2 p-3 sm:p-12 flex flex-col justify-center" style={{fontFamily:"chathura"}}>
            <h1 className="text-6xl font-bold text-center text-[#376082] mb-3 leading-tight" >
              Join Our Compassionate Home Care Team
            </h1>
            
            <div className="space-y-6 text-[#376082] tracking-wide leading-[0.7] font-bold text-justify text-4xl">
              <p>
                Are you passionate about making a difference in people's lives? Do you have a 
                heart for caring for the elderly and disabled? If so, we invite you to consider 
                joining our team. We offer a supportive work environment, competitive pay, and 
                the opportunity to make a meaningful impact in your community.
              </p>
              
              <p>
                We're looking for dedicated caregivers, nurses, and home health aides who are 
                committed to providing high-quality care. Experience in home care is preferred, 
                but we provide comprehensive training for all new team members.
              </p>
              
              <p>
                Take the first step towards a rewarding career in home care. Click the link below 
                to learn more about the positions available and to submit your application.
              </p>
            </div>
            
            <div className="mt-10 mx-auto">
              <button className=" hover:bg-[#2a4d6b] text-black hover:text-white font-semibold py-2 px-8 rounded-lg border-2 border-[#376082] hover:border-[#2a4d6b] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{fontFamily: "lexend"}} >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;