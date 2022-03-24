export const useStoreActions = (state, dispatch) => {
  const setSelectedSymbol = (e) => {
    dispatch({ type: "SET_SELECTED_SYMBOL", value: e });
  };
  return {
    setSelectedSymbol,
  };
};
