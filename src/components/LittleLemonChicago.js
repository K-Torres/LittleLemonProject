import React from "react";
import "./LittleLemonChicago.css";

const LittleLemonChicago = () => {
  return (
    <section className="container">
      <div className="about">
        <div className="about-box">
          <h2>Little Lemon</h2>
          <p className="about-location">Chicago</p>
          <p className="black-text">
            Welcome to our family-owned Mediterranean restaurant, where
            tradition meets innovation. We are passionate about bringing you the
            authentic flavors of the Mediterranean, lovingly crafted from
            traditional recipes and served with a modern twist. Our commitment
            to quality ingredients and culinary excellence shines through in
            every dish, offering you a dining experience that is both familiar
            and exciting. Join us and enjoy a warm, welcoming atmosphere where
            every meal is a celebration of heritage and creativity.
          </p>
        </div>
        <div className="about-box">
          <img
            src="https://neighbors.columbia.edu/sites/default/files/styles/cu_crop/public/content/ChefCharlesChefQuie-Newsletter_0.png?itok=tgGAd6eg"
            alt="Little Lemon's chefs"
          ></img>
          <img
            src="https://neighbors.columbia.edu/sites/default/files/styles/cu_crop/public/content/ChefCharlesChefQuie1-Article.png?itok=3LYaYNwk"
            alt="Little Lemon's chefs"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default LittleLemonChicago;
