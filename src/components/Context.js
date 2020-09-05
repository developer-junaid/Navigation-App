import React, { useState, createContext } from "react";

export const pinContext = createContext();

export const PinProvider = (props) => {
  // Create Stepper State
  const [pin, setPin] = useState(false);
  return (
    <pinContext.Provider value={{ pin, setPin }}>
      {props.children}
    </pinContext.Provider>
  );
};
