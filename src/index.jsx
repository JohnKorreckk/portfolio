import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App'; // Import App component

const rootElement = document.getElementById('root'); // Get the root element
const root = createRoot(rootElement); // Create a root

root.render(
  <React.StrictMode>
    <App /> {/* Render your App component */}
  </React.StrictMode>
);
