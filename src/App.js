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
      professions: [],
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
    const filteredGnomes = this.state.Brastlewark.filter(gnome =>
      gnome.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({
      filteredGnomes
    });
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

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  };

  profession = () => {
    const { filteredGnomes } = this.state;

    const professions =
      filteredGnomes.length > 0 &&
      filteredGnomes.reduce((total, amount) => {
        amount.professions.forEach(prof => {
          if (total.indexOf(prof) === -1) {
            total.push(prof);
          }
        });
        return total;
      }, []);
    console.log(professions);

    return (
      professions.length > 0 &&
      professions.map((prof, key) => (
        <div key={key} id={prof}>
          {prof}
        </div>
      ))
    );
  };

  render() {
    const { err, showModal, gnomeID, filteredGnomes } = this.state;

    return (
      <div className="wrapper">
        <Header filterGnome={this.filterGnome} /> <div>{this.profession()}</div>
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
