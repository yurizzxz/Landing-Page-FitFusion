export default function FAQ() {
    const faqs = [
      {
        question: "Como funciona a Inteligência Artificial Gemini I.A?",
        answer: "A Inteligência Artificial Gemini I.A. permite que você aluno, crie dietas personalizadas com base nas suas necessidades alimentares e objetivos de saúde.",
      },
      {
        question: "Quais os benefícios do Painel Completo?",
        answer: "O Painel Completo oferece uma visão geral detalhada dos seus dados de progresso, permitindo o acompanhamento gráfico e relatórios detalhados para um melhor desempenho.",
      },
      {
        question: "Como acessar o controle de treino?",
        answer: "Você pode acessar o controle de treino diretamente pela plataforma FitFusion, sem a necessidade de utilizar fichas de papel, otimizando o gerenciamento dos exercícios dos seus alunos.",
      },
      {
        question: "Quais tipos de artigos estão disponíveis?",
        answer: "Os artigos disponíveis são focados em temas científicos e de nutrição, ajudando você a se manter informado sobre as melhores práticas fitness.",
      },
    ];
  
    return (
      <main className="min-h-[calc(90vh-100px)] border-b border-[#151515] bg-[#070707] text-white pt-16" id="faq">
        <section className="container mx-auto px-4">
          <header className="mt-14 lg:text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-14">Perguntas Frequentes</h1>
          </header>
          <div className="faqSection flex flex-col ">
            {faqs.map((faq, index) => (
              <details key={index} open={index === 0} className="border border-[#252525] rounded-lg bg-[#101010] py-8 px-7 mb-4">
                <summary className="cursor-pointer text-lg font-semibold flex justify-between items-center text-white">
                  <span>{faq.question}</span>
                  <span className="material-icons text-[#00bb83]">expand_more</span>
                </summary>
                <p className="mt-4 text-white">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    );
}
