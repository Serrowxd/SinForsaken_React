// Styled Components
import styled, { css } from 'styled-components';

// Color Const

const colors = {
  pink: '#ff0266',
  white: '#fafafa',
};

// Layout
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1920px;
  min-width: 800px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  flex-direction: row;
  width: 100%;
  height: auto;

  ${props =>
    props.topmargin &&
    css`
      margin-top: 3rem;
    `};

  ${props =>
    props.navstyle &&
    css`
      background-color: ${colors.pink};
      color: ${colors.white};
      border-radius: 30px;
    `};

  p {
    font-size: 1.5rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  ${props =>
    props.topmargin &&
    css`
      margin-top: 3rem;
    `}
  /* justify-content: center; */
  width: ${props => props.width};
  text-align: center;

  img {
    height: 5rem;
    width: 90%;
    border-radius: 20px;
    align-self: center;
  }
`;
