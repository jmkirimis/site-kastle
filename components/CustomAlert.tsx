type Props = {
  icon: string;
  title: string;
  message: string;
  visible: boolean;
  onClose: () => void;
};

export default function CustomAlert({
  icon,
  title,
  message,
  visible,
  onClose,
}: Props) {
  return (
    <div
      className={`fixed inset-0 z-40 flex items-start justify-end 
            bg-black/40 transition-opacity duration-300
            ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
        relative top-16 right-0 rounded-lg w-1/3 max-w-[90%]
        p-8 bg-white shadow-[0_0_12px_rgba(0,0,0,0.25)]
        transform transition-transform duration-500 ease-in-out
        ${visible ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex gap-8 items-center">
          <div
            className="w-24 h-24 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${icon || "/icons/success.png"})`,
            }}
          />
          <div className="flex flex-col justify-center text-[#4c4c4c]">
            <span className="font-semibold text-lg">{title}</span>
            <span>{message}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
