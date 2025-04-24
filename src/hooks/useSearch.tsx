
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  }, [searchQuery, navigate]);

  return {
    searchQuery,
    setSearchQuery,
    handleSearch
  };
};
