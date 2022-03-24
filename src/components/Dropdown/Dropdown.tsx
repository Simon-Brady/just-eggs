import React from "react";

interface ISymbol {
    symbol: string
}

interface ISymbols {
    onSymbolChange: any,
  symbols: ISymbol[];
} 
const Dropdown = ({onSymbolChange, symbols} : ISymbols) => {

    console.log(symbols)
    return (
    <select className='select' name='symbol' onChange={onSymbolChange}>
            {symbols ? symbols.map((symbol) => {
                let symbolValue = symbol.symbol
                return (<option value={symbolValue}>{symbolValue}</option>)}) : null}
        </select>
        )

}
export default Dropdown;