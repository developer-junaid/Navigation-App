import React from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import { PinProvider } from "./components/Context";

const App = () => {
  return (
    <div className="App">
      <PinProvider>
        <Navigation />
      </PinProvider>
    </div>
  );
};

export default App;
