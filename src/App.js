import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Hotelinfo from './components/Hotelinfo';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        < Header />

        < Main />

        < Footer />

      </div>
    );
  }
}

export default App;
