// import './mystyles.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { AverageComponent } from './components/average-component';
import { Card } from './components/card-component';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <div>
      <AverageComponent />
      <Card />
    </div>
  );
} else {
  throw new Error('Root element not found');
}
