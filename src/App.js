import React from 'react';
import { Route, Link, Switch } from "wouter";

import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifContext';
import ErrorPage from 'pages/ErrorPage';


function App() {

  const value = {
    name: 'Damian',
    suscribiteAlCanal: true
  }

  return (
    <StaticContext.Provider value={value}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt='Giffy logo' src='/logo.png' />
            </figure>
          </Link>
          <GifsContextProvider>
            <Switch>
              <Route 
                component={ Home }
                path="/" 
                />
              <Route 
                component={ SearchResults }
                path="/search/:keyword/:rating?" 
                />
              <Route 
                component={ Detail }
                path="/gif/:id" 
                />
              <Route 
                component={ ErrorPage }
                path="/:rest*"
                />
            </Switch>
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
