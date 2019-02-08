import React from 'react';

class Cards extends React.Component {
  render() {
    return (
      <div className="gnomes-container">
        {this.props.data.map(gnome => (
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
        ))}
      </div>
    );
  }
}
export default Cards;
