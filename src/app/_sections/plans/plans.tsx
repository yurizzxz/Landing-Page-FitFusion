export default function Planos() {
  const planos = [
    {
      title: "Fusion Standart",
      description: "Plano básico para iniciantes",
      price: "R$ 29,90/mês",
      highlighted: false,
      url: "https://abrir.link/sKZeo",
      benefits: [
        "Treinos básicos",
        "Acompanhamento simples",
        "Acesso a recursos limitados",
      ],
    },
    {
      title: "Fusion Pro",
      description: "Plano básico para iniciantes",
      price: "R$ 59,90/mês",
      highlighted: true,
      url: "https://abrir.link/UKhhc",
      benefits: [
        "Treinos personalizados",
        "Acompanhamento de resultados",
        "Acesso a planos intermediários",
      ],
    },
    {
      title: "Fusion Elite",
      description: "Plano básico para iniciantes",
      price: "R$ 99,90/mês",
      url: "https://abrir.link/XSmna",
      highlighted: false,
      benefits: [
        "Acesso a treinos avançados",
        "Suporte personalizado",
        "Benefícios exclusivos",
      ],
    },
  ];

  return (
    <section
      className="min-h-[calc(90vh-200px)] border-b border-[#151515] bg-[#070707] text-white pb-28 pt-14"
      id="plans"
    >
      <div className="container mx-auto items-center px-5">
        <header className="lg:text-center mb-16 mt-28 lg:mt-16">
          <h1 className="text-5xl lg:text-6xl font-bold">Seja um parceiro!</h1>
          <p className="text-lg lg:text-xl mt-4">
            Escolha o plano que melhor se adapta ao seu objetivo!
          </p>
        </header>

        <div className="container mx-auto lg:px-4 flex justify-center flex-wrap gap-8">
          {planos.map((plano, index) => (
            <div
              key={index}
              className={`card w-full lg:w-[23rem] h-[32rem] relative ${
                plano.highlighted
                  ? "bg-gradient-to-br from-[#1b1b1b] via-[#111111] to-[#0d0d0d] scale-105 border-[0.5px] border-[#00bb83] shadow-lg"
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
                  {plano.price}
                </h2>
                <p className="text-md mb-8">{plano.description}</p>

                <div>
                  <ul className="flex flex-col justify-center gap-2 text-left mb-4 w-full list-none space-y-2">
                    {plano.benefits.map((benefit, i) => (
                      <li key={i} className="text-md flex flex-row gap-2 items-center">
                        <span
                          className="material-icons rounded-full bg-[#252525] p-1 text-[#00bb83]"
                          style={{ fontSize: "18px" }}
                        >
                          check
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-auto">
              <a
                  href={plano.url}
                  className="bg-[#00bb83] text-center block text-white px-6 w-full py-2 rounded-lg border border-[#00bb83] transition-colors"
                >
                  Assine Agora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
