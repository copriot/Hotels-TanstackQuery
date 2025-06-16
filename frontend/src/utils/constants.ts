export const sortOptions = [
  {
    label: "Seçiniz",
    value: "",
  },
  {
    label: "En ucuz",
    value: "price-asc",
  },
  {
    label: "En pahalı",
    value: "price-desc",
  },
  {
    label: "En yüksek puanlı",
    value: "rating-desc",
  },
  {
    label: "En düşük puanlı",
    value: "rating-asc",
  },
];
export const initialValues = {
  name: "",
  location: "",
  address: "",
  description: "",
  amenities: "",
  price_per_night: 0,
  rating: 0,
  availability: false,
};

export const inputs = [
  { label: "Başlık", name: "name", placeholder: "Seaside Villa" },
  {
    label: "Lokasyon",
    name: "location",
    placeholder: "Ankara",
  },
  {
    label: "Adres",
    name: "address",
    placeholder: "Seaside Villa",
  },
  {
    label: "Açıklama",
    name: "description",
    placeholder: "Deniz manzaralı bir villa...",
  },
  {
    label: "Hizmetler",
    name: "amenities",
    placeholder: "Wi-Fi, Havuz, Park",
  },
  {
    label: "Gecelik Fiyat",
    name: "price_per_night",
    placeholder: "100",
  },
  {
    label: "Puan",
    name: "rating",
    placeholder: "5",
  },
  {
    label: "Müsaitlik",
    name: "availability",
    placeholder: "true",
    type: "checkbox",
  },
];
