import React from 'react';
import { getAvg } from '../average-service';

export const AverageComponent = () => {
  const [average, setAverage] = React.useState(0);

  React.useEffect(() => {
    const scores = [10, 20, 30, 40, 50];
    setAverage(getAvg(scores));
  }, []);

  return (
    <div>
      <span>Students average:{average}</span>
    </div>
  );
};
