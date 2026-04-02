"use client"

import InfoSection from "@/components/InfoSection";
import Members from "@/components/Members";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const navItens = ["Conheça o Learny", "Manual da Marca", "Repositório no Github", "Artigo Científico"]
  const membersContact = [
    {
      name: "João Marcos",
      instagram: "https://www.instagram.com/joaokirimis/",
      linkedin: "https://www.linkedin.com/in/joão-marcos-alecsandro-kirimis-443218213"
    },
    {
      name: "Jorge",
      instagram: "https://www.instagram.com/jooj_hashiguchi/",
      linkedin: "https://www.linkedin.com/in/jorge-hahsiguchi"
    },
    {
      name: "Guilherme",
      instagram: "https://www.instagram.com/guiix_33/",
      linkedin: "https://www.linkedin.com/in/guilherme-leandro-martins"
    },
  ]
  
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
      <div className="flex flex-col items-center justify-center gap-1 p-8 md:px-20 lg:px-40 w-full min-h-screen">
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
          title="Atividades acadêmicas"
          text="Com nosso principal projeto, o Learny, participamos de diversas apresentações, 
                com destaque para a Oracle e a FTX (Fatec Experience), onde tivemos a oportunidade 
                de testar o aplicativo com estudantes com TEA, que aprovaram a experiência; 
                também apresentamos no HubTec e em outros eventos para a comunidade."
          image="/images/ftx.png"
          imagePosition="left"
          titleColor="text-blue-400"
          borderColor="border-blue-400"
        />

        <InfoSection
          title="Conquistas"
          text="Uma de nossas conquistas foi a escolha do nosso projeto para apresentação na 
                Oracle Brasil, na qual alcançamos o segundo lugar entre os projetos apresentados."
          image="/images/oracle.png"
          imagePosition="right"
          titleColor="text-yellow-400"
          borderColor="border-yellow-400"
        />

        <InfoSection
          title="Importância"
          text="A Kastle é essencial para apoiar crianças neurodivergentes, especialmente no 
                espectro do autismo, no desenvolvimento de habilidades socioemocionais e técnicas, 
                com foco no inglês, por meio de um aprendizado acessível, envolvente e eficaz."
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
      <div className="bg-[#9AE0FF] flex flex-col items-center px-6 py-12 justify-center w-full lg:min-h-screen">
        <div className="flex flex-col bg-white items-center w-full py-32 gap-18 rounded-2xl">
          {/* Logo */}
          <img
            src={"/images/logo-learny.png"}
            className={"w-56 lg:w-76 bg-cover bg-center"}
          />

          {/* Informações do learny */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col w-full justify-center items-center gap-6">
              <h1 className="text-[26pt] font-extrabold text-[#4C4C4C]">
                Sobre
              </h1>
              <span className="w-2/3 text-xl text-zinc-500 text-justify">
                  O Learny é um aplicativo dedicado ao ensino de inglês por meio da gamificação 
                  para crianças com TEA. Reconhecemos a importância de aprender uma segunda língua 
                  para o desenvolvimento em diversos aspectos e percebemos que os aplicativos 
                  disponíveis no mercado não são pensados especificamente para esse público, nem 
                  consideram suas necessidades específicas.
              </span>
            </div>

            <div className="flex flex-col w-full justify-center items-center gap-6">
              <h1 className="text-[26pt] font-extrabold text-[#4C4C4C]">
                Objetivo
              </h1>
              <span className="w-2/3 text-xl text-zinc-500 text-justify">
                  Para atingir esse objetivo, desenvolvemos o aplicativo com cores em tons pastel, 
                  evitando a sobrecarga sensorial; oferecemos a opção de personalização de áudio 
                  (inclusive podendo desligá-lo) e utilizamos formas mais arredondadas, além de uma 
                  organização visual cuidadosa, para proporcionar uma experiência mais confortável e acessível.
              </span>
            </div>
          </div>

          {/* Botão de redirecionamento */}
          <button className="w-54 p-3 bg-[#EF5B6A] rounded-full">
            <div className="flex w-full items-center justify-center h-8 border-3 py-5 text-white border-white rounded-full text-xl font-bold">
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
          <div className="grid grid-cols-2 gap-1.5">

            <div className="flex gap-2">
              <strong>Tel:</strong>
              <span>55+ (13)996828069</span>
            </div>

            <div className="flex items-center">
              <img
                src={"/icons/instagram.png"}
                className={"w-5 h-5 mr-3"}
              />
              {membersContact.map((member, index) => (
                <div 
                  key={index}
                  className="flex items-center"
                >
                    <a
                      className="text-blue-700 underline"
                      href={member.instagram}
                      target="_blank"
                    >
                      {member.name}
                    </a>

                    {index < membersContact.length - 1 && (
                      <div
                        className={`w-0.5 h-5 bg-[#4c4c4c] mx-3`}
                      />
                    )}
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <strong>Email:</strong>
              <span>jorge.hashiguchi2005@gmail.com</span>
            </div>

            <div className="flex items-center">
              <img
                src={"/icons/linkedin.png"}
                className={"w-5 h-5 mr-3"}
              />
              {membersContact.map((member, index) => (
                <div 
                  key={index}
                  className="flex items-center"
                >
                    <a
                      className="text-blue-700 underline"
                      href={member.linkedin}
                      target="_blank"
                    >
                      {member.name}
                    </a>

                    {index < membersContact.length - 1 && (
                      <div
                        className={`w-0.5 h-5 bg-[#4c4c4c] mx-3`}
                      />
                    )}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
