import React from "react";
import LittleLemonChicago from "./LittleLemonChicago";
import "./Home.css";
import OrderOnline from "./OrderOnline";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <main>
      <OrderOnline />
      <section className="testimonials">
        <div className="container">
          <Testimonials />
        </div>
      </section>
      <LittleLemonChicago />
    </main>
  );
};

export default Home;
