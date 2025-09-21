"use client";
import { useState } from 'react';
import { 
  MenuContainer, 
  MainButton, 
  MenuItems, 
  MenuItem, 
  MenuItemLink,
  SearchInput,
  FilterButton,
  ClearButton,
  Separator
} from './CircularMenu.styles';


interface CircularMenuProps {
  onFilter?: (filters: string[]) => void;
  onSearch?: (query: string) => void;
  activeFilters?: string[];
  searchQuery?: string;
}

const categories = [
  'Fashion', 'Cultural', 'Entertainment', 'Architecture', 
  'Museum', 'Commercial', 'Digital', 'Research'
];

export const CircularMenu = ({ onFilter, onSearch, activeFilters = [], searchQuery = '' }: CircularMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleFilter = (category: string) => {
    if (!onFilter) return;
    
    const newFilters = activeFilters.includes(category)
      ? activeFilters.filter(f => f !== category)
      : [...activeFilters, category];
    onFilter(newFilters);
  };

  const clearFilters = () => {
    if (onFilter) onFilter([]);
    if (onSearch) onSearch('');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <MenuContainer>
      <MainButton isOpen={isOpen} onClick={toggleMenu}>
        MENU
      </MainButton>
      <MenuItems isOpen={isOpen}>
        {/* Search Input */}
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          isVisible={isOpen}
          delay={0}
        />
        
        {/* Navigation Links */}
        <MenuItemLink href="/projects" delay={1} isVisible={isOpen}>Projects</MenuItemLink>
        <MenuItemLink href="/about" delay={2} isVisible={isOpen}>About</MenuItemLink>
        <MenuItemLink href="/contact" delay={3} isVisible={isOpen}>Contact</MenuItemLink>
        
        {/* Separator */}
        <Separator />
        
        {/* Filter Buttons */}
        {categories.map((category, index) => (
          <FilterButton
            key={category}
            isActive={activeFilters.includes(category)}
            onClick={() => toggleFilter(category)}
            delay={4 + index}
            isVisible={isOpen}
          >
            {category}
          </FilterButton>
        ))}
        
        {/* Clear Button */}
        {(activeFilters.length > 0 || searchQuery) && (
          <ClearButton onClick={clearFilters}>
            Clear
          </ClearButton>
        )}
      </MenuItems>
    </MenuContainer>
  );
};
