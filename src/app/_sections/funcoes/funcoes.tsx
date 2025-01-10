export default function Funcoes() {
  const cards = [
    {
      title: "Dietas Geradas por I.A",
      description: "Você aluno, pode gerar suas dietas com inteligência artificial Gemini I.A.",
      icon: "fastfood",
    },
    {
      title: "Controle de Treino",
      description:
        "Chega de fichas de papel! Simplifique e otimize o acesso ao treino de seus alunos.",
      icon: "fitness_center",
    },
    {
      title: "Artigos Científicos",
      description: "Inúmeros artigos sobre bem-estar e saúde validos e comprovados científicamente.", 
      icon: "description",
    },
    {
      title: "Controle Completo",
      description:
        "Visualize e cadastre alunos, presets de treinos personalizados e muito mais.",
      icon: "insert_chart",
    },
  ];

  return (
    <main
      className="min-h-[calc(90vh-100px)] border-b border-[#151515] bg-[#070707] text-white pt-16"
      id="functions"
    >
      <section className="container mx-auto px-4">
        <header className="mt-14 lg:text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-14">
            Funcionalidades
          </h1>
        </header>
        <div className="cardSection flex justify-center flex-col lg:flex-row gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card bg-[#101010] border border-[#252525] p-10 flex flex-col items-center rounded-lg w-full lg:w-[23rem] hover:border-[#00bb83] transition-all duration-200"
            >
              <div className="card-body">
                <div className="icon-container mb-4">
                  <span
                    className="material-icons text-[#00bb83]"
                    style={{ fontSize: "48px" }}
                  >
                    {card.icon}
                  </span>
                </div>
                <h2 className="card-title text-3xl font-bold text-[#00bb83] mb-4">
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
