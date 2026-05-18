"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import { colorsInactives, members } from "@/constants";

export default function Members() {
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