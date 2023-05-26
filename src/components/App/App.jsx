import { Component } from 'react';

import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';

export class App extends Component {
  state = {
    searchText: '',
  };

  handleSearch = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
        <section>
          <ImageGallery searchText={this.state.searchText} />
        </section>
      </>
    );
  }
}
