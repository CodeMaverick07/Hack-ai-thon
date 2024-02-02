import About from "./components/About";
import Starfield from "react-starfield";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { ReactLenis } from "@studio-freight/react-lenis";
import Sponsors from "./components/Sponsors";

import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <ReactLenis root>
        <Header />
        <div className="">
          <HeroSection />
        </div>

        <About />
        <Layout />
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
