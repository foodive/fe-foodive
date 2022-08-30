import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import './Styles/global.scss';
import { Link, Route } from 'react-router-dom'
import Recommendation from './Components/Recommendation';
import Footer from './Components/Footer';
import apiKey from './env';

function App() {

  const [restaurantData, setRestaurantData] = useState(null);
  const [location, setLocation] = useState({latitude: null, longitude: null})

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
       setLocation({latitude: position.coords.latitude, longitude: position.coords.longitude})
      })
    } else {
      alert("Geolocation is not supported")
    }
  }

  useEffect(() => { getLocation() }, [])

  return (
    <>
      <nav>
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <h1>Foodive</h1>
        </Link>
      </nav>
      <Route exact path='/' render={() => <Home setRestaurantData={setRestaurantData}/> } />
      <Route path='/recommendation' render={() => <Recommendation restaurantData={restaurantData} setRestaurantData={setRestaurantData} location={location} apiKey={apiKey} />} />
      <Footer />
    </>
  );
}

export default App;
