import { css } from 'styled-components';
import { colors, spacing, borderRadius, shadows, transitions } from './designTokens';

// Glassmorphism Mixin
export const glassmorphism = css`
  background: ${colors.glass.light};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${colors.glass.border};
  border-radius: ${borderRadius.md};
`;

export const glassmorphismHover = css`
  background: ${colors.glass.medium};
  border: 1px solid ${colors.glass.borderHover};
  box-shadow: ${shadows.glass};
`;

// Card Styles
export const cardBase = css`
  ${glassmorphism}
  padding: ${spacing.lg};
  transition: ${transitions.normal};
  cursor: grab;
  
  &:hover {
    ${glassmorphismHover}
    transform: translateY(-5px);
  }
  
  &:active {
    cursor: grabbing;
  }
`;

// Button Styles
export const buttonBase = css`
  padding: ${spacing.md} ${spacing.lg};
  border: none;
  border-radius: ${borderRadius.md};
  font-weight: 500;
  cursor: pointer;
  transition: ${transitions.normal};
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const buttonPrimary = css`
  ${buttonBase}
  background: ${colors.glass.light};
  color: white;
  border: 1px solid ${colors.glass.border};
  
  &:hover {
    ${glassmorphismHover}
  }
`;

// Animation Mixins
export const fadeIn = css`
  animation: fadeIn 0.3s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const slideIn = css`
  animation: slideIn 0.3s ease-out;
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const float = css`
  animation: float 4s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    33% {
      transform: translateY(-8px) rotate(0.5deg);
    }
    66% {
      transform: translateY(4px) rotate(-0.3deg);
    }
  }
`;

// Responsive Mixins
export const mobile = (styles: any) => css`
  @media (max-width: 768px) {
    ${styles}
  }
`;

export const tablet = (styles: any) => css`
  @media (max-width: 1024px) {
    ${styles}
  }
`;

// Layout Mixins
export const centerContent = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const fullScreen = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

// Text Styles
export const headingBase = css`
  font-weight: 300;
  line-height: 1.2;
  color: white;
`;

export const textBase = css`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  font-weight: 300;
`;

// Interactive Elements
export const interactive = css`
  cursor: pointer;
  transition: ${transitions.normal};
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

// Focus Styles
export const focusRing = css`
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${colors.primary[500]};
  }
`;

// Scrollbar Styles
export const customScrollbar = css`
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
`;