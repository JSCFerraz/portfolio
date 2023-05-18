import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "@/styles/Global";
import { Home } from "@/pages/home";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RoutesMain as Routes } from "./routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle>
        {/* <NavBar />
        <Home />
        <Footer /> */}
        <Routes />
      </GlobalStyle>
    </BrowserRouter>
  </React.StrictMode>
);
