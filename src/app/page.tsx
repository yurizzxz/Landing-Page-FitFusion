import Image from "next/image";
import Navbar from "./_components/navbar/navbar";
import Hero from "./_sections/hero/hero";
import About from "./_sections/about/about";
import Funcoes from "./_sections/funcoes/funcoes";
import Plans from "./_sections/plans/plans";
import Footer from "./_sections/footer/footer";
import FAQ from "./_sections/faq/faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Funcoes />
      <Plans />
      <FAQ />
      <Footer />
    </>
  );
}
