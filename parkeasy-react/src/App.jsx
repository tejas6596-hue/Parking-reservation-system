import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FindParking from "./pages/FindParking";
import Reservation from "./pages/Reservation";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/find-parking" element={<FindParking />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;