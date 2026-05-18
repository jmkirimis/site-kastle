"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

export default function Members() {
  const members = [
    {
      name: "João",
      description: "João Marcos Alcsandro Kirimis é o responsável pela manutenção do código e criação de telas por meio da programação, além de liderar a parte de programação e auxiliar na organização do grupo.",
      image: "/images/members/joao.jpg",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-marcos-alecsandro-kirimis-443218213/",
      linkedinLabel: "linkedin-joao-kirimis",
      github: "https://github.com/jmkirimis",
      githubLabel: "github-jmkirimis",
    },
    {
      name: "Jorge",
      description: "Jorge Massaru Hashiguchi da Silva é o nosso UX/UI designer, responsável por prototipar os sites e aplicativos, além de prototipar conteúdos para o jogo por ter experiência com o idioma inglês, também faz a organização do grupo.",
      image: "/images/members/jorge.jpg",
      linkedin: "https://www.linkedin.com/in/jorge-hahsiguchi/",
      linkedinLabel: "link-linkedin-jorge-massaru",
      github: "https://github.com/JorgeMassaru",
      githubLabel: "link-github-jorge-massaru",
    },
    {
      name: "Guilherme",
      description: "Guilherme Leandro Martins é o nosso responsável pelo artigo e realização da manutenção dos artefatos para entrega durante os semestres.",
      linkedin: "https://www.linkedin.com/in/guilherme-leandro-martins/",
      linkedinLabel: "link-linkedin-guilherme-leandro",
      github: "https://github.com/guiMartins3",
      githubLabel: "link-github-guilherme-leandro",
      image: "/images/members/guilherme.jpg",
    },
    {
      name: "Gabriel",
      description: "Gabriel Yoshimitsu Cunha Shimabukuro ajudou na manutenção dos artefatos.",
      linkedin: "https://www.linkedin.com/in/gabriel-yoshimitsu/",
      linkedinLabel: "link-linkedin-gabriel",
      github: "https://github.com/G4BR13LY05H1M1T5U",
      githubLabel: "link-github-gabriel",
      image: "/images/members/gabriel.jpg",
    },
  ];

  const colorsInactives = ["bg-[#EF5B6A]", "bg-[#6CD2FF]", "bg-[#94ECA5]", "bg-[#FFFC58]"]

  const [active, setActive] = useState(0);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-24 px-8 py-20">

      {/* SWIPER */}
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
        className="w-62.5 h-75"
      >
        {members.map((pessoa, index) => {
          const isActive = index === active;

          return (
            <SwiperSlide key={index} className="rounded-3xl overflow-hidden">
              <div className="relative w-full h-full">

                {/* IMAGEM */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${pessoa.image})`,
                  }}
                />

                {/* OVERLAY BASE */}
                <div className="absolute inset-0 bg-black/40" />

                {/* OVERLAY EXTRA SE NÃO ESTIVER ATIVO */}
                {!isActive && (
                  <div className={`absolute inset-0 ${colorsInactives[index]}`} />
                )}

                {/* NOME */}
                <div className="absolute bottom-4 w-full text-center z-10">
                  <span className="text-white text-2xl font-semibold">
                    {pessoa.name}
                  </span>
                </div>

              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* TEXTO DO INTEGRANTE */}
      <div className="max-w-lg text-center lg:text-start">
        <h2 className="text-4xl text-[#4c4c4c] font-extrabold mb-4">
          Nossa Equipe
        </h2>

        <p className="text-xl text-gray-600 text-justify mb-4">
          {members[active].description}
        </p>
        {/* LINKEDIN */}
<div className="flex items-center gap-2">
  <h3 className="text-[#4c4c4c] font-bold">
    Linkedin:
  </h3>

  <a
    href={members[active].linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    {members[active].linkedinLabel}
  </a>
</div>

{/* GITHUB */}
<div className="flex items-center gap-2">
  <h3 className="text-[#4c4c4c] font-bold">
    Github:
  </h3>

  <a
    href={members[active].github}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    {members[active].githubLabel}
  </a>
</div>
      </div>
    </section>
  );
}