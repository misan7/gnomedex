import React, { Component } from 'react';

import 'normalize.css';
import './styles/index.scss';

import { Modal } from './components';

const API =
  'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Brastlewark: [],
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { Brastlewark } = this.state;

    return (
      <div className="wrapper">
        <div className="filters-container"> Filters </div>{' '}
        <button onClick={this.handleOpenModal}>Trigger</button>
        <Modal isOpen={this.state.showModal}>
          <button onClick={this.handleCloseModal}>CLOSE</button>
        </Modal>
        <div className="gnomes-container">
          {' '}
          {Brastlewark.map(gnome => (
            <div className="gnome-profile" key={gnome.id}>
              <div className="img-box" alt={gnome.name}>
                <img src={gnome.thumbnail} alt={gnome.name} />{' '}
              </div>{' '}
              <div className="gnome-data">
                <p> {gnome.name} </p> <p> Age: {gnome.age} </p>{' '}
                <p> Height: {gnome.height.toFixed()} cm</p>{' '}
                <p> Weight: {gnome.weight.toFixed()} Kg</p>{' '}
              </div>{' '}
            </div>
          ))}{' '}
        </div>{' '}
      </div>
    );
  }
}

export default App;
