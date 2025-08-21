import { Search, Menu, X } from "lucide-react";
import { useState } from "react";



import SocialIcons from "./navbar/Socialicons";
import DesktopMenuItem from "./navbar/DesktopMenu";
import MobileMenu from "./navbar/MobileMenu";
import ServiceModal from "./navbar/ServiceModal";
import DesktopAdditionalMenu from "./navbar/DesktopAdditionalMenu";
import { additionalMenuItems, serviceData } from "./navbar/ServiceData";
import { useLocation, useNavigate } from "react-router-dom";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuEnter = (title) => {
    setActiveMenu(title);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const toggleSubmenu = (title) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServiceClick = (serviceName, e) => {
    e.preventDefault();
    if (serviceData[serviceName]) {
      setSelectedService(serviceData[serviceName]);
      setActiveMenu(null);
      setIsMobileMenuOpen(false);
    }
  };

  const handleAboutClick = (sectionName, e) => {
    e.preventDefault();
    let sectionId = "";

    switch (sectionName) {
      case "MEET THE TEAM":
        sectionId = "meet-the-team";
        break;
      case "WHO WE ARE":
        sectionId = "who-we-are";
        break;
      case "OUR PARTNERS":
        sectionId = "our-partners";
        break;
      case "CONTACT US":
        sectionId = "contact-us";
        break;
      default:
        return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setActiveMenu(null);
    setIsMobileMenuOpen(false);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    
    if (location.pathname === '/home') {
      navigate('/');
    } else {
      navigate('/home');
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/30 shadow-sm">
        {/* Main Navbar Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar - Logo and Mobile Menu Button */}
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <a href="/home">
                <img
                  src="/main-logo/logo.png"
                  alt=""
                  className="h-10 lg:relative lg:top-7 lg:h-30"
                  onClick={handleLogoClick}
                />
              </a>
            </div>

            {/* Desktop Social Icons and Search */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center mr-8">
                <SocialIcons />
                <button className="bg-gray-100 rounded-full p-2 pl-50 ml-10 border border-blue-500 hover:bg-gray-200 transition-colors">
                  <Search className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop Menu Section */}
          <div 
            className="hidden lg:block"
            onMouseLeave={handleMenuLeave}
          >
            <div className="flex items-center justify-end pt-4">
              {/* Main Menu Items Container */}
              <div className="flex space-x-8">
                {/* About Us Menu Item */}
                <DesktopMenuItem
                  title="ABOUT US"
                  id="about-us"
                  items={["MEET THE TEAM", "WHO WE ARE"]}
                  dropdownType="about"
                  onItemClick={handleAboutClick}
                  activeMenu={activeMenu}
                  handleMenuEnter={handleMenuEnter}
                  handleMenuLeave={handleMenuLeave}
                  handleScrollTo={handleScrollTo}
                />

                {/* Services Menu Item */}
                <DesktopMenuItem
                  title="OUR SERVICES"
                  id="our-services"
                  items={[
                    "COMPREHENSIVE HOME CARE SOLUTIONS",
                    "EXPERIENCED CARE MANAGERS OVERSIGHT",
                    "COMPLETE GERIATRIC SUPPORT",
                    "NURSING VISITS & HEALTH MONITORING",
                    "MOBILITY AND INDEPENDENCE",
                    "TECHNOLOGY-ENABLED PEACE OF MIND",
                    "FLEXIBLE CARE PLANS",
                  ]}
                  dropdownType="services"
                  onItemClick={handleServiceClick}
                  activeMenu={activeMenu}
                  handleMenuEnter={handleMenuEnter}
                  handleMenuLeave={handleMenuLeave}
                  handleScrollTo={handleScrollTo}
                />

                {/* Testimonials Menu Item */}
                <DesktopMenuItem
                  title="TESTIMONIALS"
                  id="testimonials"
                  items={[]}
                  dropdownType="default"
                  onItemClick={handleAboutClick}
                  activeMenu={activeMenu}
                  handleMenuEnter={handleMenuEnter}
                  handleMenuLeave={handleMenuLeave}
                  handleScrollTo={handleScrollTo}
                />

                {/* Reviews Menu Item */}
                <DesktopMenuItem
                  title="VIEW REVIEWS"
                  id="join-our-team"
                  items={["GOOGLE BUSINESS REVIEWS", "CARE.COM REVIEWS"]}
                  dropdownType="reviews"
                  onItemClick={handleAboutClick}
                  activeMenu={activeMenu}
                  handleMenuEnter={handleMenuEnter}
                  handleMenuLeave={handleMenuLeave}
                  handleScrollTo={handleScrollTo}
                />
              </div>

              {/* Additional Menu Container */}
              <div className="relative">
                <DesktopAdditionalMenu
                  title="MENU"
                  items={additionalMenuItems}
                  activeMenu={activeMenu}
                  handleMenuEnter={handleMenuEnter}
                  handleMenuLeave={handleMenuLeave}
                  onAboutClick={handleAboutClick}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Section */}
        <MobileMenu 
          isOpen={isMobileMenuOpen}
          openSubmenu={openSubmenu}
          toggleSubmenu={toggleSubmenu}
          handleServiceClick={handleServiceClick}
          handleAboutClick={handleAboutClick}
          additionalMenuItems={additionalMenuItems}
        />
      </header>

      {/* Service Modal */}
      <ServiceModal 
        selectedService={selectedService}
        onClose={closeModal}
      />
    </>
  );
};

export default Navbar;