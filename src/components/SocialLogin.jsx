import React, { use } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/Context";

const SocialLogin = () => {
  const {signInWithGoogle} = use(AuthContext)
   const handleLoginWithGoogle = () => {
      signInWithGoogle()
        .then(() => {
          toast.success("Logged in Succeesfully");
        })
        .catch((error) => {
          toast.error(error?.message);
        });
    };
  return (
    <div>
      <h1 className="font-bold mb-5 text-lg">Login With</h1>
      <div className="space-y-4">
        <button onClick={handleLoginWithGoogle} className="w-full btn btn-outline btn-secondary text-sm lg:text-lg p-6 flex"><FaGoogle />Login With Google</button>
        <button className="w-full btn btn-outline btn-primary hover:text-white text-lg p-6 flex"><FaGithub />Login With Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;
