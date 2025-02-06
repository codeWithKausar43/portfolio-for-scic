import About from "./components/About";
import Hero from "./components/Hero";
import LenisWrapper from "./components/LenisWraper";
 
import Testimonial from "./components/Testimonial";
import TextMarquee from "./components/TextMarquee";
 
import WorkExperience from "./components/WorkExperience";
 

function App() {
  return (
    <div>
      <LenisWrapper>
        <Hero />
        <TextMarquee />
        <About />
 
        <WorkExperience />
        <Testimonial />
 
      </LenisWrapper>
    </div>
  );
}

export default App;
