import Link from "next/link";

export default function Planos() {
  const planos = [
    {
      title: "Plano Standart",
      description: "Plano básico para academias",
      price: 119.9,
      highlighted: false,
      url: "https://abrir.link/sKZeo",
      benefits: [
        "Instalação do Software principal",
        "Treinamento básico para a equipe",
        "Material de apoio básico para marketing",
        "Assistência técnica 6/7",
        "Cadastro de equipamentos limitado",
        "Acompanhamento de resultados básico",
        "Liberação parcial do Dashboard",
        "Até 200 alunos cadastrados",
      ],
    },
    {
      title: "Plano Pro",
      description: "Plano Intermediário para academias",
      price: 219.9,
      highlighted: true,
      url: "https://abrir.link/UKhhc",
      benefits: [
        "Instalação do Software principal",
        "Treinamento inicial para a equipe",
        "Material de apoio e marketing inicial",
        "Assistência técnica 12/7",
        "Cadastro de equipamentos",
        "Acompanhamento de resultados",
        "Liberação total ao Dashboard",
        "Até 500 alunos cadastrados",
      ],
    },
    {
      title: "Plano Elite",
      description: "Plano avançado para academias",
      price: 380.9,
      url: "https://abrir.link/XSmna",
      highlighted: false,
      benefits: [
        "Instalação do Software principal",
        "Treinamento inicial para a equipe",
        "Material de apoio e marketing inicial",
        "Assistência técnica 12/7",
        "Cadastro de equipamentos",
        "Acompanhamento de resultados",
        "Liberação total ao Dashboard",
        "De 500 a 1000 alunos cadastrados",
      ],
    },
  ];

  return (
    <section
      className="min-h-[calc(90vh-200px)] border-b border-[#151515] bg-[#070707] text-white pb-20 pt-16"
      id="plans"
    >
      <div className="container mx-auto items-center px-5">
        <header className="lg:text-center mb-16 mt-28 lg:mt-16">
          <h1 className="text-5xl lg:text-6xl font-bold">
            Seja nosso <span className="text-[#00bb83]">parceiro</span>!
          </h1>
          <p className="text-lg text-gray-200 lg:text-xl mt-4">
            Escolha o plano que melhor se adapta as suas necessidades
            profissionais!
          </p>
        </header>

        <div className="container mx-auto lg:px-4 flex justify-center flex-wrap gap-8">
          {planos.map((plano, index) => {
            const valorAumento = plano.price * 1.2; // Calculando o valor 20% maior
            const valorAnualComAumento = valorAumento * 12; // Calculando o total anual com aumento

            return (
              <div
                key={index}
                className={`card w-full lg:w-[23rem] min-h-[36rem] relative ${
                  plano.highlighted
                    ? "bg-gradient-to-br from-[#1a1a1a] via-[#0c0c0c] to-[#080808] scale-105 border-[0.5px] border-[#00bb83] shadow-lg"
                    : "bg-[#101010] border-[0.5px] border-[#252525] hover:border-[#00bb83] transition-all duration-200"
                } py-12 px-5 flex flex-col items- rounded-lg`}
              >
                {plano.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-[#00bb83] text-center py-2 font-bold rounded-t-lg">
                    <p className="text-white">Plano Destaque</p>
                  </div>
                )}
                <div className="mb-5 mt-8">
                  <h2 className="text-4xl font-bold mb-3">{plano.title}</h2>
                  <h2 className="text-5xl font-bold mb-3 text-[#2bd6a3]">
                    R$ {plano.price.toFixed(2)}/mês
                  </h2>
                   
                    <p className="text-sm text-gray-400 mb-4">
                      De <span className="font-bold">R$ {valorAnualComAumento.toFixed(2)}</span> por R${" "}
                      <span className="font-bold">{(plano.price * 12).toFixed(2)}</span> por ano
                    </p>

                  <p className="text-[13px] bg-[#00bb83] w-32 py-2 px-3 text-center rounded-full text-white font-bold mb-5">
                    Economize 20%!
                  </p>
                  <p className="text-md mb-6">{plano.description}</p>

                  <ul className="flex flex-col justify-center gap-2 text-left mb-4 w-full list-none space-y-2">
                    {plano.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="text-md flex flex-row gap-2 items-center"
                      >
                        <span
                          className="material-icons rounded-full bg-[#252525] p-1 text-[#00bb83]"
                          style={{ fontSize: "16px" }}
                        >
                          check
                        </span>
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <Link
                    href={plano.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#00bb83] text-center block text-white px-6 w-full py-2 rounded-lg border border-[#00bb83] transition-colors"
                  >
                    Assine Agora
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
