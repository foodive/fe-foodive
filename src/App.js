import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import './Styles/global.scss';
import { Link, Route } from 'react-router-dom'
import Recommendation from './Components/Recommendation';
import Footer from './Components/Footer';
import getRestaurant from './apiCall';
import emptyData from './emptyData';
import Error from './Components/Error';

function App() {
  const [restaurantData, setRestaurantData] = useState(emptyData);
  const [location, setLocation] = useState({latitude: null, longitude: null});
  const [cuisine, setCuisine] = useState("");
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
       setLocation({latitude: position.coords.latitude, longitude: position.coords.longitude});
      });
    } else {
      alert("Geolocation is not supported")
    }
  }

  const retrieveRestaurant = () => {
    getRestaurant(location.latitude, location.longitude, cuisine)
    .then((dataFetch) => {
      setRestaurantData(dataFetch.data.attributes)
    })
    .catch((err) => {
      setError(err)
    });
  }

  useEffect(() => { getLocation() }, [])
  
  return (
    <>
      <nav>
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <h1>Foodive</h1>
        </Link>
      </nav>
      {error && <Error error={error} />}
      <Route exact path='/' render={() => <Home retrieveRestaurant={retrieveRestaurant} cuisine={cuisine} setCuisine={setCuisine} location={location} /> } />
      <Route path='/recommendation' render={() => <Recommendation restaurantData={restaurantData} retrieveRestaurant={retrieveRestaurant} location={location} error={error} />} />
      <Footer />
    </>
  );
}

export default App;
