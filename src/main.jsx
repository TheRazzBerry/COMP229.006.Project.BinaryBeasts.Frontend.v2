// Import Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import Routes
import ErrorPage from './error-page.jsx';
import Root from './routes/root.jsx';
import Users from './routes/users.jsx';

// Import Components
import PrivateRoute from './components/auth/privateRoute.jsx';

// Define Router
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />
    },
    {
        path: 'users',
        element: <Users />,
        errorElement: <ErrorPage />
    }
]);

// Render
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><RouterProvider router={router} /></React.StrictMode>);