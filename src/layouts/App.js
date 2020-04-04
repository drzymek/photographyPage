import React, { Component } from 'react';
import '../css/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import Header from './Header';
import Page from './Page';
import Footer from './Footer';
import ScrollToTop from '../components/ScrollToTop'

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
              {<Header />}
            </section>
            <section className="page">
              {<Page />}
            </section>
          </main>
          <footer>{<Footer />}</footer>
          <span>
            {<ScrollToTop />}
          </span>
        </div>
      </Router>

    );
  }
}

export default App;
