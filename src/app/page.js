import About from "@/componentes/About";
import Contact from "@/componentes/Contact";
import Services from "@/componentes/Services";
import Testimonials from "@/componentes/Testimonials";
import Hero from "@/componentes/Hero";
import Footer from "@/componentes/Footer";
import WhatsAppFloat from "@/componentes/WhatsAppFloat";
import Navbar from "@/componentes/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}