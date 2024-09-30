// src/ChildComponent.js
import React from 'react';

const ChildComponent = React.memo(({ onIncrement }) => {
    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={onIncrement}>Increment from Child</button>
        </div>
    );
});

export default ChildComponent;
