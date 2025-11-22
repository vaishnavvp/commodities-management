// src/pages/LoginPage.tsx
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

export const LoginPage = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("manager@demo.com");
  const [password, setPassword] = useState("password123");
  const [agree, setAgree] = useState(true);
  const [error, setError] = useState("");

  if (isAuthenticated) return <Navigate to="/products" replace />;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!agree) {
      setError("Please agree to the terms to continue.");
      return;
    }

    try {
      await login(email, password);
      navigate("/products");
    } catch (e: any) {
      setError(e.message ?? "Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-slate-900">
      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-semibold text-center text-slate-900 dark:text-slate-50">
            Welcome Back
          </h1>
          <p className="mt-1 text-center text-sm text-slate-500 dark:text-slate-400">
            Sign Up For Free
          </p>

          <form onSubmit={submit} className="mt-8 space-y-4">
            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-300">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-300">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <label className="mt-1 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="h-3.5 w-3.5 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
              />
              <span>
                I agree to all Term, Privacy Policy and fees
              </span>
            </label>

            {error && (
              <p className="text-xs text-red-500 mt-1">{error}</p>
            )}

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium py-2.5 shadow-sm transition-colors"
            >
              Get Started
            </button>

            <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
              Manager: <strong>manager@demo.com / password123</strong> <br />
              Store Keeper: <strong>keeper@demo.com / password123</strong>
            </p>

            <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
              <span className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
              <span>OR</span>
              <span className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
            </div>

            {/* Social buttons */}
            <div className="space-y-3">
              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-xs text-slate-700 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700"
              >
                <span className="text-lg"><FaGoogle /></span>
                <span>Sign in with Google</span>
              </button>

              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-xs text-slate-700 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700"
              >
                <span className="text-lg text-blue-600"><FaFacebookF />
                </span>
                <span>Sign in with Facebook</span>
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
              Already have an account?{" "}
              <span className="text-violet-600 dark:text-violet-400 cursor-pointer">
                Login
              </span>
            </p>
          </form>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2">
        <div className="h-full w-full">
          <img
            src="/bg.jpg"
            alt="Abstract visual"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
