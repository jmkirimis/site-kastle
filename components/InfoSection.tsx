type Props = {
  variant?: "variant1" | "variant2";
  title: string;
  text: string;
  image: string;
  imagePosition: string;
  titleColor: string;
  borderColor: string;
};

export default function InfoSection({
  variant="variant1",
  title,
  text,
  image,
  imagePosition = "right",
  titleColor = "text-red-400",
  borderColor = "border-red-400",
}: Props) {
  const isImageLeft = imagePosition === "left";

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 my-10 ${
        !isImageLeft ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* IMAGEM */}
      <div
        className={`w-full lg:w-1/3 flex justify-center
          ${variant == "variant2" && `border-20 rounded-xl ${borderColor}`}
        `}
      >
        <img src={image} alt={title} className={`${variant == "variant2" ? "border-8 border-white" : "border-10 rounded-4xl"} ${borderColor} object-cover`} />
      </div>

      {/* TEXTO */}
      <div
        className={`w-full lg:w-2/3 flex flex-col items-center text-center ${
          isImageLeft
            ? "lg:items-start lg:text-left"
            : "lg:items-end lg:text-right"
        }`}
      >
        <h2
          className={`mb-3 
            ${variant == "variant2" ? "text-[#4c4c4c]" : titleColor}
            ${variant == "variant2" ? "text-4xl font-bold" : "text-3xl font-extrabold"}`}
        >
          {title}
        </h2>

        <p className={`text-lg text-gray-600 leading-relaxed text-justify`}>
          {text}
        </p>
      </div>
    </div>
  );
}
