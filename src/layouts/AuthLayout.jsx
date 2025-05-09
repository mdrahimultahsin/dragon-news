import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200">
      <header className="py-4">
        <Navbar></Navbar>
      </header>
      <section className="min-h-screen flex justify-center items-center py-8">
        <Outlet/>
        </section>
    </div>
  );
};

export default AuthLayout;
