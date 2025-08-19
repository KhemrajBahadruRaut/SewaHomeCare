import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CareSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);

  return (
    <>
      {/* section1 */}
      <div className="flex items-center justify-between p-8 max-w-6xl mx-auto gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6 border-t pt-10 border-b pb-10">
          {/* Title with slide animation */}
          <motion.h2 className="text-4xl font-bold text-gray-800 leading-tight text-center">
            EXPERIENCED AND SUPPORTIVE
          </motion.h2>

          {/* Middle description (appears on expand) */}
          <div className="overflow-hidden justify-center flex text-justify">
            <AnimatePresence>
              {expanded && (
                <motion.p
                  className="text-gray-600 leading-relaxed text-lg max-w-lg"
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.95,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    y: 30,
                    scale: 0.95,
                    height: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: expanded ? 0.2 : 0,
                    ease: "easeInOut",
                  }}
                >
                  We understand that not one care plan fits all. Daily services
                  can include anything from meal preparation, hygiene, cleaning,
                  and supervision. We will take the time to get to know you and
                  develop an individualized care plan that fits your specific
                  needs.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Button (Explore / Close) with slide animation */}
          <div className="flex justify-center">
            <motion.button
              onClick={() => setExpanded(!expanded)}
              className="border border-black px-20 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition-colors duration-300 font-medium"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={expanded ? "close" : "explore"}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {expanded ? "CLOSE" : "EXPLORE"}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Right Image */}
        <motion.div className="flex-1 max-w-md">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop&crop=face"
            alt="Experienced caregiver with elderly client"
            className="w-full h-96 object-cover shadow-2xl"
          />
        </motion.div>
      </div>
      {/* section2 */}
      <div className="flex items-center justify-between p-8 max-w-6xl mx-auto gap-12">
        {/* LEFT Image */}
        <motion.div className="flex-1 max-w-md" >
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop&crop=face"
            alt="Experienced caregiver with elderly client"
            className="w-full h-96 object-cover shadow-2xl"
            
            
          />
          
        </motion.div>
        {/* right Content */}
        <div className="flex-1 space-y-6 border-t pt-10 border-b pb-10">
          {/* Title with slide animation */}
          <motion.h2 className="text-4xl font-bold text-gray-800 leading-tight text-center">
            EXPERIENCED HOME HEALTH AIDS
          </motion.h2>

          {/* Middle description (appears on expand) */}
          <div className="overflow-hidden justify-center flex text-justify">
            <AnimatePresence>
              {expanded1 && (
                <motion.p
                  className="text-gray-600 leading-relaxed text-lg max-w-lg"
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.95,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    y: 30,
                    scale: 0.95,
                    height: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: expanded1 ? 0.2 : 0,
                    ease: "easeInOut",
                  }}
                >
                  We understand that not one care plan fits all. Daily services
                  can include anything from meal preparation, hygiene, cleaning,
                  and supervision. We will take the time to get to know you and
                  develop an individualized care plan that fits your specific
                  needs.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Button (Explore / Close) with slide animation */}
          <div className="flex justify-center">
            <motion.button
              onClick={() => setExpanded1(!expanded1)}
              className="border border-black px-20 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition-colors duration-300 font-medium"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={expanded1 ? "close" : "explore"}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {expanded1 ? "CLOSE" : "EXPLORE"}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareSection;
