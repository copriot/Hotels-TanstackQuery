import { type FC } from "react";
import { sortOptions } from "../../utils/constants";
import { useGetPlaces } from "../../service";
import { useSearchParams } from "react-router-dom";

const Filter: FC = () => {
  const { data } = useGetPlaces({});
  const [searchParams, setSearchParams] = useSearchParams();
  // otellerin şehirlerinden oluşan benzersiz bir dizi oluştur
  const locations = [...new Set(data?.map((i) => i.location))];

  const handleChange = (name: string, value: string) => {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };
  console.log(locations);
  return (
    <form className="flex flex-col gap-4 lg:gap-10 lg:mt-15 lg:sticky top-10 bg-amber-400/10 rounded-lg p-5">
      <div className="field">
        <label>Nereye gitmek istiyorsunuz?</label>
        <select
          className="input"
          onChange={(e) => handleChange("location", e.target.value)}
          value={searchParams.get("location") || ""}
        >
          <option value="">Seçiniz</option>
          {locations?.map((c, index) => (
            <option key={index} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label>Konaklama yeri adına göre ara</label>
        <input
          className="input"
          type="text"
          placeholder="örn:Seaside Villa"
          value={searchParams.get("title") || ""}
          onChange={(e) => handleChange("title", e.target.value)}
        />
      </div>
      <div className="field">
        <label>Sıralama ölçütü</label>
        <select
          className="input"
          value={searchParams.get("order") || ""}
          onChange={(e) => handleChange("order", e.target.value)}
        >
          {sortOptions.map((i, index) => (
            <option key={index} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-end">
        <button
          type="reset"
          onClick={() => setSearchParams({})}
          className="header-button bg-teal-500 hover:bg-teal-500/90 text-white"
        >
          Filtreleri Temizle
        </button>
      </div>
    </form>
  );
};

export default Filter;
