import { useState, FormEvent } from 'react';
import { SearchBarProps } from '../types/weather.types';

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [location, setLocation] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city name (e.g., London, New York)"
          className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all text-gray-800"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !location.trim()}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95"
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
}
