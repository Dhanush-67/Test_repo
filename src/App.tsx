import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import { getWeatherData } from './services/weatherApi';
import { WeatherResponse } from './types/weather.types';

function App() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load default location (London) on mount
  useEffect(() => {
    handleSearch('London');
  }, []);

  const handleSearch = async (location: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getWeatherData(location);
      setWeather(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
      setWeather(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-3 drop-shadow-lg">
            ☀️ Weather App
          </h1>
          <p className="text-white text-lg opacity-90">
            Get real-time weather information for any location
          </p>
        </header>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {/* Content Area */}
        <div className="mt-8">
          {isLoading && <LoadingSpinner message="Fetching weather data..." />}

          {error && !isLoading && (
            <div className="max-w-2xl mx-auto bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-3">⚠️</span>
                <div>
                  <p className="font-bold">Error</p>
                  <p>{error}</p>
                </div>
              </div>
            </div>
          )}

          {weather && !isLoading && !error && <WeatherCard weather={weather} />}
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-white opacity-75">
          <p className="text-sm">
            Powered by Visual Crossing Weather API
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
