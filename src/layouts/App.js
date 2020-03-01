import React, { Component } from 'react';
import '../css/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import Slider from './Slider';
import Page from './Page';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav>
            {<Navigation />}
          </nav>
          <main>
            <section className="header">
              {<Slider />}
            </section>
            <section className="page">
              {<Page />}
            </section>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>

    );
  }
}

export default App;
