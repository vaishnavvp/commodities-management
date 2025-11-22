import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("manager@demo.com");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState("");

  if (isAuthenticated) return <Navigate to="/products" replace />;

  const submit = async (e: any) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/products");
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-900">
      <form
        onSubmit={submit}
        className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md w-full max-w-md border border-gray-200 dark:border-slate-700"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Login
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Manager → manager@demo.com / password123 <br />
          Store Keeper → keeper@demo.com / password123
        </p>

        <input
          type="email"
          className="w-full mb-3 p-3 rounded-md border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-gray-100"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-4 p-3 rounded-md border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-gray-100"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium">
          Login
        </button>
      </form>
    </div>
  );
};
