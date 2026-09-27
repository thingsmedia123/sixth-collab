import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
//import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
 
import WhyVirlix from "../components/WhyVirlix";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white">
      <Navbar />
      <Hero />
      <Services />
        <About />
        
     <WhyVirlix />
  
      <Contact />
      <Footer />
      
    </main>
  );
}
