import { useState } from 'react';
import { Project, SearchState } from '../types';

export const useProjects = (initialProjects: Project[]) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const updateProjectPosition = (id: number, x: number, y: number) => {
    setProjects(prev => 
      prev.map(project => 
        project.id === id 
          ? { ...project, x, y }
          : project
      )
    );
  };

  const filterProjects = (searchState: SearchState): Project[] => {
    return projects.filter(project => {
      const matchesSearch = !searchState.query || 
                           project.title.toLowerCase().includes(searchState.query.toLowerCase()) ||
                           project.category.toLowerCase().includes(searchState.query.toLowerCase());
      
      const matchesFilter = searchState.activeFilters.length === 0 || 
                           searchState.activeFilters.includes(project.category);
      
      return matchesSearch && matchesFilter;
    });
  };

  return {
    projects,
    updateProjectPosition,
    filterProjects
  };
};
