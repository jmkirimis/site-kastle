type Props = {
  title: string;
  text: string;
  image: string;
  imagePosition: string;
  titleColor: string;
  borderColor: string;
};

export default function InfoSection({
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
      <div className="w-full lg:w-1/3 flex justify-center">
        <img
          src={image}
          alt={title}
          className={`rounded-4xl border-8 ${borderColor} object-cover`}
        />
      </div>

      {/* TEXTO */}
      <div
        className={`w-full lg:w-2/3 flex flex-col items-center text-center ${
          isImageLeft ? "lg:items-start lg:text-left" : "lg:items-end lg:text-right"
        }`}
      >
        <h2
          className={`text-3xl font-extrabold mb-3 ${titleColor}`}
        >
          {title}
        </h2>

        <p
          className={`text-lg text-gray-600 leading-relaxed text-justify`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}