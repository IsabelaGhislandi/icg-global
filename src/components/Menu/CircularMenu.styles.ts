import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

export const slideRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const staggeredSlideIn = (delay: number) => keyframes`
  0% {
    opacity: 0;
    transform: translateX(-30px) scale(0.8);
  }
  ${delay * 8}% {
    opacity: 0;
    transform: translateX(-30px) scale(0.8);
  }
  ${delay * 8 + 30}% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

export const staggeredSlideOut = (delay: number) => keyframes`
  0% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  ${delay * 5}% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  ${delay * 5 + 20}% {
    opacity: 0;
    transform: translateX(-20px) scale(0.9);
  }
  100% {
    opacity: 0;
    transform: translateX(-20px) scale(0.9);
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: calc(100vw - 40px);
  overflow: visible;
  
  @media screen and (max-width: 768px) {
    bottom: 20px;
    left: 10px;
    right: 10px;
    max-width: calc(100vw - 20px);
    gap: 8px;
    flex-wrap: nowrap;
  }
  
  @media screen and (max-width: 480px) {
    bottom: 15px;
    left: 5px;
    right: 5px;
    max-width: calc(100vw - 10px);
    gap: 6px;
  }
`;

export const MainButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>`
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  color: white;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 80px;
  flex-shrink: 0;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateX(5px);
  }
  
  @media screen and (max-width: 768px) {
    padding: 12px 18px;
    font-size: 11px;
    min-width: 70px;
    touch-action: manipulation;
  }
  
  @media screen and (max-width: 480px) {
    padding: 10px 16px;
    font-size: 10px;
    min-width: 60px;
  }
`;

export const MenuItems = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateX(0) scale(1)' : 'translateX(-30px) scale(0.9)'};
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  width: ${props => props.isOpen ? 'auto' : '0px'};
  max-width: ${props => props.isOpen ? 'none' : '0px'};
  overflow: ${props => props.isOpen ? 'visible' : 'hidden'};
  flex-wrap: nowrap;
  white-space: nowrap;
  
  @media screen and (max-width: 768px) {
    gap: 6px;
    transform: ${props => props.isOpen ? 'translateX(0) scale(1)' : 'translateX(-15px) scale(0.95)'};
    flex-direction: row;
    overflow-x: ${props => props.isOpen ? 'auto' : 'hidden'};
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
  
  @media screen and (max-width: 480px) {
    gap: 4px;
    transform: ${props => props.isOpen ? 'translateX(0) scale(1)' : 'translateX(-10px) scale(0.9)'};
  }
`;

export const MenuItem = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'delay' && prop !== 'isVisible',
})<{ delay: number; isVisible: boolean }>`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 8px 16px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 300;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
  animation: ${props => props.isVisible ? staggeredSlideIn(props.delay) : staggeredSlideOut(props.delay)} 0.4s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateX(-3px);
  }
  
  &:active {
    transform: translateX(-2px) scale(0.98);
  }
  
  @media screen and (max-width: 768px) {
    padding: 6px 12px;
    font-size: 11px;
    gap: 6px;
    min-width: fit-content;
  }
  
  @media screen and (max-width: 480px) {
    padding: 5px 10px;
    font-size: 10px;
    gap: 4px;
  }
`;

export const MenuItemLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== 'delay' && prop !== 'isVisible',
})<{ delay: number; isVisible: boolean }>`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 8px 16px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 300;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
  text-decoration: none;
  animation: ${props => props.isVisible ? staggeredSlideIn(props.delay) : staggeredSlideOut(props.delay)} 0.4s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateX(-3px);
    color: white;
  }
  
  &:active {
    transform: translateX(-2px) scale(0.98);
  }
  
  @media screen and (max-width: 768px) {
    padding: 6px 12px;
    font-size: 11px;
    gap: 6px;
    min-width: fit-content;
  }
  
  @media screen and (max-width: 480px) {
    padding: 5px 10px;
    font-size: 10px;
    gap: 4px;
  }
`;

export const SearchContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  bottom: 10px;
  left: 100px;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  animation: ${props => props.isVisible ? slideRight : 'none'} 0.3s ease;
  
  @media screen and (max-width: 768px) {
    left: 80px;
    bottom: 20px;
  }
  
  @media screen and (max-width: 480px) {
    left: 70px;
    bottom: 15px;
  }
`;

export const SearchInput = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== 'isVisible' && prop !== 'delay',
})<{ isVisible: boolean; delay: number }>`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 8px 16px;
  color: white;
  font-size: 12px;
  width: 200px;
  outline: none;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.08);
  }
  
  @media screen and (max-width: 768px) {
    width: 150px;
    padding: 6px 12px;
    font-size: 11px;
  }
  
  @media screen and (max-width: 480px) {
    width: 120px;
    padding: 5px 10px;
    font-size: 10px;
  }
`;

export const FilterContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  bottom: 10px;
  left: 100px;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  animation: ${props => props.isVisible ? slideRight : 'none'} 0.3s ease;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: calc(100vw - 120px);
  
  @media screen and (max-width: 768px) {
    left: 80px;
    bottom: 20px;
    gap: 6px;
    max-width: calc(100vw - 100px);
  }
  
  @media screen and (max-width: 480px) {
    left: 70px;
    bottom: 15px;
    gap: 4px;
    max-width: calc(100vw - 90px);
  }
`;

export const FilterButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'delay' && prop !== 'isVisible',
})<{ isActive: boolean; delay: number; isVisible: boolean }>`
  background: ${props => props.isActive ? 'rgba(154, 205, 50, 0.2)' : 'rgba(255, 255, 255, 0.05)'};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${props => props.isActive ? 'rgba(154, 205, 50, 0.5)' : 'rgba(154, 205, 50, 0.3)'};
  border-radius: 15px;
  padding: 6px 12px;
  color: ${props => props.isActive ? '#9ACD32' : 'white'};
  cursor: pointer;
  font-size: 11px;
  font-weight: 300;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
  animation: ${props => props.isVisible ? staggeredSlideIn(props.delay) : staggeredSlideOut(props.delay)} 0.4s ease;
  
  &:hover {
    background: ${props => props.isActive ? 'rgba(154, 205, 50, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
    border-color: ${props => props.isActive ? 'rgba(154, 205, 50, 0.7)' : 'rgba(154, 205, 50, 0.5)'};
    transform: translateX(-2px);
  }
  
  &:active {
    transform: translateX(-1px) scale(0.98);
  }
  
  @media screen and (max-width: 768px) {
    padding: 5px 10px;
    font-size: 10px;
  }
  
  @media screen and (max-width: 480px) {
    padding: 4px 8px;
    font-size: 9px;
  }
`;

export const Separator = styled.div`
  width: 1px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 8px;
  flex-shrink: 0;
  
  @media screen and (max-width: 768px) {
    height: 16px;
    margin: 0 4px;
  }
  
  @media screen and (max-width: 480px) {
    height: 14px;
    margin: 0 2px;
  }
`;

export const ClearButton = styled.button`
padding: 6px 12px;
background: rgba(255, 0, 0, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255, 0, 0, 0.2);
border-radius: 12px;
color: rgba(255, 255, 255, 0.8);
font-size: 10px;
text-transform: uppercase;
letter-spacing: 1px;
cursor: pointer;
transition: all 0.3s ease;
animation: ${slideRight} 0.4s ease;
position: relative;
z-index: 1001;

&:hover {
  background: rgba(255, 0, 0, 0.2);
  border-color: rgba(255, 0, 0, 0.4);
  transform: scale(1.05);
}
`;