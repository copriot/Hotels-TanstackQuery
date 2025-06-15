import { type FC } from "react";
import { useGetPlaces } from "../../service";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";
import { useSearchParams } from "react-router-dom";

const List: FC = () => {
  const [searchParams] = useSearchParams();
  const paramsObj = Object.fromEntries(searchParams.entries());
  const { data, isLoading, error, refetch } = useGetPlaces(paramsObj);
  console.log(paramsObj);

  if (isLoading) return <Loader />;
  if (error) return <Error message={error.message} onRetry={refetch} />;
  return (
    <div>
      <h1 className="text-2xl font-bold text-orange-400 mt-5">
        Yakınınızdaki Lokasyonlar
      </h1>
      <div className="grid gap-5 ">
        {data?.map((place) => (
          <Card key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default List;
