import React from "react";
import { Link } from "react-router-dom";
import "../Styles/global.scss"
import Options from "./Options";

const Home = ({ retrieveRestaurant, cuisine, setCuisine, location }) => {
  
  return (
    <main>
      <section className="home-info">
      <p className="about">
          Hello and welcome to Foodive! Select a Cuisine type and click 
          the search for restaurant button to find a random restaurant near you!
      </p>
      <p>200 E Colfax Ave, Denver, CO 80203</p>
      </section>
      <section className="options-panel">
        <Options cuisine={cuisine} setCuisine={setCuisine} />
      </section>
      { 
        location.latitude && location.longitude && cuisine !== "" ? 
          <Link to={'/recommendation'}>
            <button onClick={() => retrieveRestaurant()} className="submit">Search for Restaurant</button>
          </Link>
        : 
          <button className="submit deactivated">Search for Restaurant</button>
      }
    </main>
  )
}

export default Home