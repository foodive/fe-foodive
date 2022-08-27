import React from "react";
import "../Styles/global.scss"
import Options from "./Options";

const Home = () => {
    return (
        <main>
            <section className="about">about our app</section>
            <p>location input</p>
            <Options />
            <button className="submit">Search for restaurant</button>
        </main>
    )
}

export default Home