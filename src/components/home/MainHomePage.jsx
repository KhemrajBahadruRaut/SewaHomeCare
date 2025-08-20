import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainContent from "./MainContent";

export default function MainHomePage() {
  const navigate = useNavigate();
  
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Care Beyond Compare.";

  const [typedText2, setTypedText2] = useState("");
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [isDeleting2, setIsDeleting2] = useState(false);
  const fullText2 = "A LEGACY OF CARE CRAFTED BY HOME CARE EXPERTS.";

  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);

  // Function to handle navigation
  const handleNavigation = () => {
    if (isNavigating) return; // Prevent multiple triggers
    
    setIsNavigating(true);
    
    // Optional: Add smooth transition effect
    document.body.style.transition = "opacity 0.3s ease-in-out";
    
    setTimeout(() => {
      navigate("/home");
    }, 100); // Small delay for smooth effect
  };

  // Click handler to navigate to /home
  const handleClick = (e) => {
    // Prevent navigation if clicking on specific interactive elements (if any)
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
      return;
    }
    handleNavigation();
  };

  // Scroll handler to navigate to /home
  const handleScroll = () => {
    handleNavigation();
  };

  // Add event listeners for click and scroll
  useEffect(() => {
    // Add event listeners
    document.addEventListener('click', handleClick);
    document.addEventListener('wheel', handleScroll, { passive: true });
    document.addEventListener('touchmove', handleScroll, { passive: true });

    // Cleanup event listeners
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('wheel', handleScroll);
      document.removeEventListener('touchmove', handleScroll);
    };
  }, [isNavigating]);

  useEffect(() => {
    const timer = setTimeout(
      () => {
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
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting]);

  useEffect(() => {
    const timer = setTimeout(
      () => {
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
      },
      isDeleting2 ? 30 : 80
    );
    return () => clearTimeout(timer);
  }, [currentIndex2, isDeleting2]);

  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [hoverTimeout]);

  return (
    <>
      <div 
        className="relative container mx-auto min-h-screen overflow-hidden cursor-pointer"
      >
        {/* Optional: Add a subtle indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white/70 text-sm animate-pulse">
          Click anywhere or scroll to continue
        </div>

        {/* logo */}
        <div className="flex justify-center sm:justify-start">
          <img src="/main-logo/logo.png" className="z-100 absolute h-40 sm:h-60 sm:top-10 sm:left-40" alt="" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 top-50">
          <MainContent typedText={typedText} typedText2={typedText2} />
        </div>
      </div>
      
      {/* Background Video Wrapper */}
      <div className="absolute inset-0 z-0 h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/main-bg/mainbg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}