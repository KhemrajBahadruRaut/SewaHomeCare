import React from 'react';
import { AboutDropdownContent, MenuDropdownContent, ReviewsDropdownContent, ServicesDropdownContent } from './DropdownContents';


const DesktopMenuItem = ({ 
  title, 
  id, 
  items = [], 
  dropdownType = "default", 
  onItemClick,
  activeMenu,
  handleMenuEnter,
  handleMenuLeave,
  handleScrollTo
}) => {
  // Function to calculate dropdown position
  const getDropdownPosition = () => {
    if (dropdownType === "menu") {
      return {
        left: '50%',
        transform: 'translateX(-50%)'
      };
    }
    return {
      left: '50%',
      transform: 'translateX(-50%)'
    };
  };
  const renderDropdownContent = () => {
    switch (dropdownType) {
      case "services":
        return <ServicesDropdownContent items={items} onServiceClick={onItemClick} />;
      case "about":
        return <AboutDropdownContent items={items} onAboutClick={onItemClick} />;
      case "reviews":
        return <ReviewsDropdownContent items={items} onAboutClick={onItemClick} />;
      case "menu":
        return <MenuDropdownContent items={items} onAboutClick={onItemClick} />;
      default:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => onItemClick(item, e)}
                className="block p-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              >
                <div className="font-medium text-sm">{item}</div>
              </a>
            ))}
          </div>
        );
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => handleMenuEnter(title)}
      onMouseLeave={handleMenuLeave}
    >
      <a
        onClick={() => handleScrollTo(id)}
        className="text-black text-[14px] hover:text-blue-600 py-2 transition-colors duration-200 tracking-wider cursor-pointer"
        style={{ fontFamily: "century" }}
      >
        {title}
      </a>

      {items.length > 0 && (
        <div 
          className={`fixed top-[112px] left-0 w-screen bg-white shadow-xl border-t border-gray-300 z-[100] transition-all duration-300 ease-in-out ${
            activeMenu === title 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-4 invisible'
          }`}
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {renderDropdownContent()}
        </div>
      )}
    </div>
  );
};

export default DesktopMenuItem;