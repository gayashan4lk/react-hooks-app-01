import React from "react";
import { useState } from "react";

const StateHook = (props) => {

    // Declare a new state variable called "count", set the initial value to "5".
    const [count, setCount] = useState(5);

    // The names on the left aren’t a part of the React API. You can name your own state variables
    const [fruit, setFruit] = useState("banana");

    // What Do Square Brackets Mean?
    // It means “array destructuring”
    const animalStateVariable = useState('chicken'); // Returns a pair
    console.log("returned array from 'useState' : ", animalStateVariable);
    const animal = animalStateVariable[0]; // First item in a pair
    const setAnimal = animalStateVariable[1]; // Second item in a pair

    // State variables can hold objects and arrays
    let intialTodo = {
        learning : ['learn hooks']
    }
    const [todos, setTotodos] = useState(intialTodo);

    // *** However, unlike this.setState in a class,
    // *** updating a state variable always replaces it instead of merging it.


    // In a function, we can use count directly:
    console.log("state variable 'count' : ", count);
    console.log("state variable 'fruit' : ", fruit);
    console.log("state variable 'fruit' : ", animal);
    console.log("state variable 'todos' : ", todos);

    function handleIncrement () {
        setCount (count + 1);
    }

    function handleDecrement() {
        setCount (count - 1);
    }

    function handleMakeOrange() {
        setFruit ("Orange")
    }

    function handleMakeBeef() {
        setAnimal ("Beef");
    }
    function handleAddTodos() {
        const newTodo = {
            learning : ['Learn Maths', 'learn hooks']
        }
        setTotodos (newTodo);
    }

    return (
        <div className="statehook-container">
            <span><b>Example</b></span>
            <hr/>
            <p>Props value : {props.value}</p>
            <hr/>
            <p><b>State variable "count" : {count}</b></p>
            <button onClick={handleIncrement}>Increase count</button>
            <button onClick={handleDecrement}>Decrease count</button>
            <hr/>
            <h4>State variable "fruit" : {fruit}</h4>
            <button onClick={handleMakeOrange}>Turn Banana to Orange</button>
            <hr/>
            <h4>State variable "animal" : {animal}</h4>
            <button onClick={handleMakeBeef}>Turn chicken to Beef</button>
            <hr/>
            <h4>State variable "todos" : </h4>
            <ul>
                {todos.learning.map((item) =>
                <li>{item}</li>
                )}
            </ul>
            <button onClick={handleAddTodos} >Add</button>
        </div>
    );
}

export default StateHook;