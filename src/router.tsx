import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Event from "./views/Event/Event";
import DetailEvent from "./views/Event/DetailEvent";
import Contact from "./views/Contact/Contact";
import Payment from "./views/Payment/Payment";
import PaymentSuccess from "./views/Payment/PaymentSuccess";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/:id" element={<DetailEvent />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
    </Routes>
  );
};

export default Router;
