// Styled Components
import styled, { css } from 'styled-components';

// Color Const

const colors = {
  pink: '#ff0266',
  white: '#fafafa',
};

const { pink, white } = colors; // destructoring

// Layout
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 100%;
  height: 100vh;
  max-width: 1920px;
  min-width: 800px;
`;

export const Jumbo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 75%;
  background-color: #303030;
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  img {
    height: auto;
    width: 15rem;
    align-self: center;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
  height: 100%;
  align-items: center;

  ${props =>
    props.navrow &&
    css`
      width: 10%;
      justify-content: center;
      font-family: 'Rock Salt', cursive;

      h1 {
        font-size: 2rem;
      }
    `};

  ${props =>
    props.owo &&
    css`
      width: 100%;
      justify-content: space-evenly;

      h2 {
        transition: color 0.3s ease;
        cursor: pointer;

        &:hover {
          /* color: #c2185b; */
          color: #d81b60;
        }
      }
    `};
`;
