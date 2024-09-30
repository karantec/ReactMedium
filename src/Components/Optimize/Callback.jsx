import React from 'react';

const Button = React.memo(({ handleClick }) => {
  console.log('Rendering Button');
  return <button onClick={handleClick}>Click me</button>;
});

export default Button;