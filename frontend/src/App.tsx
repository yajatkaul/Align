// @ts-nocheck
import { Navigate, Route, Routes } from "react-router-dom";
import Customise from "./pages/Customise";
import Requirement from "./pages/Requirement";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthContext } from "./context/AuthContext";
import Cart from "./pages/Cart";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route path="/" element={<Requirement />} />
        <Route
          path="/select"
          element={authUser ? <Customise /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={authUser ? <Cart /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
