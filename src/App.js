import React, { Component } from 'react';
import Books from "./Components/Books";
import Authors from "./Components/Authors";

class App extends Component {
  render() {
    return (
      <div>
        <Books />
        <Authors />
      </div>
    );
  }
}

export default App;
