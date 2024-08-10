import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

/* Pages */
import HomePage from './pages/HomePage.jsx';
import FeaturesPage from './pages/FeaturesPage'
import ThemesPage from './pages/ThemesPage'
import BlogPage from './pages/BlogPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [{
			path: '/',
			element: <HomePage />,
		},
    { 
      path: '/features',
      element: <FeaturesPage/>
    },
    {
      path: '/themes',
      element: <ThemesPage/>
    },

    {
      path: '/blog',
      element: <BlogPage/> 
    }
  ],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
