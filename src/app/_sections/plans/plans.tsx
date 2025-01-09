export default function Planos() {
  const planos = [
    {
      title: "Plano Básico",
      price: "R$ 29,90/mês",
      highlighted: false,
      benefits: [
        "Treinos básicos",
        "Acompanhamento simples",
        "Acesso a recursos limitados",
      ],
    },
    {
      title: "Plano Intermediário",
      price: "R$ 59,90/mês",
      highlighted: true,
      benefits: [
        "Treinos personalizados",
        "Acompanhamento de resultados",
        "Acesso a planos intermediários",
      ],
    },
    {
      title: "Plano Avançado",
      price: "R$ 99,90/mês",
      highlighted: false,
      benefits: [
        "Acesso a treinos avançados",
        "Suporte personalizado",
        "Benefícios exclusivos",
      ],
    },
    {
      title: "Plano Premium",
      price: "R$ 149,90/mês",
      highlighted: false,
      benefits: [
        "Acompanhamento 24/7",
        "Benefícios exclusivos",
        "Suporte prioritário",
      ],
    },
  ];

  return (
    <section
      className="min-h-[calc(90vh-100px)] border-b border-[#151515] bg-[#070707] text-white py-16"
      id="planos"
    >
      <div className="container px-4">
        <header className="lg:text-center mb-16 mt-16">
          <h1 className="text-4xl lg:text-5xl font-bold">Nossos Planos</h1>
          <p className="text-lg lg:text-xl mt-4">
            Escolha o plano que melhor se adapta ao seu objetivo!
          </p>
        </header>

        <div className="container mx-auto px-4 flex justify-center flex-wrap gap-6">
          {planos.map((plano, index) => (
            <div
              key={index}
              className={`card w-[20rem] h-[25rem] bg-[#101010] border border-[#252525] py-12 px-6 flex flex-col items- rounded-lg shadow-md ${
                plano.highlighted ? "bg-[#00bb83] border-[#00bb83]" : ""
              }`}
            >
              <div className="mb-5">
                <h2 className="text-2xl font-bold mb-6">{plano.title}</h2>
                <ul className="text-left mb-4 w-full list-none space-y-2">
                  {plano.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <p className="text-2xl font-bold mb-4">{plano.price}</p>
                <button
                  className={`${
                    plano.highlighted
                      ? "bg-[#070707] text-[#00bb83] border-[#00bb83]"
                      : "bg-[#00bb83] text-white border-[#00bb83]"
                  } px-6 w-full py-2 rounded-lg border transition-colors`}
                >
                  {plano.highlighted ? "Plano Destaque" : "Assine Agora"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
