import React from "react";
import pageTheme from "./shared/styles/pageTheme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "shared/styles/GlobalStyle";
import Routes from "routes/Index";
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <>
      <ThemeProvider theme={pageTheme}>
        <GlobalStyle/>
        <Routes/>
        <Analytics />
      </ThemeProvider>
    </>
  );
};

export default App;
