import React from 'react';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CoffesProvider } from "./context";

export function App() {
  return (
    <React.StrictMode> 
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CoffesProvider>
            <Router />
          </CoffesProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </React.StrictMode>
  );
}
