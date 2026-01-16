// Weather API Response Types
export interface WeatherResponse {
  resolvedAddress: string;
  address: string;
  timezone: string;
  days: DayWeather[];
  currentConditions: CurrentConditions;
}

export interface CurrentConditions {
  datetime: string;
  temp: number;
  feelslike: number;
  humidity: number;
  dew: number;
  precip: number;
  precipprob: number;
  snow: number;
  snowdepth: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  visibility: number;
  cloudcover: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  conditions: string;
  icon: string;
  sunrise: string;
  sunset: string;
  moonphase: number;
}

export interface DayWeather {
  datetime: string;
  tempmax: number;
  tempmin: number;
  temp: number;
  feelslike: number;
  humidity: number;
  precip: number;
  precipprob: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  cloudcover: number;
  visibility: number;
  uvindex: number;
  conditions: string;
  description: string;
  icon: string;
  hours?: HourWeather[];
}

export interface HourWeather {
  datetime: string;
  temp: number;
  humidity: number;
  precip: number;
  windspeed: number;
  conditions: string;
  icon: string;
}

// Component Props Types
export interface SearchBarProps {
  onSearch: (location: string) => void;
  isLoading: boolean;
}

export interface WeatherCardProps {
  weather: WeatherResponse;
}

export interface LoadingSpinnerProps {
  message?: string;
}

// Error Type
export interface WeatherError {
  message: string;
  code?: string;
}
