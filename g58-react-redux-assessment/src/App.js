import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import FooterComp from './components/FooterComp';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <FooterComp />
      </div>
    );
  }
}



export default App;
