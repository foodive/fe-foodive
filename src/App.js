import React, { useState } from 'react';
import Home from './Components/Home';
import './Styles/global.scss';
import { Link, Route } from 'react-router-dom'
import Recommendation from './Components/Recommendation';
import Footer from './Components/Footer';
// import apiKey from './env';

function App() {

  const [location, setLocation] = useState({latitude: null, longitude: null})

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("lat", position.coords.latitude)
        console.log("long", position.coords.longitude)
      })
    } else {
      alert("Geolocation is not supported")
    }
  }
getLocation()
  const [restaurantData, setRestaurantData] = useState(null);
  console.log(restaurantData)
  return (
    <>
      <nav>
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <h1>Foodive</h1>
        </Link>
      </nav>
      <Route exact path='/' render={() => <Home setRestaurantData={setRestaurantData}/> } />
      <Route path='/recommendation' render={() => <Recommendation restaurantData={restaurantData} setRestaurantData={setRestaurantData}/>} />
      <Footer />
    </>
  );
}

export default App;
