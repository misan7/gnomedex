import React, { Component } from 'react';
import './App.css';

const API =
  'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Brastlewark: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ Brastlewark: data.Brastlewark }));
  }
  render() {
    const { Brastlewark } = this.state;

    return (
      <ul>
        {Brastlewark.map(gnome => (
          <li key={gnome.id}>
            <p>{gnome.name}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
