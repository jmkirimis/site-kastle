"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

type Props = {
  navItens: string[];
  scrolled: boolean;
};

export default function Navbar({ navItens, scrolled }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`fixed z-50 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.2)] flex justify-between 
        ${scrolled ? "py-1" : "lg:justify-end py-4"}
        items-center px-6 lg:px-10 top-0 bg-white w-full`}
      >
        {/* LOGO */}
        <div
          className={`flex items-center gap-4 ${
            scrolled ? "" : "lg:absolute lg:left-10 lg:top-6"
          }`}
        >
          <img
            src={"/images/logo-img.png"}
            className={`rounded-full border-4 border-white transition-all duration-300 ${
              scrolled ? "w-12" : "w-14"
            }`}
          />

          <img
            src={"/images/logo-txt.png"}
            alt="logo"
            className={`w-30 lg:w-40 transition-all duration-300 ${
              scrolled ? "hidden" : "block"
            }`}
          />
        </div>

        {/* NAV DESKTOP */}
        <nav className="hidden lg:flex text-black">
          {navItens.map((item, index) => (
            <div
              key={index}
              className={`flex items-center ${
                scrolled ? "text-[0.7rem]" : "text-sm"
              }`}
            >
              <span
                className={`font-bold px-5 ${
                  index === 0
                    ? "bg-gradient-to-r from-[#973e4a] to-[#4b85a1] bg-clip-text text-transparent"
                    : "text-[#4c4c4c]"
                }`}
              >
                {item}
              </span>

              {index < navItens.length - 1 && (
                <div
                  className={`w-0.5 bg-black ${
                    scrolled ? "h-6" : "h-8"
                  }`}
                />
              )}
            </div>
          ))}
        </nav>

        {/* BOTÃO HAMBURGER */}
        <button
          className="lg:hidden text-2xl text-black"
          onClick={() => setOpen(true)}
        >
          <FiMenu />
        </button>
      </div>

      {/* DRAWER MOBILE */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-white z-50 shadow-lg transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER DRAWER */}
        <div className="flex justify-between items-center p-5 border-b text-[#4c4c4c]">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        {/* ITENS */}
        <nav className="flex flex-col p-5 gap-6">
          {navItens.map((item, index) => (
            <span
              key={index}
              className={`font-semibold text-lg ${
                index === 0
                  ? "bg-gradient-to-r from-[#973e4a] to-[#4b85a1] bg-clip-text text-transparent"
                  : "text-[#4c4c4c]"
              }`}
              onClick={() => setOpen(false)}
            >
              {item}
            </span>
          ))}
        </nav>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}