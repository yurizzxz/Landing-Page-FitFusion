import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

interface WhatsAppButtonProps {
  phoneNumber: string; 
  message?: string;  
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const defaultMessage = "Olá, boa tarde! Gostaria de saber mais sobre os serviços.";

  const encodedMessage = encodeURIComponent(message || defaultMessage);

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Link
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 w-16 h-16 bg-[#00bb83] rounded-full flex items-center justify-center shadow-xl hover:bg-[#228f6e] transition duration-300 z-50"
      aria-label="Converse no WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </Link>
  );
};

export default WhatsAppButton;
