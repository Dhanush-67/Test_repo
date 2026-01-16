import { LoadingSpinnerProps } from '../types/weather.types';

export default function LoadingSpinner({ message = 'Loading...' }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-300">{message}</p>
    </div>
  );
}
