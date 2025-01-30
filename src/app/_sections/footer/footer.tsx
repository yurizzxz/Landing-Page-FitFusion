import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-[#252525] py-8">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row justify-between items-center text-white">
        <div className="mb-4 lg:mb-0">
          <p className="text-center lg:text-left text-sm">
            &copy; {new Date().getFullYear()} <span className="text-[#00bb83]"> FitPilot</span>. Todos os direitos
            reservados.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-6 items-center gap-1 mb-3 justify-end">
          <Link
            href="/privacy"
            className="text-white hover:text-[#00bb83] transition-colors"
          >
            Política de Privacidade
          </Link>
          <Link
            href="/terms"
            className="text-white hover:text-[#00bb83] transition-colors"
          >
            Termos de Serviço
          </Link>

        </div>
      </div>
    </footer>
  );
}
