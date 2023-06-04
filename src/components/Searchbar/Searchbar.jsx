import { Component } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';

import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { value } = this.state;
    const { handleSearch } = this.props;

    if (value.trim() === '') {
      toast.warn('Please enter a search term.');
      return;
    }

    handleSearch(value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="search"
            autoСomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
