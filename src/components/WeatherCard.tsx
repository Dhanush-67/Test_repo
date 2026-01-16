import { WeatherCardProps } from '../types/weather.types';
import { getWeatherIcon } from '../services/weatherApi';

export default function WeatherCard({ weather }: WeatherCardProps) {
  const { resolvedAddress, currentConditions } = weather;
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden backdrop-blur-lg bg-opacity-90">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-1">{resolvedAddress}</h2>
              <p className="text-blue-100">{currentDate}</p>
              <p className="text-blue-100">{currentTime}</p>
            </div>
            <div className="text-6xl">
              {getWeatherIcon(currentConditions.icon)}
            </div>
          </div>
        </div>

        {/* Main Weather Info */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-6xl font-bold text-gray-800">
                {Math.round(currentConditions.temp)}°F
              </div>
              <div className="text-xl text-gray-600 mt-2">
                Feels like {Math.round(currentConditions.feelslike)}°F
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-semibold text-gray-700 capitalize">
                {currentConditions.conditions}
              </div>
            </div>
          </div>

          {/* Weather Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-blue-500 text-2xl mb-2">💧</div>
              <div className="text-gray-600 text-sm">Humidity</div>
              <div className="text-gray-800 font-semibold text-lg">
                {Math.round(currentConditions.humidity)}%
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-blue-500 text-2xl mb-2">💨</div>
              <div className="text-gray-600 text-sm">Wind Speed</div>
              <div className="text-gray-800 font-semibold text-lg">
                {Math.round(currentConditions.windspeed)} mph
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-blue-500 text-2xl mb-2">🌡️</div>
              <div className="text-gray-600 text-sm">Pressure</div>
              <div className="text-gray-800 font-semibold text-lg">
                {Math.round(currentConditions.pressure)} mb
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-blue-500 text-2xl mb-2">👁️</div>
              <div className="text-gray-600 text-sm">Visibility</div>
              <div className="text-gray-800 font-semibold text-lg">
                {Math.round(currentConditions.visibility)} mi
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">UV Index:</span>
                <span className="font-semibold text-gray-800">{currentConditions.uvindex}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cloud Cover:</span>
                <span className="font-semibold text-gray-800">{Math.round(currentConditions.cloudcover)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunrise:</span>
                <span className="font-semibold text-gray-800">{currentConditions.sunrise}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunset:</span>
                <span className="font-semibold text-gray-800">{currentConditions.sunset}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
