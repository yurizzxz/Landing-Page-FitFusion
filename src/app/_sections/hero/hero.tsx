import Image from "next/image";
import Navbar from "@/app/_components/navbar/navbar";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section
        className="min-h-[calc(90vh-120px)] lg:min-h-screen relative bg-cover bg-center bg-no-repeat text-white pt-20"
        id="home"
        style={{ backgroundImage: "url('/gym background.jpg')" }}
      >
        <div className="bg-[#070707] opacity-95 absolute inset-0"></div>

        <div className="container flex flex-col pb-12 lg:pb-0 items-center justify-center mx-auto text-left lg:text-center px-4 lg:px-12 min-h-[calc(95vh-150px)] relative">
          <h1 className="text-6xl md:text-center lg:text-8xl font-bold mb-5 relative z-10">
            Otimize e Maximize o{" "}
            <p style={{ fontFamily: "Barlow Condensed" }}>
              {" "}
              Desempenho dos Seus{" "}
            </p>
            <span className="text-[#00bb83]">Alunos</span>!
          </h1>

          <p className="text-lg md:text-center lg:text-xl md:max-w-3xl mx-auto mb-8 relative z-1">
            Com o FitFusion, seus alunos têm acesso a treinos práticos e podem
            criar dietas personalizadas com Inteligência Artificial.
          </p>

          <div className="flex flex-col w-full md:flex-row justify-center gap-4 text-center relative z-10">
            <Link
              href="#plans"
              className="bg-[#00bb83] border w-full md:w-[15rem] border-[#252525] text-xl text-[#fff] px-7 py-4 rounded-full font-semibold shadow-md hover:border-[#00bb83] transition-all"
            >
              Começar Agora
            </Link>
            <Link
              href="#about"
              className="border border-[#fff] w-full md:w-[15rem] px-7 py-4 text-xl rounded-full font-semibold hover:bg-[#101010] hover:text-[#00bb83] hover:border-[#00bb83] transition-all"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
