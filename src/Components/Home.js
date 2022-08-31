import React from "react";
import { Link } from "react-router-dom";
import "../Styles/global.scss"
import Options from "./Options";

const Home = ({ retrieveRestaurant }) => {


    return (
        <main>
            <section className="home-info">
            <p className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
veniam, quis nostrud </p>
            <p>200 E Colfax Ave, Denver, CO 80203</p>
            </section>
            <section className="options-panel">
                <Options />
            </section>
            <Link to={'/recommendation'}>
              <button onClick={() => retrieveRestaurant()} className="submit">Search for restaurant</button>
            </Link>

        </main>
    )
}

export default Home