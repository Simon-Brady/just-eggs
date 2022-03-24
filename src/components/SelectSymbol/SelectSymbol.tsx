import React from "react";
import { Dropdown } from "../Dropdown";
import { useStore } from "../../store";
type DOMTargetT = {value: string}
type ChangeSymbolT = { target: DOMTargetT}

const SelectSymbol = () => {
const { storeState, storeActions } = useStore();
const { symbols } = storeState;
const {setSelectedSymbol} = storeActions;


const onSymbolChange = (e: ChangeSymbolT) => {
    const { target } = e;
    const { value } = target;
    setSelectedSymbol(value)
}
return <Dropdown onSymbolChange={onSymbolChange} symbols={symbols}/>
}
export default SelectSymbol
