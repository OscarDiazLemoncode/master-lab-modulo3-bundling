import React from 'react';

export const Greet = (props) => {
  const { text } = props;
  return <h1 className="heading_color">{text}</h1>;
};
