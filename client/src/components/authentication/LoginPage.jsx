import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { auth, googleProvider, facebookProvider, signInWithPopup } from "../firebase";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google Login Success:", result.user);
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      console.log("Facebook Login Success:", result.user);
    } catch (error) {
      console.error("Facebook Login Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-white font-semibold transition duration-200"
            >
              Login
            </button>
          </form>

          {/* Social Login Buttons */}
          <div className="mt-6 space-y-3">
 
<button className="google-signin-btn" onClick={handleGoogleLogin}>
  <img
    src="data:image/jpeg;base64,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"
    alt="Google logo"
    className="google-logo"
  />
  <span className="google-text">Sign in with Google</span>
</button>

 
 <button className="facebook-signin-btn"
   onClick={handleFacebookLogin}>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
    alt="Facebook logo"
    className="facebook-logo"
  />
  <span className="facebook-text">Continue with Facebook</span>
</button>

          </div>

          <div className="mt-6 text-center text-sm">
            <p>
              Forgot your password?{" "}
              <Link to="/forgot-password" className="text-blue-600 hover:underline">
                Reset
              </Link>
            </p>
            <p className="mt-2">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
