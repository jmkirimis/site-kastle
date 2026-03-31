"use client"

import InfoSection from "@/components/InfoSection";
import Members from "@/components/Members";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const navItens = ["Conheça o Learny", "Manual da Marca", "Repositório no Github", "Artigo Científico"]
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="flex flex-col bg-white">
      {/* Seção 01 - Banner */}
      <div className="flex flex-col items-center justify-center w-full min-h-screen">
        {/* Vídeo de fundo */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/banner-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/60"></div>
  
        {/* Navbar */}
        <Navbar navItens={navItens} scrolled={scrolled} />

        {/* Título */}
        <div className="flex flex-col w-90 z-10 text-white">
          <h1 className="font-bold text-[7rem]">Kastle</h1>
          <span className="font-medium text-lg text-justify mt-[-1rem]">Soluções gamificadas para crianças com TEA</span>
        </div>

        {/* Cores abaixo */}
        <div className="absolute bottom-[-3rem] bg-[url('/images/colors.png')] bg-cover bg-center w-full h-16" />
      </div>

      {/* Seção 02 - Cards dos integrantes */}
      <div className="flex flex-col items-center justify-center py-8 w-full lg:min-h-screen">
        {/* Cards */}
        <Members />

        {/* Faixa de cores */}
        <div className="flex w-full px-8 md:px-24 lg:px-38 h-6">
          <div className="w-154 bg-[#EF5B6A] h-6" />
          <div className="w-154 bg-[#6CD2FF] h-6" />
          <div className="w-96 bg-[#94ECA5] h-6" />
          <div className="w-96 bg-[#FFFC58] h-6" />
        </div>
      </div>

      {/* Seção 03 - Cards de informação sobre a Kastle */}
      <div className="flex flex-col items-center justify-center p-8 md:px-20 lg:px-40 w-full min-h-screen">
        <InfoSection
          title="Um pouco sobre nós"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="/images/fatec.png"
          imagePosition="right"
          titleColor="text-red-400"
          borderColor="border-red-400"
        />

        <InfoSection
          title="Atividades acadêmicas"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="/images/ftx.png"
          imagePosition="left"
          titleColor="text-blue-400"
          borderColor="border-blue-400"
        />

        <InfoSection
          title="Conquistas"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="/images/oracle.png"
          imagePosition="right"
          titleColor="text-yellow-400"
          borderColor="border-yellow-400"
        />

        <InfoSection
          title="Importância"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="/images/child.png"
          imagePosition="left"
          titleColor="text-green-400"
          borderColor="border-green-400"
        />
      </div>

      {/* Seção 04 - Nuvens */}
      <div className="flex items-end bg-[url('/images/clouds.png')] bg-cover bg-position-[top_right_-4rem] lg:bg-top w-full h-100" >
        <div className="lg:hidden w-full h-14 bg-[#9AE0FF]" />
      </div>

      {/* Seção 05 - Sobre o learny e redirecionamento */}
      <div className="bg-[#9AE0FF] flex flex-col items-center p-6 md:p-12 lg:p-18 justify-center w-full lg:min-h-screen">
        <div className="flex flex-col bg-white items-center w-full py-26 gap-24 rounded-4xl lg:rounded-[6rem]">
          {/* Logo */}
          <img
            src={"/images/logo-learny.png"}
            className={"w-64 lg:w-84 bg-cover bg-center"}
          />

          {/* Informações do learny */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col w-full justify-center items-center gap-6">
              <h1 className="text-[26pt] font-extrabold text-[#4C4C4C]">
                Sobre
              </h1>
              <span className="w-2/3 text-xl text-zinc-500 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>

            <div className="flex flex-col w-full justify-center items-center gap-6">
              <h1 className="text-[26pt] font-extrabold text-[#4C4C4C]">
                Objetivo
              </h1>
              <span className="w-2/3 text-xl text-zinc-500 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
          </div>

          {/* Botão de redirecionamento */}
          <button className="w-40 p-2 bg-[#EF5B6A] rounded-full">
            <div className="flex w-full items-center justify-center h-8 border-2 py-4 text-white border-white rounded-full text-lg font-bold">
              Conhecer
            </div>
          </button>


        </div>
      </div>

      {/* Seção 06 - Contatos */}
      <div
        className="w-full h-6"
        style={{
          background: "linear-gradient(to right, #EF5B6A 0%, #6CD2FF 31%, #62E37B 70%, #FFFC58 100%)"
        }}
      />
      <div className="w-full flex flex-col justify-center px-8 py-14 md:px-16 lg:px-24 lg:py-18">
        
        <div className="flex flex-col gap-1.5 text-[#4C4C4C]">
          <h2 className="font-medium text-2xl mb-6">Contatos</h2>
          <div className="flex gap-2">
            <strong>Tel:</strong>
            <span>55+ (13)996828069</span>
          </div>

          <div className="flex gap-2">
            <strong>Email:</strong>
            <span>Lorem ipsum dolor sit amet</span>
          </div>

          <div className="flex gap-2">
            <strong>instagram:</strong>
            <span>@lorem_ipsum</span>
          </div>

        </div>

      </div>
    </div>
  );
}
