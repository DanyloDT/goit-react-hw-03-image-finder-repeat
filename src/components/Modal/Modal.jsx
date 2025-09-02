import React, { Component } from 'react';
import { StyledImg, StyledModal, StyledOverlay } from './Modal.styled';

import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { imgBig, tags } = this.props;

    return createPortal(
      <StyledOverlay onClick={this.handleClickBackdrop}>
        <StyledModal>
          <StyledImg src={imgBig} alt={tags} />
        </StyledModal>
      </StyledOverlay>,
      modalRoot
    );
  }
}
