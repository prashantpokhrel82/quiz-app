import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ThemeContextProvider from "./utils/ThemeContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <GoogleOAuthProvider clientId="108917532095-bn9fhf88me9li0ai9rcrjaug7icddrbt.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
