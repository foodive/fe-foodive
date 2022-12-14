import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import './Styles/global.scss';
import { Link, Route } from 'react-router-dom';
import Recommendation from './Components/Recommendation';
import Footer from './Components/Footer';
import getRestaurant from './apiCall';
import emptyData from './emptyData';
import Error from './Components/Error';
import logo from './assets/logo_full.svg'; 

function App() {
  const [restaurantData, setRestaurantData] = useState(emptyData);
  const [location, setLocation] = useState({latitude: null, longitude: null});
  const [cuisine, setCuisine] = useState("");
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          setLocation({latitude: position.coords.latitude, longitude: position.coords.longitude});
        })
      }, (error) => {
        console.log(error)
        if (error.code === error.PERMISSION_DENIED) {
          setError({message: 'We could not obtain your location. Please enable location permissions in settings.'})
        }
      });
    } else {
      setError({message: "Geolocation is not supported."});
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

  useEffect(() => {  
    getLocation()
  }, []);

  return (
    <>
      <nav>
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <img className='header-logo' src={logo} alt='logo'/>
          <h1>Foodive</h1>
        </Link>
      </nav>
      {error && <Error setError={setError} error={error} />}
      <Route exact path='/' render={() => 
        <Home 
          retrieveRestaurant={retrieveRestaurant} 
          cuisine={cuisine} 
          setCuisine={setCuisine} 
          location={location} 
        />} 
      />
      <Route path='/recommendation/:cuisine' render={({ match }) => 
        <Recommendation 
          matchCuisine = {match.params.cuisine}
          restaurantData={restaurantData} 
          retrieveRestaurant={retrieveRestaurant} 
          location={location} 
          error={error} 
          setCuisine={setCuisine}
          cuisine={cuisine}
        />} 
      />
      <Footer />
    </>
  );
}

export default App;
