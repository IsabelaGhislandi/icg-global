import { useState } from 'react';
import { SearchState } from '../types';

export const useSearch = (): {
  searchState: SearchState;
  updateQuery: (query: string) => void;
  updateFilters: (filters: string[]) => void;
  clearAll: () => void;
} => {
  const [searchState, setSearchState] = useState<SearchState>({
    query: '',
    activeFilters: []
  });

  const updateQuery = (query: string) => {
    setSearchState(prev => ({ ...prev, query }));
  };

  const updateFilters = (activeFilters: string[]) => {
    setSearchState(prev => ({ ...prev, activeFilters }));
  };

  const clearAll = () => {
    setSearchState({ query: '', activeFilters: [] });
  };

  return {
    searchState,
    updateQuery,
    updateFilters,
    clearAll
  };
};
