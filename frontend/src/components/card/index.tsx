import { type FC } from "react";
import { type Place } from "../../types";
import { Link } from "react-router-dom";
import Status from "./status";
import Rating from "./rating";

interface Props {
  place: Place;
}
const Card: FC<Props> = ({ place }) => {
  return (
    <Link
      to={`/place/${place.id}`}
      className="border border-orange-200 rounded-lg p-5 grid grid-cols-3 min-h-[300px] gap-3 hover:shadow-lg"
    >
      <div>
        <img
          src={place.image_url}
          alt={place.name}
          className="size-full object-cover rounded-lg"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg text-amber-500">{place.name}</h1>
            <Status availability={place.availability} />
          </div>
          <p>{place.location}</p>
          <div className="flex gap-4 mb-2">
            {place.amenities.slice(0, 3).map((i, key) => (
              <span
                className="border border-rose-300 py-1 px-2 rounded-md text-xs text-rose-400 font-semibold"
                key={key}
              >
                {i.charAt(0).toUpperCase() + i.slice(1)}
              </span>
            ))}
          </div>
          <Rating rating={place.rating} expanded />
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-2xl font-bold text-teal-600">
            ${place.price_per_night}
          </span>
          <span className="text-xs text-gray-400">vergiler ve ücretler dahildir</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
