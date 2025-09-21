"use client";
import { useEffect } from 'react';
import { Project } from '../../types';
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalHeader,
  ModalImage,
  ModalBody,
  ProjectTitle,
  ProjectCategory,
  ProjectDescription,
  ProjectDetails,
  DetailItem,
  DetailLabel,
  DetailValue,
  ProjectTags,
  Tag,
  ProjectLinks,
  ProjectLink,
  ProjectGallery,
  GalleryImage
} from './ProjectModal.styles';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          ×
        </CloseButton>

        <ModalHeader>
          <ModalImage src={project.image} alt={project.title} />
        </ModalHeader>

        <ModalBody>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectCategory>{project.category}</ProjectCategory>
          
          <ProjectDescription>{project.description}</ProjectDescription>

          <ProjectDetails>
            <DetailItem>
              <DetailLabel>Year</DetailLabel>
              <DetailValue>{project.year}</DetailValue>
            </DetailItem>

            <DetailItem>
              <DetailLabel>Client</DetailLabel>
              <DetailValue>{project.client}</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailLabel>Category</DetailLabel>
              <DetailValue>{project.category}</DetailValue>
            </DetailItem>
          </ProjectDetails>

          <ProjectTags>
            {project.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </ProjectTags>

          <ProjectLinks>
            {project.links.live && (
              <ProjectLink href={project.links.live} target="_blank" rel="noopener noreferrer">
                View Live
              </ProjectLink>
            )}
            {project.links.github && (
              <ProjectLink href={project.links.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </ProjectLink>
            )}
            {project.links.behance && (
              <ProjectLink href={project.links.behance} target="_blank" rel="noopener noreferrer">
                Behance
              </ProjectLink>
            )}
          </ProjectLinks>

          {project.gallery && project.gallery.length > 0 && (
            <ProjectGallery>
              {project.gallery.map((image, index) => (
                <GalleryImage
                  key={index}
                  src={image}
                  alt={`${project.title} - Gallery ${index + 1}`}
                />
              ))}
            </ProjectGallery>
          )}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};