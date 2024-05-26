import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Login<span className="text-blue-600"> to Chatter</span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-normal text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              className="w-full mt-1 input input-bordered"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-normal text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              className="w-full mt-1 input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link to="/signup" className="text-sm text-blue-600 hover:underline">
            {"Don't"} have an account?
          </Link>

          <button
            type="submit"
            className="w-full py-2 text-sm font-medium text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            style={{ background: "linear-gradient(135deg, #FF0080 0%, #7928CA 100%)" }}
            disabled={loading}
          >
            {loading ? <span className="loading loading-spinner"></span> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;