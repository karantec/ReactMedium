// Example 1: Basic Higher-Order Component

// Here's a simple HOC that adds a loading spinner to a wrapped component:
// HOC Definition

// jsx

import React from 'react';

const withLoading = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoading;

// Using the HOC

// jsx

import React from 'react';
import withLoading from './withLoading';

const DataDisplay = ({ data }) => {
  return <div>Data: {data}</div>;
};

const EnhancedDataDisplay = withLoading(DataDisplay);

function App() {
  return (
    <div>
      <EnhancedDataDisplay isLoading={true} />
      <EnhancedDataDisplay isLoading={false} data="Hello, World!" />
    </div>
  );
}

export default App;

// Explanation:

//     HOC Definition: withLoading is a function that takes WrappedComponent and returns a new component. This new component checks if isLoading is true. If so, it renders a loading message; otherwise, it renders the WrappedComponent with the provided props.
//     Usage: DataDisplay is wrapped by withLoading to create EnhancedDataDisplay. Depending on the isLoading prop, it either shows a loading message or the actual data.