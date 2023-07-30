import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Event from "./views/Event/Event";
import DetailEvent from "./views/Event/DetailEvent";
import Contact from "./views/Contact/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/:id" element={<DetailEvent />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
