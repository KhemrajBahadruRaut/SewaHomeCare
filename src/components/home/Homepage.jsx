import React, { useState, useEffect } from "react";
import Navbar from "../layouts/Navbar";
import MainContent from "./MainContent";
import FooterButtons from "./FooterButtons";
// import FooterButtons from "./FooterButtton"; // double 't' if your file is named like that

export default function Homepage() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Care Beyond Compare.";

  const [typedText2, setTypedText2] = useState("");
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [isDeleting2, setIsDeleting2] = useState(false);
  const fullText2 = "A LEGACY OF CARE CRAFTED BY HOME CARE EXPERTS.";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && currentIndex < fullText.length) {
        setTypedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      } else if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentIndex > 0) {
        setTypedText((prev) => prev.slice(0, -1));
        setCurrentIndex((prev) => prev - 1);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting2 && currentIndex2 < fullText2.length) {
        setTypedText2((prev) => prev + fullText2[currentIndex2]);
        setCurrentIndex2((prev) => prev + 1);
      } else if (!isDeleting2 && currentIndex2 === fullText2.length) {
        setTimeout(() => setIsDeleting2(true), 3000);
      } else if (isDeleting2 && currentIndex2 > 0) {
        setTypedText2((prev) => prev.slice(0, -1));
        setCurrentIndex2((prev) => prev - 1);
      } else if (isDeleting2 && currentIndex2 === 0) {
        setIsDeleting2(false);
      }
    }, isDeleting2 ? 30 : 80);
    return () => clearTimeout(timer);
  }, [currentIndex2, isDeleting2]);

  const handleMenuEnter = (menu) => {
    clearTimeout(hoverTimeout);
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    const timeout = setTimeout(() => setActiveMenu(null), 200);
    setHoverTimeout(timeout);
  };

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [hoverTimeout]);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="/main-bg/mainbg.mp4" />
        </video>
      </div>
      <Navbar
      
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        activeMenu={activeMenu}
        handleMenuEnter={handleMenuEnter}
        handleMenuLeave={handleMenuLeave}
        openSubmenu={openSubmenu}
        toggleSubmenu={toggleSubmenu}
      />
      <MainContent typedText={typedText} typedText2={typedText2} />
      <FooterButtons />
    </div>
  );
}
