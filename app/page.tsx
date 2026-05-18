"use client";

import InfoSection from "@/components/InfoSection";
import Members from "@/components/Members";
import Navbar from "@/components/Navbar";
import { FormEvent, useEffect, useState } from "react";
import {
  bgColors,
  members,
  navItens,
  navItensDropDown,
} from "@/constants";
import CustomAlert from "@/components/CustomAlert";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [alertData, setAlertData] = useState({
    icon: "",
    title: "",
    message: "",
    visible: false,
  })

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setAlertData({
        icon: "/icons/success.png",
        title: "Mensagem enviada com sucesso",
        message: "Sua mensagem foi enviada com sucesso! Aguarde a resposta dos administradores.",
        visible: true,
      })
      setForm({ name: "", email: "", message: "" });
    } else {
      setAlertData({
        icon: "/icons/error.png",
        title: "Erro ao enviar mensagem",
        message: "Ocorreu um erro ao enviar a sua mensagem, tente novamente.",
        visible: true,
      })
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col bg-white">
      {alertData.visible && (
        <CustomAlert 
          icon={alertData.icon}
          title={alertData.title}
          message={alertData.message}
          visible={alertData.visible}
          onClose={() => setAlertData({...alertData, visible: false })}
        />
      )}
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

        {/* Cards de Missão, Visão e Valores */}
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

          <div className="flex flex-col w-full items-center justify-center bg-[#4C4C4C] md:px-14 lg:px-20 px-5 py-14 gap-12 rounded-xl">
            <h1 className="text-[2.2rem] font-extrabold">Valores</h1>
            <div className="grid md:grid-cols-2 gap-4">
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
        id="portfolio"
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
              className="flex flex-col mb-30 mt-10 px-10 md:px-40 gap-8"
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

          {/* Mockup */}
          <div id="telas-learny" className="bg-[url('/images/mockup.png')] bg-contain bg-no-repeat w-3/4 h-100"></div>
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
      <div id="contato" className="w-full flex flex-col justify-center px-8 py-14 md:px-16 lg:px-24 lg:py-18">
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
              {members.map((member, index) => (
                <div key={index} className="flex items-center">
                  <a
                    className="text-blue-700 underline"
                    href={member.instagram}
                    target="_blank"
                  >
                    {member.name}
                  </a>

                  {index < members.length - 1 && (
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
              {members.map((member, index) => (
                <div key={index} className="flex items-center">
                  <a
                    className="text-blue-700 underline"
                    href={member.linkedin}
                    target="_blank"
                  >
                    {member.name}
                  </a>

                  {index < members.length - 1 && (
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
                {members.map((member, index) => (
                  <div key={index} className="flex items-center">
                    <a
                      className="text-blue-700 underline"
                      href={member.instagram}
                      target="_blank"
                    >
                      {member.name}
                    </a>

                    {index < members.length - 1 && (
                      <div className="w-0.5 h-5 bg-[#4c4c4c] mx-3" />
                    )}
                  </div>
                ))}
              </div>

              {/* LinkedIn */}
              <div className="flex items-center">
                <img src={"/icons/linkedin.png"} className="w-5 h-5 mr-3" />
                {members.map((member, index) => (
                  <div key={index} className="flex items-center">
                    <a
                      className="text-blue-700 underline"
                      href={member.linkedin}
                      target="_blank"
                    >
                      {member.name}
                    </a>

                    {index < members.length - 1 && (
                      <div className="w-0.5 h-5 bg-[#4c4c4c] mx-3" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:w-1/2 gap-1.5 mt-12 text-[#4C4C4C]">
          <h2 className="font-medium text-2xl mb-6">Entre em contato</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Nome"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <input
              type="text"
              name="email"
              value={form.email}
              placeholder="Email"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <textarea
              name="message"
              value={form.message}
              placeholder="Mensagem"
              onChange={handleChange}
              className="w-full p-3 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-[#638dab] p-3 rounded-lg font-bold hover:bg-[#6b6b6b] hover:cursor-pointer transition"
            >
              {loading ? (
                <div
                  role="status"
                  className="flex items-center justify-center gap-3"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 animate-spin text-zinc-400 fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 
                                            22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 
                                            50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 
                                            7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 
                                            41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 
                                            25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="text-white">Enviando...</span>
                </div>
              ) : (
                <span className="text-white">Enviar Mensagem</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
