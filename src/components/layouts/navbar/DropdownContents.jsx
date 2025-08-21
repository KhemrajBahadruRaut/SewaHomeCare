import React from 'react';

export const ServicesDropdownContent = ({ items, onServiceClick }) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            onClick={(e) => onServiceClick(item, e)}
            className="block p-4 rounded-lg border border-gray-100 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 cursor-pointer group"
          >
            <div className="font-semibold text-sm mb-2 group-hover:text-blue-600">
              {item}
            </div>
            <div className="text-xs text-gray-500 group-hover:text-blue-500">
              Professional care services tailored to your needs
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export const AboutDropdownContent = ({ items, onAboutClick }) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            onClick={(e) => onAboutClick(item, e)}
            className="block p-4 rounded-lg border border-gray-100 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 cursor-pointer group"
          >
            <div className="font-semibold text-sm group-hover:text-blue-600 mb-1">
              {item}
            </div>
            <div className="text-xs text-gray-500 group-hover:text-blue-500">
              Discover our story and values
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export const ReviewsDropdownContent = ({ items, onAboutClick }) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            onClick={(e) => onAboutClick(item, e)}
            className="block p-4 rounded-lg border border-gray-100 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 cursor-pointer group text-center"
          >
            <div className="font-semibold text-sm group-hover:text-blue-600 mb-1">
              {item}
            </div>
            <div className="text-xs text-gray-500 group-hover:text-blue-500">
              Read authentic reviews
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export const MenuDropdownContent = ({ items, onAboutClick }) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 p-6">
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            onClick={(e) => onAboutClick(typeof item === 'string' ? item : item.name, e)}
            className="block p-4 text-center border border-gray-100 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 cursor-pointer rounded-lg group"
          >
            <div className="text-xs font-medium group-hover:text-blue-600">
              {typeof item === 'string' ? item : item.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};