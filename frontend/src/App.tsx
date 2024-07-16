import { Route, Routes } from "react-router-dom";
import Customise from "./pages/Customise";
import Requirement from "./pages/Requirement";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Requirement />} />
        <Route path="/select" element={<Customise />} />
      </Routes>
    </>
  );
}

export default App;
