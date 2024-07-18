import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./context/SendDataContext.tsx";
import { CustomerContextProvider } from "./context/CustomerContext.tsx";
import { ProductContextProvider } from "./context/ProductContext.tsx";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CustomerContextProvider>
        <ProductContextProvider>
          <DataContextProvider>
            <BrowserRouter>
              <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <App />
                <Toaster />
              </ThemeProvider>
            </BrowserRouter>
          </DataContextProvider>
        </ProductContextProvider>
      </CustomerContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
