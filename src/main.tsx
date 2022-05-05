import React, { Suspense, lazy } from "react";
import Spinner from './components/Spinner';
import ReactDOM from "react-dom";
import "./index.css";
const Homepage = lazy(() => import("./routes/Homepage"));
const Contact = lazy(() => import("./routes/Contact"));
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Suspense
            fallback={
              <div style={{ color: "#0000ff", textAlign:"center" }}>
                <h1>Loading...</h1>
                <Spinner />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </ThemeProvider>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
