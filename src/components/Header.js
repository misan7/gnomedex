import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../images/svg/logo.svg';
class Header extends Component {
  constructor() {
    super();
    this.state = {
      profs: []
    };
  }
  filterByProf = e => {
    const prof = e.target.id;
    this.props.filterProf(prof);

    this.setState(state => {
      const profs = [...state.profs, prof, ', '];
      return { profs };
    });
  };

  clearProf = e => {
    this.props.clearData();
    this.setState({ profs: '' });
  };

  professionSelected = () => {
    const professions =
      this.props.data.length > 0 &&
      this.props.data.reduce((total, amount) => {
        amount.professions.forEach(prof => {
          if (total.indexOf(prof) === -1) {
            total.push(prof);
          }
        });
        return total;
      }, []);

    return (
      professions.length > 0 &&
      professions.map((prof, key) => (
        <h3 key={key} id={prof}>
          {prof}
        </h3>
      ))
    );
  };

  profession = () => {
    const professions =
      this.props.data.length > 0 &&
      this.props.data.reduce((total, amount) => {
        amount.professions.forEach(prof => {
          if (total.indexOf(prof) === -1) {
            total.push(prof);
          }
        });
        return total;
      }, []);

    return (
      professions.length > 0 &&
      professions.map((prof, key) => (
        <div
          key={key}
          id={prof}
          onClick={this.filterByProf}
          className="prof-btn"
        >
          {prof}
        </div>
      ))
    );
  };

  render() {
    return (
      <div className="filters-container">
        <div className="logo-box">
          <Logo className="logo" />
          <h1 className="title"> Brastlewark Town </h1>
        </div>
        <div className="filters-box">
          <div className="input-box">
            <input
              placeholder="Search by Gnome"
              autoFocus
              onChange={this.props.filterGnome}
            />
            <div className="clear-btn" onClick={this.clearProf}>
              Clear Professions
            </div>
          </div>
          <div className="professions-box">
            <h3> Professions: {this.state.profs} </h3>
            <div className="profs"> {this.profession()} </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  filterGnome: PropTypes.func,
  clearData: PropTypes.func,
  filterProf: PropTypes.func,
  data: PropTypes.array
};

export default Header;
