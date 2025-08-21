import React from 'react';



import { Search, ChevronDown, ChevronUp } from "lucide-react";
import SocialIcons from './Socialicons';

const MobileMenu = ({ 
  isOpen, 
  openSubmenu, 
  toggleSubmenu, 
  handleServiceClick, 
  handleAboutClick,
  additionalMenuItems 
}) => {
  const menuItems = [
    {
      title: "ABOUT US",
      id: "about-us",
      items: ["MEET THE TEAM", "WHO WE ARE"],
    },
    {
      title: "OUR SERVICES",
      id: "our-services",
      items: [
        "COMPREHENSIVE HOME CARE SOLUTIONS",
        "EXPERIENCED CARE MANAGERS OVERSIGHT",
        "COMPLETE GERIATRIC SUPPORT",
        "NURSING VISITS & HEALTH MONITORING",
        "MOBILITY AND INDEPENDENCE",
        "TECHNOLOGY-ENABLED PEACE OF MIND",
        "FLEXIBLE CARE PLANS",
      ],
    },
    {
      title: "TESTIMONIALS",
      id: "testimonials",
      items: [],
    },
    {
      title: "VIEW REVIEWS",
      id: "join-our-team",
      items: ["GOOGLE BUSINESS REVIEWS", "CARE.COM REVIEWS"],
    },
    { title: "MENU", items: additionalMenuItems },
  ];

  return (
    <div
      className={`lg:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-screen" : "max-h-0"
      }`}
    >
      <div className="px-4 pt-2 pb-4">
        <div className="flex items-center justify-end space-x-4 py-3 border-b border-gray-200">
          <SocialIcons />
          <button className="bg-gray-100 rounded-full p-2 border border-blue-500">
            <Search className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <nav className="py-2">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="mb-2 border-b border-gray-100 last:border-0"
            >
              <button
                className="w-full flex justify-between items-center py-3 text-gray-700 font-medium"
                onClick={() => toggleSubmenu(item.title)}
              >
                <span>{item.title}</span>
                {item.items.length > 0 && (
                  <>
                    {openSubmenu === item.title ? (
                      <ChevronUp className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    )}
                  </>
                )}
              </button>
              {item.items.length > 0 && (
                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    openSubmenu === item.title ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="pb-2">
                    {item.items.map((subItem, index) => (
                      <a
                        key={index}
                        href="#"
                        onClick={(e) =>
                          item.title === "OUR SERVICES"
                            ? handleServiceClick(subItem, e)
                            : handleAboutClick(subItem, e)
                        }
                        className="block py-2 px-4 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors cursor-pointer"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;