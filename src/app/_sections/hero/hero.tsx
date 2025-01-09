import Image from "next/image";
import Navbar from "@/app/_components/navbar/navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#070707] text-white pt-20" id="home">
        <div className="container flex flex-col items-center justify-center mx-auto text-center px-6 lg:px-12 min-h-[calc(95vh-150px)]">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/hero-background.jpg"
              alt="Fundo do hero"
              layout="fill"
              objectFit="cover"
              quality={75}
            />
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Bem-vindo ao <span className="text-[#00bb83]">FitFusion</span>!
          </h1>

          <p className="text-lg lg:text-xl max-w-2xl mx-auto mb-8">
            Transforme sua jornada fitness com nossos programas e recursos
            especialmente criados. Comece hoje e alcance seus objetivos!
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/start"
              className="bg-[#101010] border border-[#252525] text-[#00bb83] px-7 py-4 rounded-full font-semibold shadow-md hover:border-[#00bb83] transition-all"
            >
              Começar Agora
            </a>
            <a
              href="/learn-more"
              className="border border-[#fff] px-7 py-4 rounded-full font-semibold hover:bg-[#101010] hover:text-[#00bb83] transition-all"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
