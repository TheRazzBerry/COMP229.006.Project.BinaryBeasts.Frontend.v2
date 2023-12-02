// Import Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import Routes
import ErrorPage from './error-page.jsx';
import Root from './routes/root.jsx';

// Define Router
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />
    }
]);

// Render
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><RouterProvider router={router} /></React.StrictMode>);
