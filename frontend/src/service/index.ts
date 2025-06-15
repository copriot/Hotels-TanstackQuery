import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import type { PlacesResponse } from "../types";

export const useGetPlaces = (paramsObj?: any) => {
  return useQuery({
    queryKey: ["places", paramsObj], // api sorgu için benzersiz isim
    queryFn: () =>
      api
        .get<PlacesResponse>("/places", { params: paramsObj })
        .then((res) => res.data.places), //api istegi atan fonksiyon
    retry: 3, // 3 istek yapılır.
    retryDelay: 1000, // 1 saniye bekler.
    staleTime: 0, // cachdeki verinin "taze/geçerli" kalma süresi
    gcTime: 300000, // cachdeki verinin bayat olma temizlenme süresi
  });
};
