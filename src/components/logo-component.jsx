import React from 'react';
import * as classes from './logo-component-styles.scss';

export const Logo = (props) => {
  const { src } = props;
  return (
    <div className={classes.imgContainer}>
      <img src={src} alt="Logo Lemoncode" />
    </div>
  );
};
