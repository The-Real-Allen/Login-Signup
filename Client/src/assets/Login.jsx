import React, { useState } from "react";
import { NavLink, Routes, Route,useNavigate } from "react-router-dom";
import "./Login.css";
import Signup from "./Signup";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for login button
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

    const response =  await axios.post("http://localhost:5000/login", { username  ,password});

    
    
    
          if(response.status === 200){
    console.log("login successfull");
   

    const { token, username } = response.data;
    localStorage.setItem("authToken", token);
    localStorage.setItem("username", username);
    navigate("/sample")
          }
        

  


     

      alert("Login successful!");
    } catch (error) {
      console.error("Error during login:", error);
      const errorMsg =
        error.response?.data?.errorMessage || "Invalid email or password.";
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0" }}
        exit={{ x: "-100%" }}
        transition={{ duration: "0.3" }}
        className="login px-4"
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0" }}
          exit={{ x: "-100%" }}
          transition={{ duration: "0.5" }}
          className="login-form"
        >
          <form onSubmit={handleLogin}>
            <motion.h1
              initial={{ x: "100%" }}
              animate={{ x: "0" }}
              exit={{ x: "-100%" }}
              transition={{ duration: "0.7" }}
              className="text-dark"
            >
              Login
            </motion.h1>
            <div className="form-group my-3  text-start">
              <motion.label
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "-100%" }}
                transition={{ duration: "0.7" }}
                htmlFor="email"
                className="text-dark my-2   "
              >
                User Name
              </motion.label>
              <input
                type="text"
                value={username}
                className="form-control"
                id="email"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3  text-start">
              <motion.label
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "-100%" }}
                transition={{ duration: "0.7" }}
                htmlFor="password"
                className="text-dark my-2"
              >
                Password
              </motion.label>
              <div className="password-input-container">
                <input
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  className="form-control"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span>
                  <button
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="login-password-visible"
                  >
                    {passwordVisible ? <EyeOff /> : <Eye />}
                  </button>
                </span>
              </div>
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="register">
              <motion.p
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "-200%" }}
                transition={{ duration: "0.7" }}
                className="text-secondary"
              >
                Don't have an account?
                <span>
                  <NavLink to="/signup" className="register-link">
                    Register
                  </NavLink>
                </span>
              </motion.p>
            </div>
          </form>
        </motion.div>
      </motion.div>

      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default Login;
