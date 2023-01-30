import { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import ThemeToggler from "./components/ThemeToggler";
import ThemeContext from "./utils/ThemeContext";
import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import {Error, Landing, Quiz, ProtectedRoute} from './pages'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/quiz" element={<ProtectedRoute><Quiz/></ProtectedRoute>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
