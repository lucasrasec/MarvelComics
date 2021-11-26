import React, { createContext, useState } from "react";

const AppContext = createContext(undefined);
const AppDispatchContext = createContext(undefined);

function AppProvider({ children }) {
  const [ctx, setCtx] = useState({
        comics: [],
        selection: [],
        page: 0,
        query: null,
        isModalOpen: false,
    });

    const dispatcher = (key, value) => {
            ctx[key] = value;

        setCtx({ ...ctx });
    };

  return (
    <AppContext.Provider value={ctx}>
      <AppDispatchContext.Provider value={dispatcher} >
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext, AppDispatchContext };