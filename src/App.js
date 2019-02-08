import React, { Component } from 'react';

import 'normalize.css';
import './styles/index.scss';

import BrastlewarkAPI from './api/brastlewark.js';
import { Modal } from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Brastlewark: [],
      showModal: false,
      err: null
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const Brastlewark = await BrastlewarkAPI.getData();
      this.setState({ Brastlewark });
    } catch (err) {
      this.setState({ err });
    }
  };

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { Brastlewark } = this.state;
    const { err } = this.state;

    console.log({ Brastlewark });
    console.log({ err });

    return (
      <div className="wrapper">
        <div className="filters-container"> Filters </div>{' '}
        <button onClick={this.handleOpenModal}>Open Modal</button>
        <Modal isOpen={this.state.showModal}>
          <button onClick={this.handleCloseModal}>X</button>
        </Modal>
        <div className="gnomes-container">
          {' '}
          {this.state.err
            ? 'Run! The Orcs are comming!'
            : Brastlewark.map(gnome => (
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
