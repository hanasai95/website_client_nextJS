import React, { useState } from "react";
import AppContext from ".";

const ContextProvider = ({ children }) => {
  const [currentProject, setCurrentProject] = useState("");
  const context = {
    currentProject,
    setCurrentProject,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
