"use client";

import InfoSection from "@/components/InfoSection";
import Values from "@/components/Values";
import Members from "@/components/Members";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const navItens = [
    "Home",
    "Sobre Nós",
    "Equipe",
    "Portfólio",
    "Serviços",
    "Contato",
    "Links Úteis",
  ];
  const navItensDropDown = [
    {
      title: "Conheça o Learny",
      link: "",
    },
    {
      title: "Manual da Marca",
      link: "/manual.pdf",
    },
    {
      title: "Repositório no Github",
      link: "https://github.com/",
    },
    {
      title: "Artigo Científico",
      link: "/artigo.pdf",
    },
  ];
  const membersContact = [
    {
      name: "João Marcos",
      instagram: "https://www.instagram.com/joaokirimis/",
      linkedin:
        "https://www.linkedin.com/in/joão-marcos-alecsandro-kirimis-443218213",
    },
    {
      name: "Jorge",
      instagram: "https://www.instagram.com/jooj_hashiguchi/",
      linkedin: "https://www.linkedin.com/in/jorge-hahsiguchi",
    },
    {
      name: "Guilherme",
      instagram: "https://www.instagram.com/guiix_33/",
      linkedin: "https://www.linkedin.com/in/guilherme-leandro-martins",
    },
  ];

  const bgColors = [
    "bg-[#FFFC58]",
    "bg-[#6CD2FF]",
    "bg-[#EF5B6A]",
    "bg-[#62E37B]",
  ];

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
      <div
        id="home"
        className="flex flex-col items-center justify-center w-full min-h-screen"
      >
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
        <Navbar
          navItens={navItens}
          navItensDropDown={navItensDropDown}
          scrolled={scrolled}
        />

        {/* Título */}
        <div className="flex flex-col w-90 z-10 text-white">
          <h1 className="font-bold text-[7rem]">Kastle</h1>
          <span className="font-medium text-lg text-justify -mt-4">
            Soluções gamificadas para crianças com TEA
          </span>
        </div>

        {/* Cores abaixo */}
        <div className="absolute -bottom-12 bg-[url('/images/colors.png')] bg-cover bg-center w-full h-16" />
      </div>

      {/* Seção 02 - Cards dos integrantes */}
      <div
        id="equipe"
        className="flex flex-col items-center justify-center py-8 w-full lg:min-h-screen"
      >
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
      <div className="flex flex-col items-center justify-center gap-1 p-8 md:px-20 lg:px-40 mb-24 w-full min-h-screen">
        <div id="sobreNos" className="mb-30">
          <InfoSection
            title="Um pouco sobre nós"
            text="Somos uma equipe formada na Fatec de Registro, no curso de Desenvolvimento de Software 
                Multiplataforma (2023–2026), dedicada à criação de aplicações gamificadas que auxiliam 
                crianças com TEA no processo de aprendizagem."
            image="/images/fatec.png"
            imagePosition="right"
            titleColor="text-red-400"
            borderColor="border-red-400"
          />
          <InfoSection
            title="Serviços"
            text="Nossa plataforma oferece um ambiente inclusivo e interativo para o aprendizado de inglês, utilizando gamificação, atividades educativas e recursos adaptados para crianças com TEA. Com exercícios dinâmicos, sistema de progressão e acompanhamento de desempenho, buscamos tornar o aprendizado mais acessível, divertido e motivador."
            image="/images/ftx.png"
            imagePosition="left"
            titleColor="text-blue-400"
            borderColor="border-blue-400"
          />
        </div>

        {/* Card Missão */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col w-full items-center justify-center bg-[#EF5B6A] px-20 py-14 gap-4 rounded-xl">
            <h1 className="text-[2.2rem] font-extrabold">Missão</h1>
            <p className="text-justify text-lg font-medium">
              Uma de nossas conquistas foi a escolha do nosso projeto para
              apresentação na Oracle Brasil, na qual alcançamos o segundo lugar
              entre os projetos apresentados.
            </p>
          </div>

          <div className="flex flex-col w-full items-center justify-center bg-[#6CD2FF] px-20 py-14 gap-4 rounded-xl">
            <h1 className="text-[2.2rem] font-extrabold">Visão</h1>
            <p className="text-justify text-lg font-medium">
              A Kastle é essencial para apoiar crianças neurodivergentes,
              especialmente no espectro do autismo, no desenvolvimento de
              habilidades socioemocionais e técnicas, com foco no inglês, por
              meio de um aprendizado acessível, envolvente e eficaz.
            </p>
          </div>

          <div className="flex flex-col w-full items-center justify-center bg-[#4C4C4C] px-20 py-14 gap-12 rounded-xl">
            <h1 className="text-[2.2rem] font-extrabold">Valores</h1>
            <div className="grid grid-cols-2 gap-4">
              {bgColors.map((bgColor, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-6 px-8 py-12 bg-white text-[#4c4c4c] rounded-2xl"
                >
                  <div className={`w-2 h-full ${bgColor} rounded-md`} />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Lorem Ipsum</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. 
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Seção 04 - Nuvens */}
      <div className="relative w-full h-120 overflow-hidden">
        {/* Faixa colorida atrás */}
        <div className="absolute bottom-0 w-full h-8.5 bg-[#9AE0FF] z-0" />

        {/* Imagem acima */}
        <div className="relative z-10 w-full h-full bg-[url('/images/clouds.png')] bg-cover bg-position-[top_right_-4rem] lg:bg-top" />
      </div>

      {/* Seção 05 - Sobre o Learny e redirecionamento */}
      <div
        id="portifolio"
        className="bg-[#9AE0FF] flex flex-col items-center px-6 py-12 justify-center w-full lg:min-h-screen"
      >
        <div className="flex flex-col bg-white items-center w-full py-32 gap-18 rounded-2xl">
          {/* Logo */}
          <img
            src={"/images/logo-learny.png"}
            className={"w-56 lg:w-76 bg-cover bg-center"}
          />

          {/* Informações do Learny */}
          <div className="flex flex-col gap-12">
            <div
              id="sobreNos"
              className="flex flex-col mb-30 mt-10 px-40 gap-8"
            >
              <InfoSection
                variant="variant2"
                title="Sobre"
                text="O Learny é um aplicativo dedicado ao ensino de inglês por meio da gamificação para crianças com TEA. Reconhecemos a importância de aprender uma segunda língua para o desenvolvimento em diversos aspectos e percebemos que os aplicativos disponíveis no mercado não são pensados especificamente para esse público, nem consideram suas necessidades específicas."
                image="/images/childs.png"
                imagePosition="left"
                titleColor="text-[#EF5B6A]"
                borderColor="border-[#EF5B6A]"
              />
              <InfoSection
                variant="variant2"
                title="Objetivo"
                text="Para atingir esse objetivo, desenvolvemos o aplicativo com cores em tons pastel, evitando a sobrecarga sensorial; oferecemos a opção de personalização de áudio (inclusive podendo desligá-lo) e utilizamos formas mais arredondadas, além de uma organização visual cuidadosa, para proporcionar uma experiência mais confortável e acessível."
                image="/images/childs2.png"
                imagePosition="right"
                titleColor="text-[#94ECA5]"
                borderColor="border-[#94ECA5]"
              />
            </div>
          </div>

          <div className="bg-[url('/images/mockup.png')] bg-contain bg-no-repeat w-3/4 h-100"></div>
        </div>
      </div>

      {/* Seção 06 - Contatos */}
      <div
        className="w-full h-6"
        style={{
          background:
            "linear-gradient(to right, #EF5B6A 0%, #6CD2FF 31%, #62E37B 70%, #FFFC58 100%)",
        }}
      />
      <div className="w-full flex flex-col justify-center px-8 py-14 md:px-16 lg:px-24 lg:py-18">
        <div className="flex flex-col gap-1.5 text-[#4C4C4C]">
          <h2 className="font-medium text-2xl mb-6">Contatos</h2>
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-1.5">
            {/* Tel */}
            <div className="flex gap-2">
              <strong>Tel:</strong>
              <span>55+ (13)996828069</span>
            </div>

            {/* Instagram - desktop */}
            <div className="hidden lg:flex items-center">
              <img src={"/icons/instagram.png"} className="w-5 h-5 mr-3" />
              {membersContact.map((member, index) => (
                <div key={index} className="flex items-center">
                  <a
                    className="text-blue-700 underline"
                    href={member.instagram}
                    target="_blank"
                  >
                    {member.name}
                  </a>

                  {index < membersContact.length - 1 && (
                    <div className="w-0.5 h-5 bg-[#4c4c4c] mx-3" />
                  )}
                </div>
              ))}
            </div>

            {/* Email */}
            <div className="flex gap-2">
              <strong>Email:</strong>
              <span>jorge.hashiguchi2005@gmail.com</span>
            </div>

            {/* LinkedIn - desktop */}
            <div className="hidden lg:flex items-center">
              <img src={"/icons/linkedin.png"} className="w-5 h-5 mr-3" />
              {membersContact.map((member, index) => (
                <div key={index} className="flex items-center">
                  <a
                    className="text-blue-700 underline"
                    href={member.linkedin}
                    target="_blank"
                  >
                    {member.name}
                  </a>

                  {index < membersContact.length - 1 && (
                    <div className="w-0.5 h-5 bg-[#4c4c4c] mx-3" />
                  )}
                </div>
              ))}
            </div>

            {/* MOBILE: Instagram + LinkedIn juntos */}
            <div className="flex flex-col gap-2 mt-2 lg:hidden">
              {/* Instagram */}
              <div className="flex items-center">
                <img src={"/icons/instagram.png"} className="w-5 h-5 mr-3" />
                {membersContact.map((member, index) => (
                  <div key={index} className="flex items-center">
                    <a
                      className="text-blue-700 underline"
                      href={member.instagram}
                      target="_blank"
                    >
                      {member.name}
                    </a>

                    {index < membersContact.length - 1 && (
                      <div className="w-0.5 h-5 bg-[#4c4c4c] mx-3" />
                    )}
                  </div>
                ))}
              </div>

              {/* LinkedIn */}
              <div className="flex items-center">
                <img src={"/icons/linkedin.png"} className="w-5 h-5 mr-3" />
                {membersContact.map((member, index) => (
                  <div key={index} className="flex items-center">
                    <a
                      className="text-blue-700 underline"
                      href={member.linkedin}
                      target="_blank"
                    >
                      {member.name}
                    </a>

                    {index < membersContact.length - 1 && (
                      <div className="w-0.5 h-5 bg-[#4c4c4c] mx-3" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
