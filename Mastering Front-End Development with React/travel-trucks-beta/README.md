# Travel Trucks - Camper Rental Service

A modern web application for browsing and booking camper rentals, built with React, Redux Toolkit, and Vite.

## 🚀 Features

- Browse camper catalog with advanced filtering
- Search by location, vehicle type, and equipment
- Add campers to favorites (persisted in localStorage)
- View detailed information about each camper
- Read customer reviews and ratings
- Book campers with an intuitive form
- Responsive design for desktop devices

## 🛠️ Technologies Used

- **React** - UI library
- **Redux Toolkit** - State management
- **React Router** - Routing
- **Axios** - HTTP requests
- **CSS Modules** - Styling
- **Vite** - Build tool
- **React Toastify** - Notifications

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/travel-trucks.git
cd travel-trucks
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```
VITE_API_URL=https://66b1f8e71ca8ad33d4f5f63e.mockapi.io
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🏗️ Build

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📂 Project Structure

```
src/
├── assets/         # Static assets (icons, images)
├── components/     # Reusable components
├── pages/          # Page components
├── redux/          # Redux store, slices, and selectors
├── services/       # API services
├── styles/         # Global styles
└── utils/          # Utility functions and constants
```

## 🌐 API Endpoints

The application uses the following API endpoints:

- `GET /campers` - Get all campers (with pagination and filters)
- `GET /campers/:id` - Get camper details by ID

## 🎨 Features Overview

### Home Page

- Hero section with call-to-action
- Navigation to catalog

### Catalog Page

- Filter panel with location, equipment, and vehicle type filters
- Camper cards with key information
- Load more pagination
- Add to favorites functionality

### Camper Details Page

- Image gallery
- Detailed specifications
- Customer reviews
- Booking form

## 🚀 Deployment

This project is configured for deployment on Vercel. The `vercel.json` file is included with proper routing configuration.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
