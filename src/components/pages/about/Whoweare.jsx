import { motion } from "framer-motion";
import CaregiverSections from "./CaregiverSection";
import CareSection from "./care/Caresection";

const InfoSection = () => {
  // const content = [
  //   {
  //     title: "EXPERIENCED AND SUPPORTIVE",
  //     text: "We understand that not one care plan fits all. Daily services can include anything from meal preparation, hygiene, cleaning, and supervision. We will take the time to get to know you and develop an individualized care plan that fits your specific needs.",
  //     image: "/path/image1.jpg",
  //     direction: "right",
  //   },
  //   {
  //     title: "EXPERIENCED HOME HEALTH AIDS",
  //     text: "Companionship is key to a trusted relationship with our caregivers. We not only strive to help you with everyday tasks but want to develop a caring relationship with you. We provide one-on-one attention and care that cannot compare in other settings.",
  //     image: "/path/image2.jpg",
  //     direction: "left",
  //   },
  //   {
  //     title: "CAREGIVERS YOU CAN TRUST",
  //     text: "Feel better in the comfort of your own home. We specialize in care and daily living assistance to an array of individuals. Whether you need daily or weekly assistance due to aging, illness, recovery, or rehabilitation, our care givers will provide an individualized service that you can trust.",
  //     image: "/path/image3.jpg",
  //     direction: "right",
  //   },
  // ];

  // const getAnimation = (direction) => {
  //   return {
  //     hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  //     visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  //   };
  // };

  return (
    // <>

    // <div className=" py-12 px-4 md:px-16 text-white">
    //   <div className="max-w-6xl mx-auto flex flex-col gap-12">
    //     {content.map((item, index) => (
    //       <div
    //         key={index}
    //         className={`flex flex-col md:flex-row ${
    //           index % 2 === 1 ? "md:flex-row-reverse" : ""
    //         } items-center gap-6`}
    //       >
    //         {/* Image Section */}
    //         <div className="flex-shrink-0">
    //           <img
    //             src={item.image}
    //             alt={item.title}
    //             className="rounded-full border border-black w-40 h-40 object-cover"
    //           />
    //         </div>

    //         {/* Text Section */}
    //         <motion.div
    //           initial="hidden"
    //           whileInView="visible"
    //           viewport={{ once: true }}
    //           variants={getAnimation(item.direction)}
    //           className="bg-white text-[#376082] rounded-xl border shadow-md p-6 max-w-xl"
    //         >
    //           <h3 className="text-lg font-bold mb-3">{item.title}</h3>
    //           <p className="text-sm leading-relaxed">{item.text}</p>
    //         </motion.div>
    //       </div>
    //     ))}
    //   </div>
    // {/* <CaregiverSections/> */}
    // </div>
    //           </>

    <>
      <h1 id="who-we-are" className="text-7xl text-center font-semibold text-[#376082]" style={{fontFamily: "chathura"}}>
        Who we are
     </h1>
    <CareSection/>
    </>
  );
};

export default InfoSection;
