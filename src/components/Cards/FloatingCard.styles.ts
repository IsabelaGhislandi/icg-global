import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-8px) rotate(0.5deg);
  }
  66% {
    transform: translateY(4px) rotate(-0.3deg);
  }
`;

const floatSlow = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-6px) rotate(0.3deg);
  }
`;

const floatGentle = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-3px) rotate(0.2deg);
  }
  75% {
    transform: translateY(2px) rotate(-0.2deg);
  }
`;

export const Card = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'animationDelay',
})<{ x: number; y: number; animationDelay: number }>`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: 180px;
  height: 120px;
  
  /* Glassmorphism Effect */
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  
  color: #fff;
  padding: 0;
  cursor: grab;
  transition: all 0.3s ease;
  overflow: hidden;
  
  animation: ${props => {
    const animations = [float, floatSlow, floatGentle];
    return animations[props.animationDelay % 3];
  }} ${props => 4 + (props.animationDelay * 0.5)}s ease-in-out infinite;
  animation-delay: ${props => props.animationDelay * 0.3}s;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  
  &:active {
    cursor: grabbing;
  }
  
  @media (max-width: 768px) {
    width: 160px;
    height: 110px;
    touch-action: none;
    
    &:hover {
      transform: none;
    }
    
    &:active {
      transform: scale(0.98);
    }
  }
  
  @media (max-width: 480px) {
    width: 140px;
    height: 100px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  opacity: 0;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 14px;
  }
`;

export const CardContent = styled.div`
  transform: translateY(20px);
  transition: all 0.4s ease;
  opacity: 0;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  font-family: 'Arial', sans-serif;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

export const Category = styled.span`
  font-size: 12px;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #9ACD32;
  background: rgba(154, 205, 50, 0.2);
  padding: 4px 8px;
  border-radius: 12px;
  border: 1px solid #9ACD32;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 11px;
    padding: 3px 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 10px;
    padding: 2px 6px;
  }
`;
