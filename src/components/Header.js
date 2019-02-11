import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Header extends Component {
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
        <div key={key} id={prof}>
          {prof}
        </div>
      ))
    );
  };

  render() {
    return (
      <div className="filters-container">
        <h1>Brastlewark Citizen</h1>
        <input
          placeholder="Search by Gnome"
          autoFocus
          onChange={this.props.filterGnome}
        />
        <div>{this.profession()}</div>
      </div>
    );
  }
}

Header.propTypes = {
  filterGnome: PropTypes.func
};

export default Header;
