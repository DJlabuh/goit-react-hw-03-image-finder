import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { image } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <GalleryItem key={image.id} onClick={this.openModal}>
          <Image src={image.webformatURL} alt={image.tags}></Image>
        </GalleryItem>
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={image.largeImageURL} alt={image.tags} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
