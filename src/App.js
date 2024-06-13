import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Apie_mus from "./routes/Apie_mus";
import Kainos from "./routes/Kainos";
import Kryptys from "./routes/Kryptys";
import Susisiekite from "./routes/Susisiekite";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Apiemus" element={<Apie_mus />} />
        <Route path="/Kainos" element={<Kainos />} />
        <Route path="/Kryptys" element={<Kryptys />} />
        <Route path="/Susisiekite" element={<Susisiekite />} />
      </Routes>
    </>
  );
}

export default App;
