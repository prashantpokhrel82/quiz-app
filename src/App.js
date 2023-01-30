import { useContext } from "react";
import ThemeToggler from "./components/ThemeToggler";
import ThemeContext from "./utils/ThemeContext";
import { ToastContainer } from "react-toastify";
import { Error, Landing, Quiz, ProtectedRoute } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="app" data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/quiz"
            element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
