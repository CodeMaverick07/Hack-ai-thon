import About from "./components/About";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { ReactLenis } from "@studio-freight/react-lenis";

import Team from "./components/Team";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <ReactLenis root>
        <Header />
        <HeroSection />
        <About />
        <Layout />
        <Team />
        <Footer />
      </ReactLenis>
    </>
  );
}

export default App;
