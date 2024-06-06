import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { CookiesProvider } from "react-cookie";
import { Router } from "./navigations/navigationRoutes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CookiesProvider>
      <Router />
      <ToastContainer />
    </CookiesProvider>
  </React.StrictMode>
);
