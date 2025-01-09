import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen bg-[#070707] text-white pt-20" id="about">
      <div className="container flex flex-col lg:flex-row items-center justify-between mx-auto  px-6 lg:px-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Sobre <span className="text-[#00bb83]">FitFusion</span>
          </h1>
          <p className="text-lg lg:text-xl max-w-2xl mb-8">
            FitFusion é uma plataforma inovadora para treinos e bem-estar, oferecendo planos personalizados e acesso a recursos exclusivos.
          </p>
        </div>

        <div className="lg:w-1/3">
          <Image
            src="/next.svg"
            alt="FitFusion"
            width={400} 
            height={400} 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
