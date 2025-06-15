import { type FC } from "react";
import { Link } from "react-router-dom";
import { useGetPlaces } from "../service";

const Header: FC = () => {
  const { data } = useGetPlaces();
  return (
    <header className="border-b border-orange-200">
      <div className="container flex justify-between">
        <div className="flex items-center gap-10 justify-between w-full">
          <h1 className="font-bold text-xl md:text-2xl bg-gradient-to-r from-orange-500  to-teal-600 text-transparent bg-clip-text">
            Tripster
          </h1>
          <nav className="flex items-center gap-5">
            <Link to="/" className="relative">
              Oteller
              {data ? (
                <span className="text-sm  text-orange-400 bg-amber-100 rounded-full absolute right-[-10px] top-[-9px] ">
                  {data.length}
                </span>
              ) : (
                <></>
              )}
            </Link>
            <Link to="/" className="max-md:hidden">
              Popüler
            </Link>
            <Link to="/create">Oluştur</Link>
          </nav>
          <div className="flex items-center gap-2">
            <button className="header-button border-orange-400 max-md:hidden hover:bg-orange-400 hover:text-white">
              Kayıt Ol
            </button>
            <button className="header-button bg-orange-500 hover:bg-orange-500/90 text-white ">
              Giriş Yap
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
