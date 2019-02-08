import React from 'react';

class Modal extends React.Component {
  render() {
    if (!this.props.isOpen) {
      return null;
    }
    return (
      <div>
        <div>{this.props.children}Opened!</div>
      </div>
    );
  }
}

export default Modal;
