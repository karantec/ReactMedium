import React, { useState, useCallback } from 'react';

// Child component that receives a callback function as a prop
const Child = React.memo(({ onClick }) => {
    console.log('Child component rendered');
    return (
        <button onClick={onClick}>Click me</button>
    );
});

const Parent = () => {
    const [count, setCount] = useState(0);

    // Memoizing the handleClick function
    const handleClick = useCallback(() => {
        console.log('Button clicked!');
    }, []); // No dependencies means this function will not change

    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incrementCount}>Increment Count</button>
            {/* Passing the memoized callback to the child component */}
            <Child onClick={handleClick} />
        </div>
    );
};

export default Parent;
