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
    data: [],
    isLoading: false,
    page: 1,
    maxPage: null,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchText !== this.state.searchText ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });

      this.performSearch();
    }
  }

  handleSearch = searchText => {
    if (searchText.trim() === '') {
      toast.warn('Please enter a search term.');
      return;
    }

    this.setState({ searchText, page: 1, data: [] });
  };

  loadMoreImages = async () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  performSearch = async (page = 1) => {
    const { searchText } = this.state;

    try {
      const data = await getImages(searchText, page);

      if (data.hits.length === 0) {
        toast.error('Sorry, there are no images matching your query!');
      }

      this.setState(prevState => ({
        data: [...prevState.data, ...data.hits],
        maxPage: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      toast.error(`Error: ${error}`);
    } finally {
      this.setState({ isLoading: false });
    }
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
