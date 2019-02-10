import React, { Component } from 'react';

import 'normalize.css';
import './styles/index.scss';

import BrastlewarkAPI from './api/brastlewark.js';
import { Modal, Cards } from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Brastlewark: [],
      gnomeID: {},
      showModal: false,
      err: null
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const Brastlewark = await BrastlewarkAPI.getData();
      this.setState({
        Brastlewark
      });
    } catch (err) {
      this.setState({
        err
      });
    }
  };

  handleOpenModal = e => {
    const gnomeID = this.state.Brastlewark.find(
      gnome => gnome.id === +e.target.id
    );
    this.setState(
      {
        gnomeID
      },
      () => {
        this.setState({
          showModal: true
        });
      }
    );
  };

  handleCloseModal = e => {
    this.setState({ showModal: false });
  };

  render() {
    const { Brastlewark, err, showModal, gnomeID } = this.state;

    return (
      <div className="wrapper">
        <div className="filters-container"> Filters </div>{' '}
        {err ? (
          'Run! The Orcs are comming!'
        ) : (
          <Cards data={Brastlewark} idSelect={this.handleOpenModal} />
        )}{' '}
        <Modal
          data={gnomeID}
          isOpen={showModal}
          hideModal={this.handleCloseModal}
        />{' '}
      </div>
    );
  }
}

export default App;
