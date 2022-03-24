export default (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_SYMBOL":
      return {
        ...state,
        selectedSymbol: action.value,
      };
    default:
      throw new Error(`Unhandled action type: ${action.value}`);
  }
};
