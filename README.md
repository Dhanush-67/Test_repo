# Weather App - React TypeScript

A modern, responsive weather application built with React, TypeScript, and Tailwind CSS. Get real-time weather information for any location worldwide.

![Weather App](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-blue)

## 🌟 Features

- **Real-time Weather Data**: Get current weather conditions for any location
- **Beautiful UI**: Modern, clean interface with gradient backgrounds and smooth animations
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **TypeScript**: Fully typed for better development experience and fewer bugs
- **Tailwind CSS**: Utility-first CSS for rapid UI development
- **Error Handling**: User-friendly error messages for better UX
- **Loading States**: Visual feedback during API calls

## 🛠️ Technologies Used

- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next generation frontend tooling
- **Visual Crossing Weather API** - Weather data provider

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Dhanush-67/Test_repo.git
cd Test_repo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open in your browser at `http://localhost:3000`

### Build for Production

To create a production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── SearchBar.tsx      # Search input component
│   ├── WeatherCard.tsx    # Weather display component
│   └── LoadingSpinner.tsx # Loading state component
├── types/
│   └── weather.types.ts   # TypeScript type definitions
├── services/
│   └── weatherApi.ts      # API service layer
├── App.tsx                # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles with Tailwind directives
```

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments on every push.

### Deploy to Other Platforms

The app can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

Simply run `npm run build` and deploy the contents of the `dist` folder.

## 🔑 API Configuration

This app uses the Visual Crossing Weather API. The API key is currently hardcoded in the source code for demonstration purposes.

**For production use**, it's recommended to:
1. Store the API key in environment variables
2. Use a `.env` file with `VITE_WEATHER_API_KEY`
3. Update the service to use `import.meta.env.VITE_WEATHER_API_KEY`

## 🎨 Customization

### Styling

The app uses Tailwind CSS for styling. You can customize the design by:
- Editing `tailwind.config.js` for theme customization
- Modifying component styles in their respective `.tsx` files
- Adding custom CSS in `src/index.css`

### Weather Icons

Weather icons are currently emojis. You can replace them with:
- Custom SVG icons
- Icon libraries like Font Awesome or Heroicons
- Weather-specific icon sets

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally

## 🐛 Known Issues

None at the moment. Please report any bugs in the GitHub issues section.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 👏 Acknowledgments

- Weather data provided by [Visual Crossing Weather API](https://www.visualcrossing.com/)
- Icons and design inspiration from various weather apps
- Built with ❤️ using React, TypeScript, and Tailwind CSS
