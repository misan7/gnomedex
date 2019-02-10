import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ filterGnome }) => {
  return (
    <div className="filters-container">
      <h1>Brastlewark Citizen</h1>
      <input placeholder="Search by Gnome" autoFocus onChange={filterGnome} />
    </div>
  );
};

Header.propTypes = {
  filterGnome: PropTypes.func
};

export default Header;
