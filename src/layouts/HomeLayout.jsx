import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import {Outlet, useNavigation} from "react-router";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";
import Spinner from "../components/Spinner";

const HomeLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <header className="w-11/12 mx-auto py-6">
        {/* Header */}
        <Header></Header>
        {/* Latest News */}
        <section className=" mt-5">
          <LatestNews></LatestNews>
        </section>
        {/* Navbar */}
        <nav className="mt-4">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="mt-4 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        <section className="col-span-3 md:sticky top-5 h-fit">
          <aside>
            <LeftAside />
          </aside>
        </section>
        <section className="col-span-6">
          {navigation.state == "loading" ? <Spinner /> : <Outlet />}
        </section>
        <section className="col-span-3 md:sticky top-5 h-fit">
          <aside>
            <RightAside />
          </aside>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
