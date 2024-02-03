import About from "./components/About";
import Starfield from "react-starfield";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { ReactLenis } from "@studio-freight/react-lenis";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import Prizes from "./components/Prizes";
import Shorlist from "./components/Shorlist";
import TimeLine from "./components/TimeLine";
import Lec from "./lib/simple_centered";

function App() {
  return (
    <>
      <ReactLenis root>
        <Header />
        <HeroSection />
        <About />
        <Prizes />
        <Shorlist />
        <TimeLine />
        <Sponsors />
        <Footer />
        <Starfield
          starCount={2000}
          starColor={[255, 255, 255]}
          speedFactor={0.1}
          backgroundColor="black"
        />
      </ReactLenis>
    </>
  );
}

export default App;
