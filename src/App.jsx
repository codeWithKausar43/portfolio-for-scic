import About from "./components/About";
import Hero from "./components/Hero";
import LenisWrapper from "./components/LenisWraper";
import MyTechnologies from "./components/MyTechnologies";
import RecentProjects from "./components/RecentProjects";
 
import TextMarquee from "./components/TextMarquee";
 
 
 

function App() {
  return (
    <div className="lg:max-w-[1100px] mx-auto">
      <LenisWrapper>
        <Hero />
        <TextMarquee />
        <About />
        <MyTechnologies></MyTechnologies>
        <RecentProjects></RecentProjects>
     
 
      </LenisWrapper>
    </div>
  );
}

export default App;
