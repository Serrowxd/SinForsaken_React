// Styled Components
import styled from 'styled-components';

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
`;

export const Column = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  flex-direction: column;
  height: auto;
`;
