export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-[#252525] py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center text-white">
        <div className="mb-4 lg:mb-0">
          <p className="text-center lg:text-left text-sm">
            &copy; {new Date().getFullYear()} <span className="text-[#00bb83]"> FitFusion</span>. Todos os direitos
            reservados.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6 justify-end">
          <a
            href="/privacy"
            className="text-white hover:text-[#00bb83] transition-colors"
          >
            Política de Privacidade
          </a>
          <a
            href="/terms"
            className="text-white hover:text-[#00bb83] transition-colors"
          >
            Termos de Serviço
          </a>
          <div className="mt-4 lg:mt-0">
            <button className="bg-[#00bb83] text-white px-6 py-3 rounded-full hover:bg-[#00a373] transition-all">
              Inscreva-se
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
