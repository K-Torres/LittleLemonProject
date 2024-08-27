import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Chicago from "./components/LittleLemonChicago";
import Footer from "./components/Footer";
import Homepage from "./components/Home";
import Nav from "./components/Nav";
import Specials from "./components/OrderOnline";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Chicago />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/order-online" element={<Specials />} />
        <Route path="/reservations" element={<BookingForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
