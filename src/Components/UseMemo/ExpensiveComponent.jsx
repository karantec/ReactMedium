import  { useState, useMemo } from 'react';

const ExpensiveComponent = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    // Simulate an expensive calculation
    const computeExpensiveValue = (num) => {
        console.log('Computing expensive value...');
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += num +5;
        }
        return result;
    };

    // Use useMemo to memoize the result of the expensive calculation
    const memoizedValue = useMemo(() => computeExpensiveValue(count), [count]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>Computed Value: {memoizedValue}</h2>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Type something..." 
            />
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
};

export default ExpensiveComponent;
