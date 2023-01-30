import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ThemeContextProvider from "./utils/ThemeContextProvider";
import { Provider } from "react-redux";
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <GoogleOAuthProvider clientId="108917532095-bn9fhf88me9li0ai9rcrjaug7icddrbt.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </ThemeContextProvider>
    </Provider>
    
  </React.StrictMode>
);
