import React, { useState, createContext } from "react";

export const PortfolioContext = createContext();

export const PortfolioContextProvider = (props) => {
  const [portfolio, setPortfolio] = useState([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  const addPortfolio = (portfolio) => {
    setPortfolio([...portfolio, portfolio]);
  };
  return (
    <PortfolioContext.Provider
      value={{
        portfolio,
        setPortfolio,
        addPortfolio,
        selectedPortfolio,
        setSelectedPortfolio,
      }}
    >
      {props.children}
    </PortfolioContext.Provider>
  );
};
