import React, { useState, useEffect } from "react";

const EffectHook = () => {
    const [count, setCount] = useState(0);

/*
    you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
    __ What does useEffect do? __
    By using this Hook, you tell React that your component needs to do something AFTER render.
    React will remember the function you passed (we’ll refer to it as our “effect”),
    and call it later after performing the DOM updates.
    We pass a function to the useEffect Hook.
    This function we pass is our effect.
*/
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }
    );

    function handleCount() {
        setCount(count + 1);
        // document.title = `You clicked ${count} times`;
    }

    return (
        <div className="effecthook-container">
            <p>You clicked {count} times</p>
            <button onClick={handleCount}>
                Click me
            </button>
        </div>
    );


}

export default EffectHook;