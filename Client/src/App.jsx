import "./App.css";
import Login from "./assets/Login";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Signup from "./assets/Signup";

import Sample from "./assets/Sample";
function App() {
  return (
    <>
      <BrowserRouter>
      

        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sample" element={Sample}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
