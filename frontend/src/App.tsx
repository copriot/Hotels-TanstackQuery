import { BrowserRouter, Routes, Route } from "react-router-dom";
import { type FC } from "react";
import Home from "./pages/home";
import Create from "./pages/create";
import Detail from "./pages/detail";
import Header from "./components/header";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
