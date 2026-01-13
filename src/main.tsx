import { RouterProvider, createRouter } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';

import { routeTree } from './routeTree.gen.ts';

import reportWebVitals from './reportWebVitals.ts';
import './styles.css';

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('app');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
      <RouterProvider router={router} />
  );
}

reportWebVitals();
