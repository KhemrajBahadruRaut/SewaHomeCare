import { useState } from "react";
import { X } from "lucide-react";
// import Navbar from "../../layouts/Navbar";

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const handleHover = (id) => setHoveredService(id);
  const handleLeave = () => setHoveredService(null);
  const openModal = (content) => setSelectedService(content);
  const closeModal = () => setSelectedService(null);

  return (
    <>
      {/* <Navbar /> */}
      <div className="py-12 px-4 " id="our-services">
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-7xl font-bold text-center text-gray-600 mb-12"
            style={{ fontFamily: "Chathura" }}
          >
            Our Services
          </h1>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto px-4"
            style={{ fontFamily: "outfit" }}
          >
            {/* Service 1 */}
            <div
              onMouseEnter={() => handleHover(1)}
              onMouseLeave={handleLeave}
              onClick={() =>
                openModal({
                  title: "Comprehensive Home Care Solutions",
                  description:
                    "Our personalized extensive range of services caters to every need. From companion and personal care to specialized support for Alzheimer's and dementia, our offerings are as diverse as our clients. Our hospital-to-home transitional care ensures a smooth adjustment post-discharge, and our respite services offer invaluable support to family caregivers.",
                  image: "/images/home-care.jpg",
                })
              }
              className={`relative lg:top-30 transition-all duration-300 ease-in-out cursor-pointer ${
                hoveredService === 1 ? "transform scale-105 z-10" : ""
              }`}
            >
              <div
                className="bg-[#376082] rounded-lg p-6 h-55 flex items-center justify-center text-white text-center shadow-lg transition-all duration-300 ease-in-out"
                onMouseEnter={() => setHoveredService(1)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div>
                  <h3 className="text-xl mb-2">
                    Comprehensive Home Care Solutions
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      hoveredService === 1
                        ? "max-h-22 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">
                      A full range of personalized services, from companion care
                      to dementia support and transitional care after hospital
                      stays.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div
              onMouseEnter={() => handleHover(2)}
              onMouseLeave={handleLeave}
              onClick={() =>
                openModal({
                  title: "Nursing Visits & Health Monitorings",
                  description:
                    "Our service portfolio also includes on-demand and regular nursing visits for those requiring medical oversight at home. From chronic condition management to post-operative care, our nurses ensure your health needs are expertly addressed. This cornerstone service reflects our commitment to maintaining the highest standards of health and well-being for our clients.",
                  image: "/images/care-managers.jpg",
                })
              }
              className={`relative transition-all duration-300 ease-in-out cursor-pointer ${
                hoveredService === 2 ? "transform scale-105 z-10" : ""
              }`}
            >
              <div className="bg-[#67A7DB] rounded-lg p-4 h-60 flex items-center justify-center text-white text-center shadow-lg">
                <div>
                  <h3 className="text-xl mb-2">
                    Nursing Visits & Health Monitoring
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      hoveredService === 2
                        ? "max-h-20 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">
                      On-demand nursing visits and chronic condition care to
                      ensure health needs are expertly met at home.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div
              onMouseEnter={() => handleHover(3)}
              onMouseLeave={handleLeave}
              onClick={() =>
                openModal({
                  title: "Complete Geriatric Support",
                  description:
                    "Our personalized extensive range of services caters to every need. From companion and personal care to specialized support for Alzheimer's and dementia, our offerings are as diverse as our clients. Our hospital-to-home transitional care ensures a smooth adjustment post-discharge, and our respite services offer invaluable support to family caregivers.",
                  image: "/images/geriatric.jpg",
                })
              }
              className={`relative lg:top-30 transition-all duration-300 ease-in-out cursor-pointer ${
                hoveredService === 3 ? "transform scale-105 z-10" : ""
              }`}
            >
              <div className="bg-[#376082] rounded-lg p-6 h-55 flex items-center justify-center text-white text-center shadow-lg">
                <div>
                  <h3 className="text-xl mb-2">Complete Geriatric Support</h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      hoveredService === 3
                        ? "max-h-20 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">
                      Holistic geriatric care management to guide aging with
                      assessment, coordination, and family support.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div
              onMouseEnter={() => handleHover(4)}
              onMouseLeave={handleLeave}
              onClick={() =>
                openModal({
                  title: "Technology-Enabled Peace of Mind",
                  description:
                    "Utilizing advanced care technologies, we keep families informed and involved in their loved ones' care through online portals and direct communication, enhancing the caregiving experience for everyone involved.",
                  image: "/images/nursing.jpg",
                })
              }
              className={`relative lg:top-30 transition-all duration-300 ease-in-out cursor-pointer ${
                hoveredService === 4 ? "transform scale-105 z-10" : ""
              }`}
            >
              <div className="bg-[#67A7DB] rounded-lg p-6 h-55 flex items-center justify-center text-white text-center shadow-lg">
                <div>
                  <h3 className="text-xl mb-2">
                    Technology-Enabled Peace of Mind
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      hoveredService === 4
                        ? "max-h-20 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">
                      Advanced care technology keeps families connected and
                      informed at every step.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 5 */}
            <div
              onMouseEnter={() => handleHover(5)}
                onMouseLeave={handleLeave}
                onClick={() =>
                  openModal({
                    title: "Experienced Care Manages Oversight on all Services",
                    description:
                      "Sewa Home Care, led by experienced RNs brings professional oversight into your home. Our team's extensive healthcare background ensures top-notch care management, offering specialized nursing visits, chronic condition management, and health monitoring. This ensures a highly personalized and professional approach to home care. Every care plan is meticulously crafted and managed, offering peace of mind that you or your loved ones truly deserve.",
                    image: "/images/mobility.jpg",
                  })
                }
              className={`relative transition-all duration-300 ease-in-out cursor-pointer ${
                hoveredService === 5 ? "transform scale-105 z-10" : ""
              }`}
            >
              <div className="bg-[#376082] rounded-lg p-6 h-55 flex items-center justify-center text-white text-center shadow-lg">
                <div>
                  <h3 className="text-xl mb-2">
                    Experienced Care Manages Oversight on all Services
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      hoveredService === 5
                        ? "max-h-22 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">
                      Led by experienced RNs, we deliver professional care
                      management and health monitoring for complete peace of
                      mind.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 6 */}
            <div
              onMouseEnter={() => handleHover(6)}
              onMouseLeave={handleLeave}
              onClick={() =>
                openModal({
                  title: "Flexible, Customer Care Plans",
                  description:
                    "Every client's care plan is as unique as they are, developed and adapted over time by our dedicated care coordinators to reflect changing needs and preferences, ensuring the most effective and compassionate care.",
                  image: "/images/technology.jpg",
                })
              }
              className={`relative lg:top-30 transition-all duration-300 ease-in-out cursor-pointer ${
                hoveredService === 6 ? "transform scale-105 z-10" : ""
              }`}
            >
              <div className="bg-[#67A7DB] rounded-lg p-6 h-55 flex items-center justify-center text-white text-center shadow-lg">
                <div>
                  <h3 className="text-xl mb-2">
                    Flexible, Customer Care Plans
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      hoveredService === 6
                        ? "max-h-20 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">
                      Tailored care plans that evolve to fit each client's
                      unique needs and preferences.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 7 */}
            <div
              onMouseEnter={() => handleHover(7)}
              onMouseLeave={handleLeave}
              onClick={() =>
                openModal({
                  title: "Mobility and Independence",
                  description:
                    "Our transportation services ensure that clients maintain their independence, with assistance for medical appointments, social engagements, and more, prioritizing the quality of life and ease of access to the wider community. This service underscores our commitment to enhancing the quality of life for our clients.",
                  image: "/images/flexible.jpg",
                })
              }
              className={`relative md:col-span-2 lg:col-span-1 lg:left-74 transition-all duration-300 ease-in-out cursor-pointer ${
                hoveredService === 7 ? "transform scale-105 z-10" : ""
              }`}
            >
              <div className="bg-[#67A7DB] rounded-lg p-6 h-55 flex items-center justify-center text-white text-center shadow-lg">
                <div>
                  <h3 className="text-xl mb-2">Mobility and Independence</h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      hoveredService === 7
                        ? "max-h-20 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">
                      Transportation services help clients stay active and
                      independent in their communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2
                    className="text-2xl font-bold text-gray-800 pr-8"
                    style={{ fontFamily: "Chathura" }}
                  >
                    Our Services
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="border-2 border-gray-200 rounded-lg p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/2">
                      <img
                        src={selectedService.image}
                        alt={selectedService.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div className="lg:w-1/2">
                      <h3 className="text-xl font-semibold text-blue-600 mb-4">
                        {selectedService.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedService.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Services;
