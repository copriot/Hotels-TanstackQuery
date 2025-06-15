import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//queryClient tanımla
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  //queryClientProvider ile queryClient'i kullan
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
