import React from 'react';
import * as classes from './greet-component-styles.scss';

export const Greet = (props) => {
  const { text } = props;
  return <h1 className={classes.headingColor}>{text}</h1>;
};
