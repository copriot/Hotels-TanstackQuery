import { type FC } from "react";
import { useDeletePlace } from "../../service";

interface Props {
  id: number;
}

const Button: FC<Props> = ({ id }) => {
  const { mutate, isPending } = useDeletePlace();
  return (
    <div className="flex justify-end my-5">
      <button
        onClick={() => mutate(id.toString())}
        disabled={isPending}
        className="border border-zinc-300 py-1 px-4 rounded-md transition hover:bg-zinc-100 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Kaldır
      </button>
    </div>
  );
};

export default Button;
