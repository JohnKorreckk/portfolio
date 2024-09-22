import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import RootLayout from './layout'; // Ensure this path is correct

const rootElement = document.getElementById('root'); // Get the root element
const root = createRoot(rootElement); // Create a root

root.render(
  <React.StrictMode>
    <RootLayout />
  </React.StrictMode>
);