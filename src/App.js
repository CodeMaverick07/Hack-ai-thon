import About from "./components/About";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { ReactLenis } from "@studio-freight/react-lenis";

import Team from "./components/Team";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Lec from "./components/Lec";

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
        <Team />
        <Footer />
      </ReactLenis>
    </>
  );
}

export default App;
