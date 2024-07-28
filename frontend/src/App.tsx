// @ts-nocheck
import { Navigate, Route, Routes } from "react-router-dom";
import Customise from "./pages/Customise";
import Requirement from "./pages/Requirement";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthContext } from "./context/AuthContext";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import Choose from "./pages/Choose";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Navigate to="/home" /> : <Choose />}
        />
        <Route
          path="/home"
          element={authUser ? <Requirement /> : <Navigate to="/" />}
        />
        <Route
          path="/select"
          element={authUser ? <Customise /> : <Navigate to="/" />}
        />
        <Route
          path="/cart"
          element={authUser ? <Cart /> : <Navigate to="/" />}
        />
        <Route
          path="/dashboard"
          element={authUser ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
