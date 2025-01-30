"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "../whatsApp/whatsApp";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled || isMenuOpen ? "bg-[#090909]" : "bg-transparent"
        }`}
      >
        <div className="h-14 hidden sm:flex lg:h-10 flex-row items-center justify-center bg-[#00bb83]">
          <p className="text-white text-[13px] text-center lg:text-[15px]">
            20% de desconto nos planos - Faça parte da nossa comunidade!
          </p>
        </div>

        <nav className="flex justify-between items-center py-3.5 px-6 md:px-24">
          <Link href="/" aria-label="Ir para a página inicial">
            <Image
              src="/letter.png"
              alt="FitPilot Logo"
              width={150}
              height={100}
            />
          </Link>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>

          <ul className="hidden md:flex gap-9 text-gray-200">
            <li>
              <Link
                href="#home"
                className="hover:text-[#00bb83] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:text-[#00bb83] transition-colors"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="#functions"
                className="hover:text-[#00bb83] transition-colors"
              >
                Funções
              </Link>
            </li>
            <li>
              <Link
                href="#plans"
                className="hover:text-[#00bb83] transition-colors"
              >
                Planos
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="hover:text-[#00bb83] transition-colors"
              >
                Perguntas frequentes
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div
        className={`z-20 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed top-[2rem] z-20 pt-10 pb-4 left-0 w-full bg-[#090909] text-white transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="py-5 px-6">
          <ul className="flex flex-col gap-6">
            <li>
              <Link href="#home" className="hover:text-[#00bb83]">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-[#00bb83]">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#functions" className="hover:text-[#00bb83]">
                Funções
              </Link>
            </li>
            <li>
              <Link href="#plans" className="hover:text-[#00bb83]">
                Planos
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-[#00bb83]">
                Perguntas Frequentes
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <WhatsAppButton
        phoneNumber="5511999999999"
        message="Olá, boa tarde! Gostaria de saber mais sobre os serviços."
      />
    </>
  );
}
