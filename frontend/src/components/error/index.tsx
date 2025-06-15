import { type FC } from "react";

interface Props {
  message: string;
  onRetry: () => void;
}

const Error: FC<Props> = ({ message, onRetry }) => {
  return (
    <div className="w-full mt-20 bg-red-500 p-5 rounded-md text-white text-center">
      <h1 className="text-2xl font-bold">Üzgünüz bir sorun oluştu!</h1>
      <p className="text-sm">{message}</p>
      <button
        className="border border-white px-4 py-2  mt-4 hover:bg-white hover:text-red-500 transition-all duration-300 rounded-lg cursor-pointer"
        onClick={onRetry}
      >
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
