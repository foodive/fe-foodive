import React from "react";
import { Link } from "react-router-dom";
import "../Styles/global.scss";
import Options from "./Options";

const Home = ({ cuisine, setCuisine, location }) => {
  return (
    <main>
      <section className="home-info">
      <p className="about">
          Hello and welcome to Foodive! Select a Cuisine type and click 
          the Search for Restaurant button to find a random restaurant in your city!
      </p>
      </section>
      <section className="options-panel">
        <Options cuisine={cuisine} setCuisine={setCuisine} />
      </section>
      { 
        location.latitude && location.longitude && cuisine !== "" ? 
          <Link to={`/recommendation/${cuisine}`}>
            <button className="submit">Search for Restaurant</button>
          </Link>
        : 
          <button className="submit deactivated">Search for Restaurant</button>
      }
    </main>
  );
}

export default Home;