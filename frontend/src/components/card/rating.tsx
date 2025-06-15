import { type FC } from "react";

interface Props {
  rating: number;
  expanded?: boolean;
}

const Rating: FC<Props> = ({ rating, expanded }) => {
  const color =
    rating >= 4.5
      ? "bg-teal-700"
      : rating >= 4
      ? "bg-sky-600"
      : rating >= 3
      ? "bg-amber-600"
      : "bg-rose-700";
  const text =
    rating >= 4.5
      ? "Olağanüstü"
      : rating >= 4
      ? "Harika"
      : rating >= 3
      ? "İyi"
      : rating >= 2
      ? "Kötü"
      : "Parana yazık";
  return (
    <div className="flex items-center gap-2">
      <span className={`${color} text-white px-2 py-1 rounded-md`}>{rating}</span>
      {expanded && <span className="text-xs text-gray-400">{text}</span>}
    </div>
  );
};

export default Rating;
