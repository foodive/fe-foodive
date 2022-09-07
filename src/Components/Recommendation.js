import React, { useEffect } from "react";
import Error from "./Error";
import Loading from "./Loading";

const Recommendation = ({ restaurantData, location, retrieveRestaurant, error, setCuisine, matchCuisine, cuisine }) => {

  useEffect(() => {
    setCuisine(`${matchCuisine}`)
    if (location.latitude && location.longitude && cuisine !== ""){
      retrieveRestaurant()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  const displayedCategories = restaurantData.categories.join(", ");
  
  if (error) {
    return <Error error={error} />
  } else if (restaurantData.name === '') {
    return <Loading />
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
              <p className="cuisine">
                {displayedCategories}
              </p>
              <div className="info-splitter"></div>
              <section className="properties">
                <div className="ratings">
                  <p>{restaurantData.rating}</p>
                </div>
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
              <img 
                className="map-img"
                src={`https://maps.googleapis.com/maps/api/staticmap?center=${restaurantData.coordinates.latitude},${restaurantData.coordinates.longitude}&zoom=11.5&size=400x300&markers=color:red%7Clabel:B%7C${restaurantData.coordinates.latitude},${restaurantData.coordinates.longitude}&markers=color:green%7Clabel:A%7C${location.latitude},${location.longitude}&key=AIzaSyCQmD_RAws3PNa65j9hC1wxuGihWjc_dP8`}
                alt='Restaurant location on map'
              />
              : null
            }
          </section>
        </section>
        <button onClick={() => retrieveRestaurant()} className="submit">
          New Random Restaurant
        </button>
      </main>
    );
  }
}

export default Recommendation;
