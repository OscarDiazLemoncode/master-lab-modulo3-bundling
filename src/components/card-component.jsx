import React from 'react';
import { Greet } from './greet-component';
import { Logo } from './logo-component';

export const Card = () => {
  return (
    <>
      <div className="card primaryBackground" style={{ width: '18rem' }}>
        <div className="card-body">
          <Logo />
          <Greet text="Hola Mundo!" />
        </div>
      </div>
    </>
  );
};
