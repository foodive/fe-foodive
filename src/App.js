import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import './Styles/global.scss';
import { Link, Route } from 'react-router-dom'
import Recommendation from './Components/Recommendation';
import Footer from './Components/Footer';
import getRestaurant from './apiCall';

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

  const retrieveRestaurant = () => {
    getRestaurant()
    .then((dataFetch) => {
      console.log(dataFetch)
      setRestaurantData(dataFetch.data.attributes)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => { getLocation() }, [])

  return (
    <>
      <nav>
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <h1>Foodive</h1>
        </Link>
      </nav>
      <Route exact path='/' render={() => <Home retrieveRestaurant={retrieveRestaurant}/> } />
      <Route path='/recommendation' render={() => <Recommendation restaurantData={restaurantData} retrieveRestaurant={retrieveRestaurant} location={location} />} />
      <Footer />
    </>
  );
}

export default App;
