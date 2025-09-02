import { Component } from 'react';
import { Modal } from '../Modal/Modal';
import {
  StyledImageGalleryItem,
  StyledImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggelModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };
  render() {
    const { webformatURL, largeImageURL, tags } = this.props.image;

    return (
      <StyledImageGalleryItem>
        <StyledImageGalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={this.toggelModal}
        />
        {this.state.showModal && (
          <Modal
            imgBig={largeImageURL}
            tags={tags}
            onClose={this.toggelModal}
          />
        )}
      </StyledImageGalleryItem>
    );
  }
}
