import React from "react";
import './App.css';
import StateHook from "./Components/StateHook";
import EffectHook from "./Components/EffectHook";

const App = () => {
  return (
      <div className="app">
        <StateHook value={10} />
        <EffectHook />
      </div>
  );
}

export default App;
