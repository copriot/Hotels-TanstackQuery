import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import type { PlaceData, PlaceResponse, PlacesResponse } from "../types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useGetPlaces = (paramsObj?: PlaceData) => {
  console.log(paramsObj);
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

export const useCreatePlace = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["create-place"],
    mutationFn: (body: PlaceData) => api.post("/places", body),
    onSuccess: () => {
      toast.success("Konaklama noktası başarıyla oluşturuldu");
      navigate("/");
    },
    onError: () => {
      toast.error("Yer oluşturulurken bir hata oluştu");
    },
  });
};
export const useGetPlace = (id: string) => {
  return useQuery({
    queryKey: ["place"],
    queryFn: () => api.get<PlaceResponse>(`/place/${id}`).then((res) => res.data.place),
  });
};

export const useDeletePlace = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["delete-place"],
    mutationFn: (id: string) => api.delete(`/place/${id}`),
    onSuccess: () => {
      toast.success("Konaklama noktası başarıyla silindi");
      navigate("/");
    },
    onError: () => {
      toast.error("Konaklama noktası silinirken bir hata oluştu");
    },
  });
};
