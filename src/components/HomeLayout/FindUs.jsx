import React from 'react';
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
const FindUs = () => {
        return (
                <>
                <h1 className="text-lg font-semibold">Find Us On</h1>
                <div className=" mt-3">
                  <a target="_blank" href="https://www.facebook.com" className="border border-base-300 w-full btn bg-transparent py-6 font-medium justify-start">
                    <div className="bg-base-200 p-2 text-md rounded-full">
                      <FaFacebookF color="#3B599C" />
                    </div>
                    Facebook
                  </a>
                  <a target="_blank" href="https://www.x.com" className="border border-base-300 w-full btn bg-transparent py-6 font-medium justify-start ">
                    <div className="bg-base-200 p-2 text-md rounded-full">
                      <FaTwitter color="#58A7DE" />
                    </div>
                    Twitter
                  </a>
                  <a target="_blank" href="https://www.instagram.com" className="border border-base-300 w-full btn bg-transparent py-6 font-medium justify-start">
                    <div className="bg-base-200 p-2 text-md rounded-full">
                      <FaInstagram color="#D82D7E" />
                    </div>
                    Instagram
                  </a>
                </div>
                </>
        );
};

export default FindUs;