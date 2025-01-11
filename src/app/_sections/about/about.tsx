import Image from "next/image";

export default function About() {
  return (
    <main
      className="min-h-[calc(90vh-200px)] border-t border-b border-[#151515] bg-[#070707] text-white pt-10"
      id="about"
    >
      <section className="container pt-20 pb-28 flex flex-col lg:flex-row-reverse items-center justify-between mx-auto px-4">
        <article className="lg:w-1/2 flex pl-0 lg:pl-10 flex-col items-start mb-8 lg:mb-0">
          <header>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Eleve o <span className="text-[#00bb83]">Sucesso </span>da{" "}
              <p
                className=" font-bold "
                style={{ fontFamily: "Barlow Condensed" }}
              >
                {" "}
                Sua Academia!
              </p>
            </h1>
          </header>
          <p className="text-lg text-left lg:text-xl leading-tight max-w-4xl mb-3">
            O FitFusion é a solução ideal para academias que desejam
            proporcionar uma experiência completa e personalizada para seus
            alunos, aliando tecnologia e eficiência. Nosso sistema foi
            desenvolvido para facilitar a gestão de treino nas academias e a
            personalização do atendimento, ajudando a alavancar o crescimento da
            sua academia.
          </p>
          <p className="text-lg text-left lg:text-xl leading-tight max-w-4xl mb-12">
            Chega de perder tempo com fichas de treino desorganizadas e
            confusões sobre qual aluno está com qual plano. O FitFusion resolve
            isso com poucos cliques, garantindo um controle centralizado, rápido
            e acessível. Não deixe sua academia para trás – invista agora em uma
            solução que valoriza a individualidade e transforma a gestão de
            treinos!
          </p>
        </article>

        <figure className="lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
          <Image
            src="/screens.png"
            alt="FitFusion"
            width={800}
            height={800}
            className="w-full h-auto object-contain rounded-lg"
          />
        </figure>
      </section>
    </main>
  );
}
