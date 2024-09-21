import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../AuthContext";
import orp from "../assets/orp_logo.png";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import "./AddLogin.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate async login process
    setTimeout(() => {
      if (email === "user@example.com" && password === "password") {
        login(email, password);
        navigate("/home");
      } else {
        setError("Invalid email or password");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Box className="box">
        {/* <Typography variant="h5" component="h1" gutterBottom>
        Login
      </Typography> */}
        <Box className="logo-container">
          <img src={orp} alt="ORP" className="logo" />
        </Box>

        {error && <Typography className="error">{error}</Typography>}
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div className="input-field">
            <TextField
              variant="outlined"
              fullWidth
              label="Email"
              size="small"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </div>
          <div className="input-field">
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              size="small"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
            <FormControlLabel
              control={<Checkbox name="myCheckbox" color="primary" />}
              label="Remember me"
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Login"}
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Login;
