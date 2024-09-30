import React, { useMemo } from 'react';

const ExpensiveComponent = ({ num }) => {
  const expensiveCalculation = (n) => {
    console.log('Calculating...');
    return n * 1000;
  };

  const result = useMemo(() => expensiveCalculation(num), [num]);

  return <div>Result: {result}</div>;
};
export default ExpensiveComponent;