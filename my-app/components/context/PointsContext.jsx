import React, { createContext, useContext, useState } from 'react';

// Create the context
const PointsContext = createContext();

// Create a provider component
export const PointsProvider = ({ children }) => {
  const [points, setPoints] = useState(0);

  // Function to add points
  const addPoints = (amount) => {
    setPoints((prevPoints) => prevPoints + amount);
  };

  // Function to subtract points
  const subtractPoints = (amount) => {
    setPoints((prevPoints) => Math.max(prevPoints - amount, 0)); // Ensure points don’t go below 0
  };

  // Function to reset points
  const resetPoints = () => {
    setPoints(0);
  };

  return (
    <PointsContext.Provider value={{ points, setPoints, addPoints, subtractPoints, resetPoints }}>
      {children}
    </PointsContext.Provider>
  );
};

// Custom hook for using the PointsContext
export const usePoints = () => useContext(PointsContext);