// import './mystyles.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Card } from './components/card-component';

const rootElement = document.getElementById('root');
if (rootElement && rootElement instanceof HTMLDivElement) {
  const root = createRoot(rootElement);
  root.render(
    <div>
      <Card />
    </div>
  );
} else {
  throw new Error('Root element not found');
}
