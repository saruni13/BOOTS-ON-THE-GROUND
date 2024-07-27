import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/FeaturedProducts" component={FeaturedProducts} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
