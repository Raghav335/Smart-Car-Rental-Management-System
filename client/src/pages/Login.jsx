import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getRoleFromEmail } from "../utils/roles";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const role = getRoleFromEmail(email);

    const userData = {
      email,
      name: "Demo User",
      role,
    };

    login(userData, "demo-token");
    navigate(role === "author" ? "/author/dashboard" : "/");
  };

  return (
    <div
      style={{
        minHeight: "650px",
        padding: "60px 20px",
        background: "linear-gradient(135deg, #eef2ff, #fdf2f8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "450px" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              fontSize: "45px",
              marginBottom: "10px",
            }}
          >
            🚗
          </div>

          <h1
            style={{
              fontSize: "32px",
              marginBottom: "8px",
            }}
          >
            Welcome Back
          </h1>

          <p style={{ color: "#64748b" }}>Login to continue your journey</p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            margin: "0 auto",
          }}
        >
          <div>
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Login →</button>

          <p
            style={{
              textAlign: "center",
              marginTop: "22px",
              color: "#64748b",
              fontSize: "14px",
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{
                color: "#6366f1",
                fontWeight: "700",
              }}
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
