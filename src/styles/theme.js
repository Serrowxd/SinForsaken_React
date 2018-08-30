// Styled Components
import styled, { css } from 'styled-components';

// Color Const

const colors = {
  pink: '#d81b60',
  black: '#212121',
};

const { pink, black } = colors; // destructoring

// Layout
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 100%;
  max-width: 1920px;
  min-width: 800px;
  position: relative;
  overflow: hidden;
`;

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
`;

export const Jumbo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 85%;
  background-color: #303030;
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: ${props => props.height};
  position: ${props => props.position};
  background-color: ${props => props.background};
  transition: all 1s ease;
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

  ${props =>
    props.whois &&
    css`
      width: 50%;

      h1 {
        text-align: center;
      }

      img {
        height: auto;
        width: 20rem;
      }

      .img2 {
        height: auto;
        width: 20rem;
      }
    `};

  ${props =>
    props.joinup &&
    css`
      width: 50%;
      align-self: center;
      align-items: center;
      text-align: center;

      input {
        margin-top: 1rem;
        width: 40%;
        padding: 1rem;
      }

      button {
        margin-top: 1rem;
        padding: 1rem;
        font-size: 1rem;
      }
    `};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: ${props => props.width};
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

      a {
        text-decoration: none;
      }

      h2 {
        transition: color 0.3s ease;
        color: white;
        text-decoration: none;
        cursor: pointer;

        &:hover {
          /* color: #c2185b; */
          color: ${pink};
        }
      }
    `};

  ${props =>
    props.padded &&
    css`
      width: 95%;
      align-self: center;
      justify-content: center;
    `};
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 5%;
  padding-bottom: 5%;

  ${props =>
    props.light &&
    css`
      background-color: #303030;
    `};

  ${props =>
    props.foot &&
    css`
      padding-top: 0;
      padding-bottom: 0;
    `};
`;
