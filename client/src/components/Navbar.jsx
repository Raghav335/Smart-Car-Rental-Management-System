import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NAV_LINKS = {
  guest: [{ to: "/", label: "Home" }],
  customer: [
    { to: "/", label: "Home" },
    { to: "/cars", label: "Cars" },
    { to: "/bookings", label: "My Bookings" },
  ],
  author: [
    { to: "/", label: "Home" },
    { to: "/author/dashboard", label: "Dashboard" },
    { to: "/author/cars", label: "Manage Cars" },
  ],
};

function Navbar() {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const { user, logout } = useAuth();
  const isActive = (path) => {
    return location.pathname === path;
  };

  const role = user ? user.role : "guest";
  const links = NAV_LINKS[role] || NAV_LINKS.guest;

  const buttonStyle = {
    padding: "9px 16px",
    borderRadius: "8px",
    fontWeight: "700",
    color: isHovered ? "red" : "white",
    background: isHovered
      ? "white"
      : "linear-gradient(135deg, #f97316, #ec4899)",
  };

  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  return (
    <nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2>🚗 Smart Car Rental</h2>
      </Link>

      <div>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={{ color: isActive(link.to) ? "#ffffff" : undefined }}
          >
            {link.label}
          </Link>
        ))}

        {!user ? (
          <Link to="/login" {...hoverProps} style={buttonStyle}>
            Login
          </Link>
        ) : (
          <button onClick={logout} {...hoverProps} style={buttonStyle}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
