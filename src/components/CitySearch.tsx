
import { useState, useEffect } from 'react';
import { SearchIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { properties } from '@/data/properties';

const CitySearch = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  // Get unique cities from properties
  const allCities = [...new Set(properties.map(property => property.city))];

  useEffect(() => {
    if (searchText.length > 0) {
      const filteredCities = allCities.filter(city =>
        city.toLowerCase().includes(searchText.toLowerCase())
      );
      setSuggestions(filteredCities);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchText, allCities]);

  const handleSearch = (city?: string) => {
    const selectedCity = city || searchText;
    if (selectedCity) {
      navigate(`/imoveis/${selectedCity}`);
    }
  };

  const handleSuggestionClick = (city: string) => {
    setSearchText(city);
    setShowSuggestions(false);
    handleSearch(city);
  };

  return (
    <div className="relative w-full max-w-lg">
      <div className="flex items-center">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Digite o nome da cidade..."
            className="w-full px-4 py-3 rounded-l-md border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
                setShowSuggestions(false);
              }
            }}
          />
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 mt-1 rounded-md shadow-lg z-10">
              {suggestions.map((city) => (
                <div
                  key={city}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(city)}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-r-md font-medium transition-colors flex items-center"
          onClick={() => handleSearch()}
        >
          <SearchIcon className="mr-2" size={20} />
          Buscar
        </button>
      </div>
    </div>
  );
};

export default CitySearch;
