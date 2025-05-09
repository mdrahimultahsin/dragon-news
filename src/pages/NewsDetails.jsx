import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import {useLoaderData, useParams} from "react-router";
import RightAside from "../components/HomeLayout/RightAside";
import NewsDetailsCard from "./NewsDetailsCard";

const NewsDetails = () => {
  const data = useLoaderData();
  const {id} = useParams();
  const [news, setNews] = useState(null);
  useEffect(() => {
    const filteredNews = data.find((singleNews) => singleNews.id === id);
    setNews(filteredNews);
  }, [id, data]);

  return (
    <div className="w-11/12 mx-auto">
      <header className="py-6">
        <Header></Header>
      </header>
      <main className="mt-5 grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h1 className="font-semibold text-lg">Dragon News</h1>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <section className="col-span-3">
          <aside>
            <RightAside></RightAside>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
