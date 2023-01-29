import { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import ThemeToggler from "./components/ThemeToggler";
import ThemeContext from "./utils/ThemeContext";
import Landing from "./pages/Landing";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="app" data-theme={theme}>
      {/* <GoogleLogin
        onSuccess={(credentialResponse) => {
          // console.log(credentialResponse);
          const token = credentialResponse.credential;
          const decoded = jwt_decode(token);
          console.log(decoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <button className="btn" onClick={() => googleLogout()}>
        Logout
      </button> 
      <ThemeToggler />*/}
      <Landing />
    </div>
  );
}

export default App;
