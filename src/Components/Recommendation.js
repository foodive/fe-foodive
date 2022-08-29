import React from "react";
import { data2 } from "../mockData";

const Recommendation = ({ restaurantData, setRestaurantData }) => {
  if (!restaurantData) {
    return <p>error</p>;
  } else {
    return (
      <main>
        <section className="info-panel">
          <header className="info-header">
          <h2 className="name">{restaurantData.name}</h2>
          </header>
          <section className="information">
            <div className="restaurant-image">
              <img src={restaurantData.image_url} alt="restaurant photo"></img>
            </div>
            <section className="details">
              <section className="properties">
                <div className="ratings">
                  <p>{restaurantData.rating}</p>
                </div>
                <p className="dot">●</p>
                <p className="cuisine">
                  {restaurantData.categories[0].title + ", "}
                  {restaurantData.categories[1].title  + ", "}
                  {restaurantData.categories[2].title + ", "}
                </p>
                <p className="dot">●</p>
                <p className="cost">{restaurantData.price}</p>
                <p className="dot">●</p>
                <div className="phone-container">
                  <p className="phone-icon">📞</p>
                  <p className="phone-number">{restaurantData.display_phone}</p>
                </div>
              </section>
              <div className="info-splitter"></div>
              <section className="address-container">
                <p className="address">
                  {restaurantData.location.display_address[0] + ", "}{restaurantData.location.display_address[1]}
                </p> 
              </section>
            </section>
          </section>
          <div className="section-splitter"></div>
          <section className="map-container"></section>
        </section>
        <button onClick={() => setRestaurantData(data2)} className="submit">
          New Random Restaurant
        </button>
      </main>
    );
  }
};

export default Recommendation;
