import { type FC } from "react";
import { useParams } from "react-router-dom";
import { useGetPlace } from "../../service";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Images from "./images";
import Info from "./info";
import Overview from "./overview";
import Button from "./button";
import Container from "./container";

const Detail: FC = () => {
  const { id } = useParams();
  const { isLoading, error, data, refetch } = useGetPlace(id as string);

  if (isLoading)
    return (
      <Container>
        <Loader />
      </Container>
    );
  if (error)
    return (
      <Container>
        <Error onRetry={refetch} message={error.message} />
      </Container>
    );
  if (!data) return;
  return (
    <Container>
      <Images image={data?.image_url} />
      <Info place={data} />
      <Overview place={data} />
      <Button id={data.id} />
    </Container>
  );
};

export default Detail;
