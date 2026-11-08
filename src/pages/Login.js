
import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    setMessage("Login successful!");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <Link to="/" className="login-logo">
            Tech<span>Zone</span>
          </Link>

          <div className="login-heading">
            <h2>Welcome Back!</h2>
            <p>Sign in to continue shopping with TechZone.</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control login-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>

              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control login-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="login-options">
              <label className="remember-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>

              <Link to="/forgot-password">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="btn login-button">
              Login
            </button>

            {message && (
              <div className="login-message">
                {message}
              </div>
            )}
          </form>

          <div className="login-divider">
            <span>OR</span>
          </div>

          <p className="register-text">
            Don't have an account?{" "}
            <Link to="/register">Create an account</Link>
          </p>

          <Link to="/" className="back-home">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
