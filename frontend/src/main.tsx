import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./context/SendDataContext.tsx";
import { CustomerContextProvider } from "./context/CustomerContext.tsx";
import { ProductContextProvider } from "./context/ProductContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CustomerContextProvider>
      <ProductContextProvider>
        <DataContextProvider>
          <BrowserRouter>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </DataContextProvider>
      </ProductContextProvider>
    </CustomerContextProvider>
  </React.StrictMode>
);
