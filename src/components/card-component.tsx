import React from 'react';
import { Greet } from './greet-component';
import { Logo } from './logo-component';
import logoLemoncode from '../content/logo_1.png';
import logoTextLemoncode from '../content/logo_2.png';
import * as classes from './card-component-styles.scss';

export const Card: React.FC = () => {
  return (
    <>
      <div className={classes.card}>
        <Logo src={logoLemoncode} />
        <Greet text="Hola Mundo!" />
        <Logo src={logoTextLemoncode} />
      </div>
    </>
  );
};
