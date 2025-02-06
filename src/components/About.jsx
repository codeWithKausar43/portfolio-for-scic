import "../App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import "../App.css";
 

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <div id="about" className="bg-black px-6  py-8 md:px-12 md:py-24">
      <div className="max-w-[1120px] mx-auto">
        <p className="text-sm text-gray-400 tracking-widest uppercase mb-4">
          About Me
        </p>
        <div className="hidden md:block">
 
        </div>
        <div className="space-y-20">
          <h1 className="text-2xl font-bold text-white">
            I’m a <span className="text-green-500">front-end developer </span>
            passionate about crafting captivating digital experiences. With
            expertise in HTML, CSS, and JavaScript, I specialize in creating
            sleek web applications, dynamic website, and responsive designs.
            Constantly exploring new technologies, I ensure my clients benefit
            from the latest innovations. Lets collaborate to elevate your digital presence and bring your vision to life!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
