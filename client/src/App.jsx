import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Bookings from "./pages/Bookings";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthorDashboard from "./pages/AuthorDashboard";
import ManageCars from "./pages/ManageCars";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cars" element={<Cars />} />

          {/*Customer*/}
          <Route
            path="/cars"
            element={
              <ProtectedRoute allowedRoles={["customer"]}>
                <Cars />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bookings"
            element={
              <ProtectedRoute allowedRoles={["customer"]}>
                <Bookings />
              </ProtectedRoute>
            }
          />

          {/*Author*/}
          <Route
            path="/author/dashboard"
            element={
              <ProtectedRoute allowedRoles={["author"]}>
                <AuthorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/author/cars"
            element={
              <ProtectedRoute allowedRoles={["author"]}>
                <ManageCars />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
