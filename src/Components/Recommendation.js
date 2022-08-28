import React from "react";


const Recommendation = () => {
  return (
    <section className="recommendation">
      <h2>Name of restaurant</h2>
      <section className="information">
        <div className="restaurant-image">
          <p>Image will go here</p>
        </div>
       <section className="details">
        <section className="properties">
          <div className="ratings">
            <p>Ratings will go here</p>
          </div>
          <p className="cuisine">Cuisine type</p>
          <p className="cost">Cost will go here</p>
          <div className="phone-container">
            <p className="phone-icon">📞</p>
            <p className="phone-number">Phone number will go here</p>
          </div>
        </section>
        <p className="address">12345 Lala Land</p>
       </section> 
      </section>
      <section className="map-container">

      </section>
    </section>

  )
}

export default Recommendation;