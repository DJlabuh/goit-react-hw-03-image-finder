import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export function ImageGallery(props) {
  const { data } = props;

  return (
    <>
      <GalleryList>
        {data.map(img => (
          <ImageGalleryItem image={img} key={img.id} />
        ))}
      </GalleryList>
    </>
  );
}

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
