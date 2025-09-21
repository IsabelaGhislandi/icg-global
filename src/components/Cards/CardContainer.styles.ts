import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: transparent;
  z-index: 1;
`;

export const ZoomableArea = styled.div<{ scale: number }>`
  transform: scale(${props => props.scale});
  transform-origin: center;
  transition: transform 0.3s ease;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
`;
