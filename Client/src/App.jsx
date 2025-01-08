import "./App.css";
import Login from "./assets/Login";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Signup from "./assets/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
      

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/signup" />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
