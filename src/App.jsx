import About from "./components/About";
import Hero from "./components/Hero";
import LenisWrapper from "./components/LenisWraper";
import MyTechnologies from "./components/MyTechnologies";
import RecentProjects from "./components/RecentProjects";
 
import Testimonial from "./components/Testimonial";
import TextMarquee from "./components/TextMarquee";
 
 
 

function App() {
  return (
    <div>
      <LenisWrapper>
        <Hero />
        <TextMarquee />
        <About />
        <MyTechnologies></MyTechnologies>
        <RecentProjects></RecentProjects>
        <Testimonial />
 
      </LenisWrapper>
    </div>
  );
}

export default App;
