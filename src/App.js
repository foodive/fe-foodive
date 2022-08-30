import React, { useState } from 'react';
import Home from './Components/Home';
import './Styles/global.scss';
import { Link, Route } from 'react-router-dom'
import Recommendation from './Components/Recommendation';
import Footer from './Components/Footer';

function App() {

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
