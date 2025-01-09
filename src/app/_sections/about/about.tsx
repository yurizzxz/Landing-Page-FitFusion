import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-[calc(90vh-200px)] border-t border-b border-[#151515] bg-[#070707] text-white pt-20" id="about">
      <section className="container mt-24 flex flex-col lg:flex-row-reverse items-center justify-between mx-auto px-4">
        <article className="lg:w-1/2 mb-8 lg:mb-0">
          <header>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Sobre o <span className="text-[#00bb83]">FitFusion</span>
            </h1>
          </header>
          <p className="text-lg lg:text-xl max-w-2xl mb-8">
            FitFusion é uma plataforma inovadora para treinos e bem-estar, oferecendo planos personalizados e acesso a recursos exclusivos.
          </p>
        </article>

        <figure className="lg:w-1/3 mt-6 lg:mt-0">
          <Image
            src="/next.svg"
            alt="FitFusion"
            width={400}
            height={400}
            className="w-full h-auto object-cover rounded-lg"
          />
        </figure>
      </section>
    </main>
  );
}
