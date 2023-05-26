import { Component } from 'react';
import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';

import { GalleryList } from './ImageGallery.styled';

import { getImages } from '../../services/getImages';

export class ImageGallery extends Component {
  state = {
    data: null,
    isLoading: false,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ isLoading: true, page: 1 });
      try {
        const data = await getImages(this.props.searchText, 1);
        if (data.hits.length === 0) {
          toast.error('Sorry, there are no images matching your query!');
        }
        this.setState({ data: data.hits });
      } catch (error) {
        toast.error(`Error: ${error}`);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  loadMoreImages = async () => {
    this.setState({ isLoading: true });
    try {
      const { searchText } = this.props;
      const { page, data } = this.state;
      const nextPage = page + 1;
      const newData = await getImages(searchText, nextPage);
      if (newData.hits.length === 0) {
        toast.info('No more images to load.');
      } else {
        this.setState({
          data: [...data, ...newData.hits],
          page: nextPage,
        });
      }
    } catch (error) {
      toast.error(`Error: ${error}`);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { data, isLoading } = this.state;
    const showLoadMoreButton = data && data.length > 0;

    return (
      <>
        {isLoading && <Loader />}
        <ToastContainer autoClose={2000} />
        <GalleryList>
          {data &&
            data.map(img => <ImageGalleryItem image={img} key={img.id} />)}
        </GalleryList>
        {showLoadMoreButton && <Button onClick={this.loadMoreImages} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchText: PropTypes.string.isRequired,
};
