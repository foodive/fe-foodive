import React from 'react';
import Home from './Components/Home';
import './Styles/global.scss';
import { Link, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <nav>
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <h1>Foodive</h1>
        </Link>
      </nav>
      <Route exact path='/' render={() => <Home /> } />
    </>
  );
}

export default App;
