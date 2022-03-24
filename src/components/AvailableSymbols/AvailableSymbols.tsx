import React from "react";
import { useStore } from "../../store";

const AvailableSymbols = () => {
const { storeState } = useStore();
const { symbols} = storeState;
// const symbols = useStore(state => state.symbols);
    return <ul>{symbols ? symbols.map((symbol: {symbol: string}, key: any) => <li key={key}>{symbol.symbol}</li>): null}</ul>

};

export default AvailableSymbols