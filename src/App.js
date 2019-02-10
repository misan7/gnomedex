import React, { Component } from 'react';

import 'normalize.css';
import './styles/index.scss';

import BrastlewarkAPI from './api/brastlewark.js';
import { Modal, Cards, Header } from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Brastlewark: [],
      filteredGnomes: [],
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
        Brastlewark,
        filteredGnomes: Brastlewark
      });
    } catch (err) {
      this.setState({
        err
      });
    }
  };

  filterGnome = e => {
    const filteredGnomes = this.state.Brastlewark.filter(g =>
      g.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({ filteredGnomes });
    console.log(filteredGnomes);
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
    const { err, showModal, gnomeID, filteredGnomes } = this.state;

    return (
      <div className="wrapper">
        <Header filterGnome={this.filterGnome} />
        {err ? (
          'Run! The Orcs are comming!'
        ) : (
          <Cards data={filteredGnomes} idSelect={this.handleOpenModal} />
        )}
        <Modal
          data={gnomeID}
          isOpen={showModal}
          hideModal={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default App;
