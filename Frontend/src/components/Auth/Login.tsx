import axios from "axios";
import { USER_API_ENDPOINT } from "../../utils/constants";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../redux/hooks";
import { setLoggedInUser } from "../../redux/user";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${USER_API_ENDPOINT}/login`,
        { username, password },
        { withCredentials: true }
      );
      if (res.data.success) {
        console.log(res.data);
        dispatch(setLoggedInUser(res.data.loggedInUser));
        toast.success(res.data.message);
        navigate("/dashboard");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-linear-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-200">
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full rounded-xl bg-gray-700 border border-gray-600 px-3 py-2 text-white placeholder-gray-400 focus:outline-2 focus:outline-cyan-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-200"
              >
                Password
              </label>
              <div className="text-sm">
                <a className="font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-xl bg-gray-700 border border-gray-600 px-3 py-2 text-white placeholder-gray-400 focus:outline-2 focus:outline-cyan-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-xl bg-cyan-500 px-3 py-2 text-white font-semibold shadow-lg hover:bg-cyan-600 transition-all duration-300 cursor-pointer"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Not a member?{" "}
          <a className="font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer">
            Register Now
          </a>
        </p>
      </div>
    </div>
  );
}
