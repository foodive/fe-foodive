import React from "react";
import { Link } from "react-router-dom";
import "../Styles/global.scss"
import Options from "./Options";
import data from "../mockData";

const Home = ({ setRestaurantData }) => {
    return (
        <main>
            <section className="about">about our app</section>
            <p>location input</p>
            <Options />
            <Link to={'/recommendation'}>
              <button onClick={() => setRestaurantData(data)} className="submit">Search for restaurant</button>
            </Link>

        </main>
    )
}

export default Home