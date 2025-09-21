"use client";
import React, { useState, useRef } from 'react';
import { Card, CardImage, CardOverlay, CardContent, Title, Category } from './FloatingCard.styles';

interface FloatingCardProps {
  title: string;
  category: string;
  x: number;
  y: number;
  onClick: () => void;
  onPositionChange?: (newX: number, newY: number) => void;
  animationDelay?: number;
}

export const FloatingCard = ({ title, category, x, y, onClick, onPositionChange, animationDelay = 0 }: FloatingCardProps) => {
  const [position, setPosition] = useState({ x, y });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only left mouse button
    
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !e) return;
    
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = (e?: MouseEvent) => {
    if (isDragging) {
      setIsDragging(false);
      onPositionChange?.(position.x, position.y);
    }
  };

  // Add global mouse events when dragging
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
      <Card 
        ref={cardRef}
        x={position.x} 
        y={position.y} 
        animationDelay={animationDelay}
        onClick={isDragging ? undefined : onClick}
        onMouseDown={handleMouseDown}
        style={{ 
          zIndex: isDragging ? 1000 : 1,
          animationPlayState: isDragging ? 'paused' : 'running'
        }}
      >
      <CardImage src="/block1.png" alt={title} />
      <CardOverlay 
        style={{
          opacity: isDragging ? 0 : undefined
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '1';
          const content = e.currentTarget.querySelector('[data-content]') as HTMLElement;
          if (content) {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '0';
          const content = e.currentTarget.querySelector('[data-content]') as HTMLElement;
          if (content) {
            content.style.opacity = '0';
            content.style.transform = 'translateY(20px)';
          }
        }}
      >
        <CardContent data-content>
          <Title>{title}</Title>
          <Category>{category}</Category>
        </CardContent>
      </CardOverlay>
    </Card>
  );
};