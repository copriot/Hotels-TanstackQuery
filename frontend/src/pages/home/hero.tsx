import { type FC } from "react";

const Hero: FC = () => {
  return (
    <div className="hero">
      <div className="text-center text-white">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-5">
          Tripster ile konaklama rezervasyonu yap
        </h1>
        <p className="md-text-lg lg:text-2xl">
          Dünya çapında 1,340,076 oda seni bekliyor
        </p>
      </div>
    </div>
  );
};

export default Hero;
