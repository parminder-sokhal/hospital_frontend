import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { loginUser } from "../redux/actions/userActions";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [rememberPassword, setRememberPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return alert("Please fill out all fields");
    }
    dispatch(loginUser({ ...formData, rememberPassword }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-10">
        <div className="flex items-center space-x-3 mb-6">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo/loonalogo.png" className="h-12" alt="Logo" />
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@gmail.com"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Your Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="********"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <span
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {passwordVisible ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberPassword"
              checked={rememberPassword}
              onChange={() => setRememberPassword(!rememberPassword)}
              className="h-4 w-4"
            />
            <label htmlFor="rememberPassword" className="text-sm text-gray-700">
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {error && (
          <div className="mt-4 text-red-600 text-sm text-center border border-red-300 bg-red-50 p-2 rounded">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
