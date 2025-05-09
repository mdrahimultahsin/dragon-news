import React, {use, useState} from "react";
import {Link, useNavigate} from "react-router";
import {AuthContext} from "../../provider/Context";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUserProfile} = use(AuthContext);
  const [showPass,setShowPass] = useState(false)
        const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
   
    
    if (!/.{6,}/.test(password)) {
      return toast.error("Password must be at least 6 characters long");
    } else if (!/[A-Z]/.test(password)) {
      return toast.error("Password must  include an uppercase letter");
    } else if (!/[a-z]/.test(password)) {
      return toast.error("Password must  include an lowercase letter");
    } else if (!/\d/.test(password)) {
      return toast.error("Password must  include an digit");
    }
    if (!terms) {
      return toast.error("Please Accept Terms & Condition");
    }
   
    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {
            toast.success("User Successfully Registered");
                navigate("/")
          })
          .catch((error) => {
            toast(error?.message);
          });
        
      })
      .catch((error) => {
        toast.error(error?.message);
        
      });
  };
  return (
    <div className="w-9/12 md:8/12 lg:w-4/12 mx-auto py-12  bg-white px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Register your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Your Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your Name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
              />
            </div>
          </div>
          {/* Photo URl */}
          <div>
            <label
              htmlFor="photo"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Photo URL
            </label>
            <div className="mt-2">
              <input
                id="photo"
                name="photo"
                type="text"
                required
                placeholder="Enter your Photo URL"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
              />
            </div>
          </div>
          {/* Email */}
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
                required
                placeholder="Enter your email address"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
              />
            </div>
          </div>
          {/* Password */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2 relative">
              <input
                id="password"
                name="password"
                type={showPass?"text":"password"}
                placeholder="Enter your Password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
              />
              <button onClick={()=>setShowPass(!showPass)} type="button" className="absolute right-4 text-lg cursor-pointer top-2">{showPass?<FaEyeSlash/>:<FaEye/>}</button>
            </div>
          </div>
          {/* Terms */}
          <div>
            <input
              className="scale-150"
              type="checkbox"
              name="terms"
              id="terms"
            />
            <label className="text-accent ml-2">
              {" "}
              Accept Terms & Conditons
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="cursor-pointer flex w-full justify-center rounded-md bg-primary px-3 py-3 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Register
            </button>
          
           
          </div>
        </form>

        <p className="mt-3 text-center text-sm/6 text-gray-500">
          Already Have An Account ?
          <Link to="/auth/login" className="font-semibold text-primary ">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
