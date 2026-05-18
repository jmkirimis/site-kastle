"use client";

import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

type DropDownItem = {
  title: string;
  link: string;
};

type Props = {
  navItens: string[]; // Mantido como string[]
  navItensDropDown: DropDownItem[];
  scrolled: boolean;
};

export default function Navbar({
  navItens,
  navItensDropDown,
  scrolled,
}: Props) {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // FUNÇÃO QUE FAZ O SCROLL USANDO O TEXTO DO ITEM
  const scrollToSection = (item: string) => {
    // Mapeia o texto do menu para o ID da div correspondente
    const mapping: { [key: string]: string } = {
      "Home": "home",
      "Sobre Nós": "sobreNos",
      "Equipe": "equipe",
      "Portfólio": "telas-learny",
      "Serviços": "portfolio", 
      "Contato": "contato"
    };

    const id = mapping[item];
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`fixed z-50 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.2)] flex justify-between 
        ${scrolled ? "py-1" : "lg:justify-end py-4"}
        items-center px-6 lg:px-10 top-0 bg-white w-full`}
      >
        {/* LOGO */}
        <div className={`flex items-center gap-4 ${scrolled ? "" : "lg:absolute lg:left-10 lg:top-6"}`}>
          <img src={"/images/logo-img.png"} className={`rounded-full border-4 border-white transition-all duration-300 ${scrolled ? "w-12" : "w-14"}`} />
          <img src={"/images/logo-txt.png"} alt="logo" className={`w-30 lg:w-40 transition-all duration-300 ${scrolled ? "hidden" : "block"}`} />
        </div>

        {/* NAV DESKTOP */}
        <nav className="hidden lg:flex text-black items-center">
          {navItens.map((item, index) => (
            <div key={index} className={`relative flex items-center ${scrolled ? "text-[0.7rem]" : "text-sm"}`}>
              
              {item !== "Links Úteis" ? (
                <span
                  onClick={() => scrollToSection(item)}
                  className={`font-bold px-5 cursor-pointer ${
                    index === 0
                      ? "bg-linear-to-r from-[#973e4a] to-[#4b85a1] bg-clip-text text-transparent"
                      : "text-[#4c4c4c] hover:text-black"
                  }`}
                >
                  {item}
                </span>
              ) : (
                /* DROPDOWN DESKTOP */
                <div className="group relative py-2">
                  <span className="font-bold px-5 text-[#4c4c4c] cursor-pointer flex items-center gap-1">
                    {item}
                    <FiChevronDown className="transition-transform duration-200 group-hover:rotate-180" />
                  </span>

                  <div className="absolute top-full right-0 mt-1 w-64 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden flex flex-col border border-zinc-100">
                    {navItensDropDown.map((dropItem, dropIndex) => (
                      <a
                        key={dropIndex}
                        href={dropItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 hover:bg-zinc-100 text-[#4c4c4c] font-medium cursor-pointer transition-colors text-left"
                      >
                        {dropItem.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* DIVISOR */}
              {index < navItens.length - 1 && (
                <div className={`w-0.5 bg-zinc-300 ${scrolled ? "h-4" : "h-6"}`} />
              )}
            </div>
          ))}
        </nav>

        {/* BOTÃO HAMBURGER */}
        <button className="lg:hidden text-2xl text-black" onClick={() => setOpen(true)}>
          <FiMenu />
        </button>
      </div>

      {/* DRAWER MOBILE */}
      <div className={`fixed top-0 right-0 h-full w-[70%] bg-white z-50 shadow-lg transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center p-5 border-b text-[#4c4c4c]">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}><FiX size={24} /></button>
        </div>

        {/* ITENS MOBILE */}
        <nav className="flex flex-col p-5 gap-6 overflow-y-auto h-[calc(100%-70px)]">
          {navItens.map((item, index) => (
            <div key={index}>
              {item !== "Links Úteis" ? (
                <span
                  className={`font-semibold text-lg cursor-pointer block ${
                    index === 0
                      ? "bg-linear-to-r from-[#973e4a] to-[#4b85a1] bg-clip-text text-transparent"
                      : "text-[#4c4c4c]"
                  }`}
                  onClick={() => {
                    scrollToSection(item);
                    setOpen(false); 
                  }}
                >
                  {item}
                </span>
              ) : (
                /* DROPDOWN MOBILE */
                <div className="flex flex-col">
                  <button
                    className="flex items-center justify-between font-semibold text-lg text-[#4c4c4c] w-full text-left"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {item}
                    <FiChevronDown className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  <div className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${dropdownOpen ? "max-h-60 mt-2 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
                    {navItensDropDown.map((dropItem, dropIndex) => (
                      <a
                        key={dropIndex}
                        href={dropItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pl-4 py-2.5 text-[#4c4c4c] hover:text-blue-600 border-l-2 border-zinc-200 text-base"
                        onClick={() => setOpen(false)}
                      >
                        {dropItem.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* OVERLAY */}
      {open && <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)} />}
    </>
  );
}