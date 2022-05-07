import React, { Suspense, lazy } from "react";
import Spinner from './components/Spinner';
import ReactDOM from "react-dom";
import "./index.css";
import Card from './components/Card';
const Homepage = lazy(() => import("./routes/Homepage"));
const Contact = lazy(() => import("./routes/Contact"));
import NotFound from "./routes/NotFound";
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <>
        <HashRouter>
          <Suspense fallback={<Card />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/404" element={<NotFound />} />
            </Routes>
          </Suspense>
        </HashRouter>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
