import React from "react";
import Navbar from "../../layouts/Navbar";
import FooterButtons from "../../home/FooterButtons";
import AddressSection from "./AddressSection";

const ContactForm = () => {
  return (
    <>
      <Navbar />
      <h2 className="text-7xl!  text-center font-bold  text-[#3A5674] pt-5" style={{ fontFamily: 'Chathura'}}>
        Get in Touch
      </h2>
      <div className=" flex items-center justify-center px-4 py-12 bg-white">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10" style={{ fontFamily:'outfit'}}>
          {/* Left image */}
          <div className="flex items-center justify-center">
            <img
              src="/contactimg/contact.png"
              alt="Contact Us"
              className="rounded-xl w-full max-w-md"
            />
          </div>

          {/* Right form */}
          <div className="space-y-6">
            <form className="space-y-4">
              <div>
                <label className="text-sm text-gray-700" >Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-1 w-full border-b-2 border-blue-200 bg-transparent focus:outline-none focus:border-blue-500 px-2 py-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className="mt-1 w-full border-b-2 border-blue-200 bg-transparent focus:outline-none focus:border-blue-500 px-2 py-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Contact details</label>
                <input
                  type="text"
                  placeholder="Your number"
                  className="mt-1 w-full border-b-2 border-blue-200 bg-transparent focus:outline-none focus:border-blue-500 px-2 py-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Message</label>
                <textarea
                  rows={4}
                  placeholder="Type your message here ..."
                  className="mt-1 w-full border-2 border-blue-200 rounded-xl focus:outline-none focus:border-blue-500 px-4 py-3"
                />
              </div>

              <button
                type="submit"
                className="bg-[#2f5473] text-white rounded-full px-6 py-2 hover:bg-[#23425c] transition-all"
              >
                Send a message
              </button>
            </form>
          </div>
        </div>
      </div>
        <AddressSection />
      <FooterButtons />
    </>
  );
};

export default ContactForm;
