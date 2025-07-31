import { Search, Menu, X, ChevronDown, ChevronUp, Link } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  // Menu data
  const menuItems = [
    {
      title: "ABOUT US",
      items: ["MEET THE TEAM", "WHO WE ARE"],
      wide: false,
    },
    {
      title: "OUR SERVICES",
      items: [
        "COMPREHENSIVE HOME CARE SOLUTIONS",
        "EXPERIENCED CARE MANAGERS OVERSIGHT",
        "COMPLETE GERIATRIC SUPPORT",
        "NURSING VISITS & HEALTH MONITORING",
        "MOBILITY AND INDEPENDENCE",
        "TECHNOLOGY-ENABLED PEACE OF MIND",
        "FLEXIBLE CARE PLANS",
      ],
      wide: true,
    },
    {
      title: "VIEW REVIEWS",
      items: ["GOOGLE BUSINESS REVIEWS", "CARE.COM REVIEWS"],
      wide: false,
    },
  ];

  const additionalMenuItems = [
    "HOMECARE MASSACHUSETTS",
    "JOB OPPORTUNITIES",
    "JOIN OUR TEAM",
    "MYHOMEHEALTHAIDES",
    "NON-DISCRIMINATION POLICY",
    "OUR PARTNERS",
    "CONTACT US",
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleMenuEnter = (title) => {
    setActiveMenu(title);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const toggleSubmenu = (title) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/30  shadow-sm">
      {/* Main Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar - Logo and Mobile Menu Button */}
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/">
              <img
                src="/main-logo/logo.png"
                alt=""
                className="h-10 lg:relative lg:top-7 lg:h-30"
              />
            </a>
          </div>

          {/* Desktop Social Icons and Search */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center mr-8 ">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"
                  />
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z"
                    />
                  </g>
                </svg>
              </div>
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
        <div className="hidden lg:block">
          <div className="flex items-center justify-end  pt-4">
            {/* Main Menu Items */}
            <div className="flex space-x-25">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => handleMenuEnter(item.title)}
                  onMouseLeave={handleMenuLeave}
                >
                  <a
                    href={item.title === "OUR SERVICES" ? "/services" : "#" || "ABOUT US" ? "/about" : "#" }
                    className="text-gray-700 text-[18px] hover:text-blue-600 font-medium py-2 transition-colors duration-200 tracking-wider"
                    style={{ fontFamily: "macha" }}
                  >
                    {item.title}
                  </a>

                  <div
                    className={`absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 z-20 transition-all duration-200 ease-out ${
                      activeMenu === item.title
                        ? "visible opacity-100 translate-y-0"
                        : "invisible opacity-0 translate-y-2"
                    } ${item.wide ? "w-64" : "w-48"}`}
                  >
                    <div
                      className="py-1"
                      onMouseEnter={() => handleMenuEnter(item.title)}
                      onMouseLeave={handleMenuLeave}
                    >
                      {item.items.map((subItem, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Menu */}
            <div
              className="relative ml-60"
              onMouseEnter={() => handleMenuEnter("MENU")}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className="text-gray-700 hover:text-blue-600 font-medium py-2 mr-8 flex items-center transition-colors duration-200 tracking-wider"
                style={{ fontFamily: "macha" }}
              >
                MENU
              </button>
              <div
                className={`absolute top-full right-0 bg-white shadow-lg rounded-lg py-2 w-64 z-20 transition-all duration-200 ease-out ${
                  activeMenu === "MENU"
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }`}
              >
                <div className="py-1">
                  {additionalMenuItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Section */}
      <div
        className={`lg:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4">
          <div className="flex items-center justify-end space-x-4 py-3 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"
                />
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z"
                  />
                </g>
              </svg>
            </div>
            <button className="bg-gray-100 rounded-full p-2 border border-blue-500">
              <Search className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <nav className="py-2">
            {[...menuItems, { title: "MENU", items: additionalMenuItems }].map(
              (item) => (
                <div
                  key={item.title}
                  className="mb-2 border-b border-gray-100 last:border-0"
                >
                  <button
                    className="w-full flex justify-between items-center py-3 text-gray-700 font-medium"
                    onClick={() => toggleSubmenu(item.title)}
                  >
                    <span>{item.title}</span>
                    {openSubmenu === item.title ? (
                      <ChevronUp className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    )}
                  </button>
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
                          className="block py-2 px-4 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
