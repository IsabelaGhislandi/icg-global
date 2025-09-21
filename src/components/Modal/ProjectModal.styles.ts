import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: ${fadeIn} 0.3s ease;
`;

export const ModalContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  animation: ${slideUp} 0.4s ease;
  position: relative;
  
  @media screen and (max-width: 768px) {
    max-width: 95vw;
    max-height: 95vh;
    margin: 10px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1001;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
  
  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
    top: 10px;
    right: 10px;
  }
`;

export const ModalHeader = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
  
  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const ModalBody = styled.div`
  padding: 30px;
  
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const ProjectTitle = styled.h2`
  color: white;
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 10px 0;
  line-height: 1.2;
  
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ProjectCategory = styled.span`
  color: #9ACD32;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
  display: block;
`;

export const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 25px 0;
  
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const ProjectDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 25px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-bottom: 20px;
  }
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailLabel = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 5px;
`;

export const DetailValue = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 25px;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Tag = styled.span`
  background: rgba(154, 205, 50, 0.2);
  border: 1px solid rgba(154, 205, 50, 0.3);
  color: #9ACD32;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const ProjectLink = styled.a`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
  flex: 1;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
  
  @media screen and (max-width: 768px) {
    padding: 10px 20px;
    font-size: 13px;
  }
`;

export const ProjectGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 25px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    margin-top: 20px;
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media screen and (max-width: 768px) {
    height: 120px;
  }
`;
