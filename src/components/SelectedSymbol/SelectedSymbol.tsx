import React from "react";
import { useStore } from "../../store";

const SelectedSymbol = () => {
    const { storeState } = useStore();
    const { selectedSymbol } = storeState;
    return <p>Selected Symbol: {selectedSymbol}</p>
}
export default SelectedSymbol