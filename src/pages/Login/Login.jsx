import React, {use, useRef} from "react";
import {Link, useLocation, useNavigate} from "react-router";
import {AuthContext} from "../../provider/Context";
import {toast} from "react-toastify";
import {FaGithub, FaGoogle} from "react-icons/fa";

const Login = () => {
  const {user, loginUser, forgetPassword, signInWithGoogle} = use(AuthContext);
  const location = useLocation();

  const emailRef = useRef();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (user) {
      return toast.warn("Already Signed In");
    }
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then(() => {
        toast.success("Logged in Succeesfully");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };
  const handleForgetPassword = () => {
    const email = emailRef.current.value;

    forgetPassword(email)
      .then(() => {
        toast.success("A Reset Password Sent in your mail");
      })
      .catch((error) => {
        toast(error?.message);
      });
  };
  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Logged in Succeesfully");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };
  return (
    <div className="w-9/12 md:8/12 lg:w-4/12 mx-auto py-8  bg-white px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Login your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                ref={emailRef}
                required
                placeholder="Enter your email address"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  onClick={handleForgetPassword}
                  className="font-semibold text-primary hover:text-secondary"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your Password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
              />
            </div>
          </div>

          <div className="py-6 border-b border-base-300">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md cursor-pointer bg-primary px-3 py-3 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Sign in
            </button>
          </div>
          {/* Social Login */}
          <div className="flex justify-center gap-5">
            <button
              onClick={handleLoginWithGoogle}
              className="text-2xl cursor-pointer bg-base-300 p-2 rounded-full"
            >
              <FaGoogle color="#d72050" />
            </button>
            <button className="text-2xl cursor-pointer bg-base-300 p-2 rounded-full">
              <FaGithub />
            </button>
          </div>
        </form>

        <p className="mt-3 text-center text-sm/6 text-gray-500">
          Dont't Have An Account ?
          <Link to="/auth/register" className="font-semibold text-primary ">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
