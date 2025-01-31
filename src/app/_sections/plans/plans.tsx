"use client";
import Link from "next/link";
import { useState } from "react";

export default function Planos() {
  const planos = [
    {
      title: "Plano Standart",
      description: "A solução ideal para quem deseja dar os primeiros passos.",
      price: 119.9,
      monthlyPrice: 149.9,
      highlighted: false,
      url: "https://abrir.link/sKZeo",
      benefits: [
        "Instalação do Software principal",
        "Treinamento básico para a equipe",
        "Assistência técnica 6/7",
        "Cadastro de 10 Presets de Treinos",
        "Liberação parcial do Dashboard",
        "Até 200 alunos cadastrados",
      ],
    },
    {
      title: "Plano Pro",
      description:
        "Para academias em crescimento, com mais recursos e suporte.",
      price: 219.9,
      monthlyPrice: 265.9,
      highlighted: true,
      url: "https://abrir.link/UKhhc",
      benefits: [
        "Instalação do Software principal",
        "Treinamento inicial para a equipe",
        "Assistência técnica 12/7",
        "Cadastro de 25 Presets de Treinos",
        "Acompanhamento de resultados",
        "Liberação total ao Dashboard",
        "Até 500 alunos cadastrados",
      ],
    },
    {
      title: "Plano Elite",
      description:
        "O plano definitivo para academias que buscam excelência e resultados.",
      price: 380.9,
      monthlyPrice: 459.9,
      url: "https://abrir.link/XSmna",
      highlighted: false,
      benefits: [
        "Instalação do Software principal",
        "Treinamento inicial para a equipe",
        "Assistência técnica 12/7",
        "Cadastro ilimitado de Presets de Treinos",
        "Liberação total ao Dashboard",
        "De 500 a 1000 alunos cadastrados",
      ],
    },
  ];

  const [isAnual, setIsAnual] = useState(false);

  return (
    <section
      className="min-h-[calc(90vh-200px)] border-b border-[#151515] bg-[#070707] text-white pb-28 pt-12"
      id="plans"
    >
      <div className="container mx-auto items-center px-5">
        <header className="lg:text-center mb-8 mt-28 lg:mt-16">
          <h1 className="text-5xl lg:text-6xl font-bold">
            Seja nosso <span className="text-[#00bb83]">parceiro</span>!
          </h1>
          <p className="text-lg text-gray-200 lg:text-xl mt-4">
            Escolha o plano que melhor se adapta ao seu objetivo!
          </p>
        </header>

        <div className="flex justify-center gap-4 mb-16">
          <button
            className={`px-8 py-3 rounded-lg ${
              !isAnual
                ? "bg-[#00bb83]"
                : "bg-[#252525] text-white border border-[#252525]"
            }`}
            onClick={() => setIsAnual(false)}
          >
            Mensal
          </button>
          <button
            className={`px-8 py-3 rounded-lg ${
              isAnual
                ? "bg-[#00bb83]"
                : "bg-[#252525] text-white border border-[#252525]"
            }`}
            onClick={() => setIsAnual(true)}
          >
            Anual
          </button>
        </div>

        <div className="container mx-auto lg:px-4 flex justify-center flex-wrap gap-8">
          {planos.map((plano, index) => {
            const valorAjustado = isAnual ? plano.price : plano.monthlyPrice;

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
                  <div className="absolute top-0 left-0 right-0 bg-[#00bb83] text-white text-center py-2 font-bold rounded-t-lg">
                    Plano Destaque
                  </div>
                )}
                <div className="mb-5 mt-8">
                  <h2 className="text-4xl font-bold mb-3">{plano.title}</h2>
                  <h2 className="text-5xl font-bold mb-5 text-[#2bd6a3]">
                    R$ {valorAjustado.toFixed(2)}/mês
                  </h2>
                  <p className="text-md mb-8">{plano.description}</p>

                  <div>
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
