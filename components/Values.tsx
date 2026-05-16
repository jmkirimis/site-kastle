export default function Values() {
  const items = [
    {
      title: "Inclusão",
      text: "Criar experiências acessíveis que respeitem as individualidades, necessidades e formas de aprendizagem de cada criança.",
    },
    {
      title: "Empatia",
      text: "Desenvolver tecnologia com sensibilidade, compreensão e respeito às experiências de crianças com TEA e suas famílias.",
    },
    {
      title: "Inovação",
      text: "Utilizar criatividade, gamificação e tecnologia para reinventar a forma como o aprendizado acontece.",
    },
    {
      title: "Acessibilidade",
      text: "Garantir interfaces, interações e conteúdos pensados para reduzir barreiras cognitivas, sensoriais e emocionais.",
    },
    {
      title: "Aprendizado Lúdico",
      text: "Valorizar o brincar, a curiosidade e a interação como ferramentas essenciais para o desenvolvimento educacional.",
    },
    {
      title: "Personalização",
      text: "Reconhecer que cada criança aprende de maneira única, adaptando experiências conforme seus interesses e necessidades.",
    },
    {
      title: "Responsabilidade Social",
      text: "Contribuir para uma educação mais justa e alinhada aos princípios de inclusão e redução das desigualdades.",
    },
    {
      title: "Colaboração",
      text: "Construir soluções ouvindo professores, especialistas, famílias e usuários para gerar impacto real e positivo.",
    },
  ];

  const colors = [
    "bg-[#EF5B6A]",
    "bg-[#6CD2FF]",
    "bg-[#94ECA5]",
    "bg-[#FFFC58]",
    "bg-[#9AE0FF]",
    "bg-[#B8F1D6]",
    "bg-[#FFD7A6]",
    "bg-[#C8B3FF]",
  ];

  return (
    <section id="valores" className="w-full py-12 md:py-16 lg:py-20 px-0 min-h-[320px]">
      <div className="w-full">
        <h2 className="text-4xl font-extrabold text-[#4c4c4c] mb-8 px-6 md:px-12 lg:px-20">Valores</h2>

        <div className="px-6 md:px-12 lg:px-20">
          <div className="rounded-3xl p-0">
            <div className="bg-white rounded-2xl p-0">
              <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory -mx-2 no-scrollbar">
                {items.map((item, idx) => (
                  <div key={idx} className="flex-none px-2 snap-start">
                    <div className="bg-white rounded-xl p-6 border border-gray-100 min-w-[70vw] md:min-w-[55vw] lg:min-w-[45vw]" style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
                      <div className="flex gap-6 items-center">
                        <div className={`w-1 h-12 bg-transparent flex items-center justify-center`}> 
                          <span className={`${colors[idx % colors.length]} block w-0.5 h-12 rounded-sm`}></span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#4c4c4c] mb-2">{item.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
