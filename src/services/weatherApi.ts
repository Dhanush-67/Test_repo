import { WeatherResponse } from '../types/weather.types';

const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';
// TODO: Move to environment variable (import.meta.env.VITE_WEATHER_API_KEY) for production
// For now, using hardcoded API key as per project requirements
const API_KEY = 'CGCAWWNLHDKLDFCJ5ZVFH99W9';

/**
 * Fetches weather data for a given location
 * @param location - City name or location string
 * @returns Promise with weather data
 * @throws Error if the API request fails
 */
export async function getWeatherData(location: string): Promise<WeatherResponse> {
  if (!location || location.trim() === '') {
    throw new Error('Location cannot be empty');
  }

  const url = `${BASE_URL}/${encodeURIComponent(location)}?key=${API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`Location "${location}" not found. Please try another location.`);
      } else if (response.status === 401) {
        throw new Error('API authentication failed. Please check the API key.');
      } else {
        throw new Error(`Failed to fetch weather data: ${response.statusText}`);
      }
    }

    const data: WeatherResponse = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred while fetching weather data');
  }
}

/**
 * Gets a weather icon/emoji based on the weather condition
 * @param icon - Icon code from the API
 * @returns Emoji representing the weather condition
 */
export function getWeatherIcon(icon: string): string {
  const iconMap: Record<string, string> = {
    'snow': '❄️',
    'rain': '🌧️',
    'fog': '🌫️',
    'wind': '💨',
    'cloudy': '☁️',
    'partly-cloudy-day': '⛅',
    'partly-cloudy-night': '🌙',
    'clear-day': '☀️',
    'clear-night': '🌙',
  };

  return iconMap[icon] || '🌤️';
}
