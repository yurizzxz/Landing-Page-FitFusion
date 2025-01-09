import Image from "next/image";
import Navbar from "./_components/navbar/navbar";
import Hero from "./_sections/hero/hero";
import About from "./_sections/about/about";
import Funcoes from "./_sections/funcoes/funcoes";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Funcoes />
    </>
  );
}
