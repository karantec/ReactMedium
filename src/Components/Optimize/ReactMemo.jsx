import React, { useState } from 'react';

// Memoized component
const MyComponent = React.memo(({ value }) => {
  console.log('Rendering MyComponent');
  return <div>{value}</div>;
});

export default MyComponent;