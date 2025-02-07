import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

import bgImage from "../assets/images/hero-bg.png";
import profile from "../assets/images/myRemove.png";
import hi from "../assets/images/hi.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { motion } from "framer-motion";
import "../App.css";
import Button from "./shared/Button";
import { FaUpwork } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Hero = () => {
  const marqueeRefs = useRef([]);
  useEffect(() => {
    // Iterate over all marquee elements
    marqueeRefs.current.forEach((item) => {
      const marqueeInner = item.querySelector(".marquee__inner");
      const marqueeContent = marqueeInner.querySelector(".marquee__content");

      // Duration from data attribute or default
      const duration = item.getAttribute("data-marquee-duration") || 20;

      // Clone the content for a seamless animation
      const marqueeContentClone = marqueeContent.cloneNode(true);
      marqueeInner.appendChild(marqueeContentClone);

      // Animate the inner element containing both the original and cloned text
      gsap.to(marqueeInner, {
        x: `-${marqueeContent.offsetWidth}px`,
        duration: duration,
        ease: "linear",
        repeat: -1,
      });
    });
  }, []);

  return (
    <div className="">
      <div className=" p-2 md:mt-20 lg:max-w-[1100px] mx-auto flex flex-col-reverse items-center md:flex-row justify-between h-full">
        {/* Left Column */}
        <div className="flex text-white flex-col justify-center items-start w-full md:w-[45%] ">
          <h3 className="md:text-4xl text-2xl font-bold flex items-center gap-2">
            HI
            <motion.div
              className="w-12 h-12"
              style={{ transformOrigin: "bottom center" }}
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <img src={hi} alt="Hi" className="md:w-full size-7 md:h-full" />
            </motion.div>
          </h3>
          <div className="mb-12 space-y-2">
            <h3 className=" md:text-4xl text-2xl font-bold">My name is</h3>
            <motion.h4
              className="md:text-4xl text-2xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #3498db, #8e44ad, #e74c3c)",
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            >
              Kausar Ahammed
            </motion.h4>
            <h5 className="md:text-4xl text-2xl font-bold">I build things for web</h5>
          </div>

          {/* Download CV Button and Icons */}
          <div className="flex items-center space-x-4 mb-6">
            <a href="https://drive.google.com/file/d/1yNnaKFAjmfMIwXY4Q0fOOA_0_DvCg-KF/view?usp=sharing" target="_black" download={"Kausar"}>
              <Button
                text={"Download CV"}
                bg={"bg-[#4ade80]"}
                icon={<FaDownload />}
              />
            </a>
             
            <a href="https://github.com/codeWithKausar43" target="_blank">
              <Button
                bg={"bg-[#4ade80]"}
                size="p-3"
                text={<FaGithub className="w-4 h-4" />}
              />
            </a>
            <a href="https://www.linkedin.com/in/md-kausar3/" target="_blank">
              <Button
                bg={"bg-[#4ade80]"}
                size="p-3"
                text={
                  <FaLinkedin  className="w-4 h-4" />
                }
              />
            </a>
            <a href="https://www.facebook.com/mdkausar.ahammed.925" target="_blank">
              <Button
                bg={"bg-[#4ade80]"}
                size="p-3"
                text={
                  <FaFacebook className="w-4 h-4"  />
                }
              />
            </a>
          </div>
        </div>
        {/* right Column - Profile Image with Blur Effect */}
        <div
          className="flex  mt-20 md:mt-0 justify-end items-center w-60 md:w-[300px] text-right overflow-hidden"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height:['500px'],
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.div
            className=" rounded-lg shadow-lg"
            animate={{
              y: [-12, 12, -12],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            <img
              src={profile}
              alt="Profile"
              className="object-cover md:h-[400px] border w-60 md:w-full rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
