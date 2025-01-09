import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="h-10 flex flex-row items-center justify-center bg-[#00bb83]">
            <p className="text-white text-[15px]">20% de desconto nos planos - Faça parte da nossa comunidade!</p>
        </div>
        <nav className="flex justify-between bg-[#090909] items-center rounded-md py-7 px-24">
          <a href="/" aria-label="Ir para a página inicial">
            <Image
              src="/next.svg"
              alt="FitFusion Logo"
              width={100}
              height={100}
            />
          </a>

          <ul className="flex gap-9">
            <li>
              <a
                href="#home"
                className="text-gray-200 hover:text-[#00bb83] transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-200 hover:text-[#00bb83] transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#functions"
                className="text-gray-200 hover:text-[#00bb83] transition-colors"
              >
                Funções
              </a>
            </li>
            <li>
              <a
                href="#plans"
                className="text-gray-200 hover:text-[#00bb83] transition-colors"
              >
                Planos
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-gray-200 hover:text-[#00bb83] transition-colors"
              >
                Perguntas frequentes
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
