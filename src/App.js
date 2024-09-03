import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favurites from "./components/Favourites";
import HomeHeader from "./components/HomeHeader";

function App() {
  return (
    <BrowserRouter>
    <HomeHeader/>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favorite" element={<Favurites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
