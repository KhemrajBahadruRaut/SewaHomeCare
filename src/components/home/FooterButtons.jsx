








const FooterButtons = () => (
  <div className="relative z-10 bg-white/30 bg-opacity-90">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between py-3 space-y-2 sm:space-y-0 " style={{ fontFamily: 'marine' }}>
        <button className="text-black text-lg sm:text-[20px]  py-3 px-4 sm:px-8 rounded transition-colors hover:bg-blue-50 hover:text-blue-600 duration-200">
          <a href="/contact">CONTACT US</a>
        </button>
        <button className="text-black text-lg sm:text-[20px]  py-3 px-4 sm:px-8 rounded transition-colors hover:bg-blue-50 hover:text-blue-600 duration-200">
          BOOK CONSULTATION
        </button>
      </div>
    </div>
  </div>
);

export default FooterButtons;
              