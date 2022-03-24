import React, { createContext, useReducer } from "react";
import INITIAL_STATE from "../constants/initialState";
import appStoreReducer from "../reducers/appStoreReducer";
import { useStoreActions } from "./useStoreActions";

export const AppStoreContext = createContext();
/**
 *
 * @param {node} children - Contents that are children of the store
 */
export const AppStoreProvider = ({ children }) => {
  const [storeState, storeDispatch] = useReducer(
    appStoreReducer,
    INITIAL_STATE
  );
  const storeActions = useStoreActions(storeState, storeDispatch);
  const value = { storeState, storeDispatch, storeActions };

  return (
    <AppStoreContext.Provider value={value}>
      {children}
    </AppStoreContext.Provider>
  );
};
