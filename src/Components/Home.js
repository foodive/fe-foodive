import React from "react";
import { Link } from "react-router-dom";
import "../Styles/global.scss"
import Options from "./Options";

const Home = () => {
    return (
        <main>
            <section className="about">about our app</section>
            <p>location input</p>
            <Options />
            <Link to={'/recommendation'}>
              <button className="submit">Search for restaurant</button>
            </Link>

        </main>
    )
}

export default Home