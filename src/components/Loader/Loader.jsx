import { RotatingLines } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <RotatingLines
        strokeColor="#4caf50"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Wrapper>
  );
};
