import React, { Suspense, lazy } from "react";
import Spinner from './components/Spinner';
import ReactDOM from "react-dom";
import "./index.css";
import Card from './components/Card';
const Homepage = lazy(() => import("./routes/homepage/index"));
const Contact = lazy(() => import("./routes/contact/index"));
const Work = lazy(() => import("./routes/work/index"));
const Blog = lazy(() => import("./routes/blog/index"));
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <>
        <HashRouter>
          <Suspense fallback={<Card />}>
            <Routes>
              <Route path="/" element={<Homepage />}/>
              <Route path="/contact" element={<Contact />} />
              <Route path="/work" element={<Work />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </Suspense>
        </HashRouter>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
