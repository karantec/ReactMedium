import React, { useState } from 'react';

// List component to display items
const List = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <li>{item.name}</li>
        </React.Fragment>
      ))}
    </ul>
  );
};
export default List;

// App component
