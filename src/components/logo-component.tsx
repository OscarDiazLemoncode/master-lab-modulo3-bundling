import React from 'react';
import * as classes from './logo-component-styles.scss';

interface Props {
  src: string;
}

export const Logo: React.FunctionComponent<Props> = (props) => {
  const { src } = props;
  return (
    <div className={classes.imgContainer}>
      <img src={src} alt="Logo Lemoncode" />
    </div>
  );
};
