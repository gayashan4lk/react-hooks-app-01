import React from "react";
import './App.css';
import StateHook from "./Components/StateHook";
import EffectHook from "./Components/EffectHook";
import Clock from "./Components/Clock";

const App = () => {
  return (
      <div className="app">
        <StateHook value={10} />
        <EffectHook />
        <Clock />
      </div>
  );
}

export default App;
