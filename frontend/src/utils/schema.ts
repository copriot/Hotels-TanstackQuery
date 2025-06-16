// formdaki inputların alınan verilerin geçerli olması için gerekli koşulları yazıcaz
import type { PlaceFormValues } from "../types";
import * as yup from "yup";
//sadece harf ve boşluk karakteri kabul eden regex
const nameRegex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/;

export const schema: yup.ObjectSchema<PlaceFormValues> = yup.object().shape({
  name: yup
    .string()
    .required("Başlık alanı zorunludur")
    .matches(nameRegex, "Başlık yalnızca harf ve boşluk karakteri içerebilir."),
  location: yup.string().required("Lokasyon alanı zorunludur").min(3),
  address: yup.string().required("Adres alanı zorunludur").min(3),
  description: yup.string().required("Açıklama alanı zorunludur").min(10),
  amenities: yup.string().required("Hizmetler alanı zorunludur"),
  rating: yup
    .number()
    .required("Puan alanı zorunludur")
    .min(1, "Puan alanı en az 1 olmalıdır")
    .max(5, "Puan alanı en fazla 5 olmalıdır"),
  price_per_night: yup
    .number()
    .required("Fiyat alanı zorunludur")
    .min(20, "Fiyat alanı en az 20 olmalıdır")
    .max(1000, "Fiyat alanı en fazla 1000 olmalıdır"),

  availability: yup.boolean().default(false),
});
