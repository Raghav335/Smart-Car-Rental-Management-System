import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      role: "customer",
    };

    const demoToken = "demo-token";

    login(userData, demoToken);
    navigate("/");
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
            Create Account
          </h1>

          <p style={{ color: "#64748b" }}>Join Smart Car Rental today</p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            margin: "0 auto",
          }}
        >
          <div>
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Create Account →</button>

          <p
            style={{
              textAlign: "center",
              marginTop: "22px",
              color: "#64748b",
              fontSize: "14px",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#6366f1",
                fontWeight: "700",
              }}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
