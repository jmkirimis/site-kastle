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
    },
    {
      name: "Jorge",
      description: "Jorge Massaru Hashiguchi da Silva é o nosso UX/UI designer, responsável por prototipar os sites e aplicativos, além de prototipar conteúdos para o jogo por ter experiência com o idioma inglês, também faz a organização do grupo . Ele também é um dos idealizadores do artigo junto com o João e o Guilherme.",
      image: "/images/members/jorge.jpg",
    },
    {
      name: "Guilherme",
      description: "Guilherme Leandro Martins é o nosso responsável pelo artigo e realização da manutenção dos artefatos para entrega durante os semestres.",
      image: "/images/members/guilherme.jpg",
    },
    {
      name: "Gabriel",
      description: "Gabriel Yoshimitsu Cunha Shimabukuro ajudou na manutenção dos artefatos.",
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
        className="w-[250px] h-[300px]"
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

        <p className="text-xl text-gray-600 text-justify">
          {members[active].description}
        </p>
      </div>
    </section>
  );
}