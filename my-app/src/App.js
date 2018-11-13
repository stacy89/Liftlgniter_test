import React, { Component } from 'react';
import ContentBeginning from "./Components/ContentBeginning.js";
import ContentMiddle from "./Components/ContentMiddle.js";
import ContentEnd from "./Components/ContentEnd.js";
import './normalize.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ContentBeginning />
        <ContentMiddle />
        <ContentEnd />
      </div>
    );
  }
}

export default App;
