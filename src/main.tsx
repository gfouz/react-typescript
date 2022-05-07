import React, { Suspense, lazy } from "react";
import Spinner from './components/Spinner';
import ReactDOM from "react-dom";
import "./index.css";
import SpyGlass from './icons/SpyGlass'
const Homepage = lazy(() => import("./routes/Homepage"));
const Contact = lazy(() => import("./routes/Contact"));
import NotFound from "./routes/NotFound";
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
                <h1 style={{margin: "2em 0"}}>Loading...</h1>
                <SpyGlass color="#3f51b5" size="3em" />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/404" element={<NotFound />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </ThemeProvider>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
