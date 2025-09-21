"use client";

import { useState, useEffect, ReactNode } from 'react';
import { Container, ZoomableArea } from './CardContainer.styles';

interface CardContainerProps {
  children: ReactNode;
}

export const CardContainer = ({ children }: CardContainerProps) => {
  const [scale, setScale] = useState(1);
  
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY * -0.001;
      setScale(prev => Math.min(Math.max(prev + delta, 0.5), 3));
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <Container>
      <ZoomableArea scale={scale}>
        {children}
      </ZoomableArea>
    </Container>
  );
};