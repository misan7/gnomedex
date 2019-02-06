import React, { Component } from 'react';
import './styles';

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
      .then(data =>
        this.setState({
          Brastlewark: data.Brastlewark
        })
      );
  }
  render() {
    const { Brastlewark } = this.state;

    return (
      <div className="wrapper">
        <div className="filters-container">Filters</div>
        <div className="gnomes-container">
          {Brastlewark.map(gnome => (
            <div className="gnome-profile" key={gnome.id}>
              <div className="img-box" alt={gnome.name}>
                <img src={gnome.thumbnail} />
              </div>
              <div className="gnome-data">
                <p>{gnome.name}</p>
                <p>Age: {gnome.age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
