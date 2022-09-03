import React from "react";
import { Link } from "react-router-dom";
import "../Styles/global.scss"
import Options from "./Options";

const Home = ({ retrieveRestaurant, cuisine, setCuisine }) => {

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
            <Link to={'/recommendation'}>
              <button onClick={() => retrieveRestaurant()} className="submit">Search for restaurant</button>
            </Link>
        </main>
    )
}

export default Home