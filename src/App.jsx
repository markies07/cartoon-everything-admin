import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";

function App() {

  function PrivateRoute({ children }) {
    const [user, loading] = useAuthState(auth);

    if (loading) return <p>Loading...</p>;

    // Block if not logged in OR wrong domain
    if (!user || !user.email.endsWith("@bestsystemsjobs.com")) {
      return <Navigate to="/" />;
    }

    return children;
  }

  function PublicRoute({ children }) {
    const [user, loading] = useAuthState(auth);

    if (loading) return <p>Loading...</p>;

    if (user) {
      // Already logged in → redirect to dashboard
      return <Navigate to="/dashboard" replace />;
    }

  return children;
}
  
  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN PAGE */}
        <Route path="/" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
          } />

        {/* DASHBOARD */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
      <ToastContainer
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={true} 
        newestOnTop={true} 
        closeOnClick 
        pauseOnHover 
        draggable 
        theme="colored"
      />
    </BrowserRouter>
  )
}

export default App
