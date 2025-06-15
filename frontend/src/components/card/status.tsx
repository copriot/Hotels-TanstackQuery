import { type FC } from "react";
import { MdOutlineEventAvailable as Available } from "react-icons/md";
import { CgUnavailable as Unavailable } from "react-icons/cg";

interface Props {
  availability: boolean;
  expanded?: boolean;
}

const Status: FC<Props> = ({ availability, expanded }) => {
  return (
    <div
      className={`
    flex items-center gap-4 text-xl p-2 border-zinc-300 rounded-md ${
      availability ? "text-teal-700 bg-teal-200" : "text-rose-700 bg-rose-200"
    }
    `}
    >
      {availability ? <Available /> : <Unavailable />}
      {expanded && <p>{availability ? "Şuan Konaklanabilir" : "Şuan Müsait Değil"}</p>}
    </div>
  );
};

export default Status;
