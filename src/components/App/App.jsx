import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from 'components/Searchbar';
import { Loader } from 'components/Loader';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';

import { getImages } from '../../services/getImages';

export class App extends Component {
  state = {
    searchText: '',
    data: null,
    isLoading: false,
    page: 1,
    maxPage: null,
  };

  handleSearch = async searchText => {
    this.setState({ isLoading: true, searchText, page: 1 });

    try {
      await this.performSearch(searchText, 1);
    } catch (error) {
      toast.error(`Error: ${error}`);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMoreImages = async () => {
    this.setState({ isLoading: true });

    try {
      const { searchText, page, maxPage } = this.state;
      const nextPage = page + 1;

      if (nextPage > maxPage) {
        toast.info('No more images to load...');
      } else {
        await this.performSearch(searchText, nextPage);
      }
    } catch (error) {
      toast.error(`Error: ${error}`);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  performSearch = async (searchText, page) => {
    const data = await getImages(searchText, page);

    if (data.hits.length === 0) {
      toast.error('Sorry, there are no images matching your query!');
    }

    this.setState({
      data: page === 1 ? data.hits : [...this.state.data, ...data.hits],
      maxPage: Math.ceil(data.totalHits / 12),
      page,
    });
  };

  render() {
    const { searchText, data, isLoading, page, maxPage } = this.state;
    const showLoadMoreButton = data && data.length > 0 && page < maxPage;

    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
        <section>
          {isLoading && <Loader />}
          <ToastContainer autoClose={2000} />
          <ImageGallery searchText={searchText} data={data} />
          {showLoadMoreButton && <Button onClick={this.loadMoreImages} />}
        </section>
      </>
    );
  }
}
