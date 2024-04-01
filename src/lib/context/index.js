import { useMediaQuery } from "@mui/material";
import { createContext, useState } from "react";

export const ApplicationContext = createContext();
export const ApplicationContextProvider = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [populationData, setPopulationData] = useState([]);
  const [priceData, setPriceData] = useState([]);
  const globalQuery = useMediaQuery('(max-width:960px)')


  const states = {
    activeTab,
    setActiveTab,

    populationData,
    setPopulationData,

    priceData,
    setPriceData,

    globalQuery
  };

  return (
    <ApplicationContext.Provider value={states}>
      {props.children}
    </ApplicationContext.Provider>
  );
};
