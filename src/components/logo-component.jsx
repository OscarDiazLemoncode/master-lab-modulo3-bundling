import React from 'react';
import './logo-component-styles.scss';

export const Logo = (props) => {
  const { src } = props;
  return (
    <div id="imgContainer">
      <img src={src} alt="Logo Lemoncode" />
    </div>
  );
};
