import Image from "next/image";
import Navbar from "@/app/_components/navbar/navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="min-h-[calc(90vh-120px)] lg:min-h-screen bg-[#070707] text-white pt-20" id="home">
        <div className="container flex flex-col items-center justify-center mx-auto text-left lg:text-center px-4 lg:px-12 min-h-[calc(95vh-150px)]">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/hero-background.jpg"
              alt="Fundo do hero"
              layout="fill"
              objectFit="cover"
              quality={75}
            />
          </div>

          <h1 className="text-5xl md:text-center lg:text-6xl font-bold leading-tight mb-6">
            Bem-vindo ao <span className="text-[#00bb83]">FitFusion</span>!
          </h1>

          <p className="text-lg md:text-center lg:text-xl md:max-w-2xl mx-auto mb-8">
            Transforme sua jornada fitness com nossos programas e recursos
            especialmente criados. Comece hoje e alcance seus objetivos!
          </p>

          <div className="flex flex-col w-full md:flex-row justify-center gap-4 text-center">
            <a
              href="/start"
              className="bg-[#00bb83] border w-full md:w-[15rem] border-[#252525] text-[#fff] px-7 py-4 rounded-full font-semibold shadow-md hover:border-[#00bb83] transition-all"
            >
              Começar Agora
            </a>
            <a
              href="/learn-more"
              className="border border-[#fff] w-full md:w-[15rem] px-7 py-4 rounded-full font-semibold hover:bg-[#101010] hover:text-[#00bb83] transition-all"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
