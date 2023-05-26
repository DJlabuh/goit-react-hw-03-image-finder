import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, LoadMoreButton } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <Wrapper>
      <LoadMoreButton onClick={onClick}> Load More</LoadMoreButton>
    </Wrapper>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
