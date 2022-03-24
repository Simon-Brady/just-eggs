
import React from "react";
import { hot } from "react-hot-loader/root";
import {SelectedSymbol} from './components/SelectedSymbol'
import { SelectSymbol } from "./components/SelectSymbol";
import styled from '@emotion/styled';
import { AvailableSymbols } from "./components/AvailableSymbols";
import { AppStoreProvider } from "./store/AppStore";

const StyledWrapper = styled.div`
  font-family: 'Antonio', sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1{
    align-self: flex-end;
  }
`
export const App = () => {
  console.log('look at me go!')
return <StyledWrapper>
<h1>CONTEXT</h1>
<AppStoreProvider>
  <SelectedSymbol/>
  <SelectSymbol/>
  <AvailableSymbols/>
</AppStoreProvider>
</StyledWrapper>
}

export default hot(App);
