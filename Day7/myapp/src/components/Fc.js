import React, { useState, useEffect } from 'react';

const SimpleEffectComponent = () => {
    // useEffect(() => {
    //     console.log('Effect without dependencies - Component Did Mount');
    // }, []);


    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log('Effect with dependencies - Component Did Update');
    }, [count]);

    return (
        <div>
            <h1>Simple Effect Component</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment Count</button>
        </div>
    );
};

export default SimpleEffectComponent;
