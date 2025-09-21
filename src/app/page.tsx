"use client";
import { CardContainer } from '../components/Cards/CardContainer';
import { FloatingCard } from '../components/Cards/FloatingCard';
import { CircularMenu } from '../components/Menu/CircularMenu';
import { ProjectModal } from '../components/Modal/ProjectModal';
import { useProjects } from '../hooks/useProjects';
import { useSearch } from '../hooks/useSearch';
import { useModal } from '../hooks/useModal';
import { projectsData } from '../config/projects';
import { useMemo } from 'react';

export default function Home() {
  const { projects, updateProjectPosition, filterProjects } = useProjects(projectsData);
  const { searchState, updateQuery, updateFilters } = useSearch();
  const { modalState, openModal, closeModal } = useModal();

  const filteredProjects = useMemo(() => {
    return filterProjects(searchState);
  }, [projects, searchState, filterProjects]);

  return (
    <>
      <CardContainer>
        {filteredProjects.map((project, index) => (
          <FloatingCard
            key={project.id}
            title={project.title}
            category={project.category}
            x={project.x}
            y={project.y}
            animationDelay={index}
            onClick={() => openModal(project)}
            onPositionChange={(newX, newY) => updateProjectPosition(project.id, newX, newY)}
          />
        ))}
      </CardContainer>
      
      <CircularMenu 
        onFilter={updateFilters}
        onSearch={updateQuery}
        activeFilters={searchState.activeFilters}
        searchQuery={searchState.query}
      />
      
      <ProjectModal
        project={modalState.selectedProject}
        isOpen={modalState.isOpen}
        onClose={closeModal}
      />
    </>
  );
}