import React from 'react';
import PropTypes from 'prop-types';

const Cards = ({ idSelect, data }) => {
  return (
    <div className="gnomes-container">
      {data &&
        data.map(gnome => (
          <div className="gnome-profile" key={gnome.id}>
            <div
              className="img-box"
              alt={gnome.name}
              id={gnome.id}
              onClick={idSelect}
            >
              <img
                src={gnome.thumbnail}
                alt={gnome.name}
                id={gnome.id}
                onClick={idSelect}
              />
            </div>
            <div className="gnome-data">
              <p> {gnome.name} </p> <p> Age: {gnome.age} </p>
              <p>
                Height: {gnome.height.toFixed()}
                cm
              </p>
              <p>
                Weight: {gnome.weight.toFixed()}
                Kg
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

Cards.propTypes = {
  data: PropTypes.array,
  idSelect: PropTypes.func
};

export default Cards;
