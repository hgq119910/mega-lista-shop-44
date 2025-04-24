
import { useState, useCallback } from 'react';
import { useRouter } from 'react-router-dom';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  }, [searchQuery, router]);

  return {
    searchQuery,
    setSearchQuery,
    handleSearch
  };
};
