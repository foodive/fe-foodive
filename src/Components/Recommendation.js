import React from "react";
import { data2 } from "../mockData";

const Recommendation = ({ restaurantData, setRestaurantData }) => {
  if (!restaurantData) {
    return <p>error</p>;
  } else {
    return (
      <section className="recommendation">
        <section className="info-panel">
          <h2>{restaurantData.name}</h2>
          <section className="information">
            <div className="restaurant-image">
              <p>{restaurantData.image_url}</p>
            </div>
            <section className="details">
              <section className="properties">
                <div className="ratings">
                  <p>{restaurantData.rating}</p>
                </div>
                <p className="cuisine">
                  {restaurantData.categories[0].title},
                  {restaurantData.categories[1].title},
                  {restaurantData.categories[2].title}
                </p>
                <p className="cost">{restaurantData.price}</p>
                <div className="phone-container">
                  <p className="phone-icon">📞</p>
                  <p className="phone-number">{restaurantData.display_phone}</p>
                </div>
              </section>
              <p className="address">
                {restaurantData.location.display_address[0]},
                {restaurantData.location.display_address[1]}
              </p>
            </section>
          </section>
          <section className="map-container"></section>
        </section>
        <button onClick={() => setRestaurantData(data2)} className="submit">
          New Random Restaurant
        </button>
      </section>
    );
  }
};

export default Recommendation;
