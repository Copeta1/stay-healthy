import { TextField } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import "./login.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="login-form-container">
      <Navbar />
      <h1>Welcome Back!</h1>
      <p>Hope you have an amazing day!</p>
      <div className="login-form-sub-container">
        <form className="login_form">
          <div className="login_email">
            <label htmlFor="email">Email:</label>
            <TextField
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              fullWidth
              autoComplete="off"
            />
          </div>
          <div className="login_password">
            <label htmlFor="password">Password:</label>
            <TextField
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              required
              fullWidth
              autoComplete="off"
            />
          </div>
          <div className="buttons">
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#ff395c", height: "40px" }}
            >
              Sigh In
            </Button>
            <div
              className="login_no_account"
              onClick={() => navigate("/register")}
            >
              <p>Don't have an account?</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
