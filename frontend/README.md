## Kütüphaneler

- React
- Tailwind CSS
- React Router DOM - react-router-dom
- React Query - @tanstack/react-query
- Formik - formik
- Yup - yup
- Axios - axios
- React Icons - react-icons
- React Toastify - react-toastify

# Projeyi Çalıştırmak için

1.Projeyi clonelayın
2.'cd backend' konumlanın
3.Backend bağımlılıklarını yüklemek için 'npm install' yapın
4.Backendi ayağa kaldırmak için 'npm start'
4.ardından yeni bir terminalde 'cd frontend' ile konumlanın
5.Frontend bağımlılıklarını yüklemek için 'npm install' yapın
6.Projeyi çalıştırmak için 'npm run dev' yazın.

# Tanstack Query

-React projelerinde api'den gelen cevabı'ın stateini daha kolay ve optimize bir şekilde yönetmek için kullanılır.

## Özellikler

- Otomatik olarak loading,error,data statelerini yönetir.
- Otomatik olarak cache işlemi uygular.
- Api isteği başarısız olursa emin olmak için 3 kez daha dener.
- Component'lardaki karışıklılığı azaltır
- Api'dan gelen veriler için Redux ihtiyacı kalmaz
- Birden fazla component'ta aynı api isteğini atarsanız, sadece bir kere api isteği atılır, gelen cevap cache'de tutulur ve diğer componen'larda cache'ten okunur.

## Tanstack Query Hook'ları

- useQuery
- useMutation
