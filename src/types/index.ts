export interface Project {
  id: number;
  title: string;
  category: string;
  x: number;
  y: number;
  description: string;
  image: string;
  year: string;
  client: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
    behance?: string;
    ep?: string;
  };
  gallery?: string[];
}

export interface Position {
  x: number;
  y: number;
}

export interface MenuState {
  isOpen: boolean;
  isAnimating: boolean;
}

export interface SearchState {
  query: string;
  activeFilters: string[];
}

export interface ModalState {
  isOpen: boolean;
  selectedProject: Project | null;
}

export enum ProjectCategory {
  FASHION = 'Fashion',
  CULTURAL = 'Cultural',
  ENTERTAINMENT = 'Entertainment',
  ARCHITECTURE = 'Architecture',
  MUSEUM = 'Museum',
  COMMERCIAL = 'Commercial',
  DIGITAL = 'Digital',
  RESEARCH = 'Research'
}

export interface CardProps {
  project: Project;
  animationDelay: number;
  onPositionChange: (id: number, x: number, y: number) => void;
  onClick: (project: Project) => void;
}

export interface MenuProps {
  searchState: SearchState;
  onSearchChange: (query: string) => void;
  onFilterChange: (filters: string[]) => void;
}

export interface ModalProps {
  modalState: ModalState;
  onClose: () => void;
}
