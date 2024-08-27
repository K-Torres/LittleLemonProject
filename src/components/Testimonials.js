import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <div className="testimonials-box">
        <div className="testimonials-card">
          <div className="circle"></div> <h3>Samuel</h3>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <i>
            "All the food was delicious."
          </i>
        </div>
        <div className="testimonials-card">
          <div className="circle"></div> <h3>Maria</h3>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <i>
            "My favorite spot for fresh and flavorful food."
          </i>
        </div>
        <div className="testimonials-card">
          <div className="circle"></div>
          <h3>Andres</h3>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <i>"The family charm and fantastic service make it perfect."</i>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
