import { Component } from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export class ImageGallery extends Component {
  render() {
    const { data } = this.props;

    return (
      <>
        <GalleryList>
          {data &&
            data.map(img => <ImageGalleryItem image={img} key={img.id} />)}
        </GalleryList>
      </>
    );
  }
}

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
