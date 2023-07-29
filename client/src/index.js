import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import App from "./App";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "./assets/styles/globals.css";
import { StateContextProvider } from "./context/index";
import { Housing, Office, Farmhouse, Rental, Commercial, Country } from "./category/";
import {Detail,Nopage} from "./pages/";


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

ReactDOM.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={ChainId.Mumbai}>
      <StateContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<App />} />
            <Route path="*" element={<Nopage />} />
            <Route path="/category/housing" element={<Housing />} />
            <Route path="/category/office" element={<Office />} />
            <Route path="/category/farmhouse" element={<Farmhouse />} />
            <Route path="/category/rental" element={<Rental />} />
            <Route path="/category/commercial" element={<Commercial />} />
            <Route path="/category/country" element={<Country />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </StateContextProvider>
    </ThirdwebProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals