import React from 'react';
import * as classes from './greet-component-styles.scss';

interface Props {
  text: string;
}

export const Greet: React.FC<Props> = (props) => {
  const { text } = props;
  return <h1 className={classes.headingColor}>{text}</h1>;
};
