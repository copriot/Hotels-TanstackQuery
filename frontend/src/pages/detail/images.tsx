import { type FC } from "react";

interface Props {
  image: string;
}

const Images: FC<Props> = ({ image }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 mt-4">
      <div className="w-full ">
        <img
          src={image}
          alt="hotel-image"
          className="rounded-lg object-cover size-full"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img src="/image-1.jpeg" className="hotel-image" />
        <img src="/image-2.jpeg" className="hotel-image" />
        <img src="/image-3.jpeg" className="hotel-image" />
        <img src="/image-4.jpeg" className="hotel-image" />
      </div>
    </div>
  );
};

export default Images;
