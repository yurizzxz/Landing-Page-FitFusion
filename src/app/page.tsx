import Image from "next/image";
import Navbar from "./_components/navbar/navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 text-white pt-20">
        <div className="container flex flex-col items-center justify-center mx-auto text-center px-6 lg:px-12">
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
            Bem-vindo ao FitFusion
          </h1>
          <p className="text-lg lg:text-xl max-w-2xl mx-auto mb-8">
            Transforme sua jornada fitness com nossos programas e recursos
            especialmente criados. Comece hoje e alcance seus objetivos!
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/start"
              className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition-all"
            >
              Começar Agora
            </a>
            <a
              href="/learn-more"
              className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-700 transition-all"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
