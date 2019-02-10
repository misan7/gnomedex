import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Age,
  Weight,
  Height,
  Hair,
  Profession,
  Friends
} from '../images/index.js';

class Modal extends Component {
  render() {
    if (!this.props.isOpen) {
      return null;
    }

    const {
      name,
      thumbnail,
      age,
      weight,
      height,
      hair_color,
      professions,
      friends
    } = this.props.data;

    return (
      <div className="modal" onClick={this.props.hideModal}>
        <div className="modal-box">
          <div className="modal-img">
            <img src={thumbnail} alt="gnome" />
          </div>
          <div className="modal-data">
            <h2> {name ? name : 'Name Not Founded'}</h2>
            <div className="data-container">
              <Age className="svg-icon" />
              <p> Age: {age ? age : 'Age Not Founded'}</p>
            </div>
            <div className="data-container">
              <Weight className="svg-icon" />
              <p>
                {' '}
                Weight: {weight ? weight.toFixed() : 'Weight Not Founded'} Kg
              </p>
            </div>
            <div className="data-container">
              <Height className="svg-icon" />
              <p>
                {' '}
                Height: {height ? height.toFixed() : 'Height Not Founded'} cm
              </p>
            </div>
            <div className="data-container">
              <Hair className="svg-icon moustache" />
              <p>
                {' '}
                Hair color: {hair_color ? hair_color : 'Hair Color Not Founded'}
              </p>
            </div>
            <div className="data-container">
              <Profession className="svg-icon" />
              <p> Professions:</p>
            </div>
            <div className="ul-container">
              <ul>
                {professions.map(pro => (
                  <li key={pro}>{pro ? pro : 'No Profession Founded'}</li>
                ))}
              </ul>
            </div>
            <div className="data-container">
              <Friends className="svg-icon moustache" />
              <p> Friends: </p>
            </div>
            <div className="ul-container">
              <ul>
                {friends.map(friend => (
                  <li key={friend}>{friend ? friend : 'No Friends 😭'}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  data: PropTypes.object,
  isOpen: PropTypes.bool,
  hideModal: PropTypes.func
};

export default Modal;
