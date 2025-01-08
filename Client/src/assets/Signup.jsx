import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "./Signup.css";
import { Eye, EyeOff } from "lucide-react";
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = { username, email, password };

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        userData
      );

      alert("Registered successfully!");
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error during registration:", error);
      const errorMsg =
        error.response?.data?.errorMessage ||
        "An error occurred during registration.";
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
    console.log("user details", username);
  };

  return (
    <div className="register-page">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0" }}
        exit={{ x: "-200%" }}
        transition={{ duration: "0.3" }}
        className="register-top"
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0" }}
          exit={{ x: "-200%" }}
          transition={{ duration: "0.5" }}
          className="register-form"
        >
          <form onSubmit={handleRegister}>
            <h3 className="text-dark">Please fill out the form to register!</h3>
            {/* Username */}
            <div className="form-group mb-1 mt-3 text-start">
              <motion.label
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "-100%" }}
                transition={{ duration: "0.7" }}
                htmlFor="username"
                className="text-dark "
              >
                Username
              </motion.label>
              <input
                type="text"
                value={username}
                className="form-control"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            {/* Email */}
            <div className="form-group mb-1 text-start py-2">
              <motion.label
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "-100%" }}
                transition={{ duration: "0.7" }}
                htmlFor="email"
                className="text-dark"
              >
                Email address
              </motion.label>
              <input
                type="email"
                value={email}
                className="form-control"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Password */}
            <div className="form-group mb-1 text-start py-2">
              <motion.label
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "-100%" }}
                transition={{ duration: "0.7" }}
                htmlFor="password"
                className="text-dark"
              >
                Password
              </motion.label>
              <input
                type="password"
                value={password}
                className="form-control"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* Confirm Password */}
            <div className="form-group mb-3 text-start pt-2">
              <motion.label
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "-100%" }}
                transition={{ duration: "0.7" }}
                htmlFor="confirmPassword"
                className="text-dark pb-2"
              >
                Confirm Password
              </motion.label>
              <div className="password-wrapper">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  value={confirmPassword}
                  className="form-control"
                  id="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                >
                  {confirmPasswordVisible ? <EyeOff /> : <Eye />}
                </button>
                {password !== confirmPassword && confirmPassword && (
                  <p className="text-danger passwordnotmatch mt-1">
                    Passwords do not match.
                  </p>
                )}
              </div>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="register-btn mt-3"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
            {/* Login Link */}
            <div className="register">
              <motion.p
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "-100%" }}
                transition={{ duration: "0.7" }}
                className="text-secondary"
              >
                Already have an account?
                <span>
                  <NavLink to="/login" className="register-link">
                    Login
                  </NavLink>
                </span>
              </motion.p>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Signup;
