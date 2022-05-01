import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Homepage from "./routes/Homepage";
import Contact from "./routes/Contact";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { HashRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </> 
  </React.StrictMode>,
  document.getElementById('root')
)
