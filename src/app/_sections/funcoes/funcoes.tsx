export default function Funcoes() {
  const cards = [
    {
      title: "Controle de Alimentação",
      description: "Gerencie sua alimentação com acompanhamento diário.",
      icon: "fastfood", 
    },
    {
      title: "Controle de Treino",
      description: "Monitore seus treinos e evoluções de forma fácil.",
      icon: "fitness_center",
    },
    {
      title: "Acompanhamento de Resultados",
      description: "Acompanhe seu progresso com gráficos e relatórios.",
      icon: "insert_chart",
    },
  ];

  return (
    <main
      className="min-h-[calc(90vh-100px)] border-b border-[#151515] bg-[#070707] text-white pt-16"
      id="functions"
    >
      <section className="container mx-auto px-4">
        <header className="mt-20 text-center">
          <h1 className="text-5xl lg:text-5xl font-bold leading-tight mb-12">
            Funcionalidades
          </h1>
        </header>
        <div className="cardSection flex justify-center flex-col lg:flex-row gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card bg-[#101010] border border-[#252525] p-10 flex flex-col items-center rounded-lg"
            >
              <div className="card-body">
                <div className="icon-container mb-4">
                  <span className="material-icons text-[#00bb83]" style={{ fontSize: "48px" }}>
                    {card.icon}
                  </span>
                </div>
                <h2 className="card-title text-xl font-bold text-[#00bb83] mb-4">
                  {card.title}
                </h2>
                <p className="text-lg text-white">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
