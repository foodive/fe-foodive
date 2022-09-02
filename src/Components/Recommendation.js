import React from "react";

const Recommendation = ({ restaurantData, location, retrieveRestaurant }) => {
  
  let displayedCategories
  if (restaurantData.categories.length > 1) {
    console.log("YES!")
    displayedCategories = restaurantData.categories.join(", ")
  } else if (restaurantData.categories.length === 1){
    displayedCategories = restaurantData.categories[0]
  }
  
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
              <img src={restaurantData.image_url} alt="restaurant cover"></img>
            </div>
            <section className="details">
              <section className="properties">
                <div className="ratings">
                  <p>{restaurantData.rating}</p>
                </div>
                <p className="dot">●</p>
                <p className="cuisine">
                  {displayedCategories}
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
                  {restaurantData.display_address[0] + ", "}{restaurantData.display_address[1]}
                </p> 
              </section>
            </section>
          </section>
          <div className="section-splitter"></div>
          <section className="map-container">
            {location.latitude && location.longitude ? 
            <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${restaurantData.coordinates.latitude},${restaurantData.coordinates.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${restaurantData.coordinates.latitude},${restaurantData.coordinates.longitude}&key=AIzaSyCQmD_RAws3PNa65j9hC1wxuGihWjc_dP8`} alt='Restaurant location on map'/>:
            null
            }
          </section>
        </section>
        <button onClick={() => retrieveRestaurant()} className="submit">
          New Random Restaurant
        </button>
      </main>
    );
  }
};

export default Recommendation;
