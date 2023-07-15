import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import CardsDetail from "./components/CardsDetail";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />}></Route>
        <Route path="/cart/:id" element={<CardsDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
