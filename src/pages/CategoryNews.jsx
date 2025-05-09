import React, {useEffect, useState} from "react";
import {useLoaderData, useParams} from "react-router";
import NewsCard from "./NewsCard";
import { FaRegSadTear } from "react-icons/fa";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const {id} = useParams();

  const data = useLoaderData();

  useEffect(() => {
    if (id === "0") {
      setCategoryNews(data);
      return;
    } else if (id === "1") {
      const breakingNews = data.filter(
        (singleNews) => singleNews.others.is_today_pick === true
      );
      setCategoryNews(breakingNews);
    } else {
      const selectedCategoryNews = data.filter(
        (singleNews) => singleNews.category_id === Number(id)
      );
      setCategoryNews(selectedCategoryNews);
    }
  }, [id, data]);

  return (
    <div>
      <h1 className="text-lg font-semibold">
        Total <span className="text-secondary">{categoryNews.length} </span>News
        Found
      </h1>
      <div className="space-y-5 mt-3">
        {categoryNews.length == 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20">
          <FaRegSadTear className="text-6xl text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-600">No News Found</h2>
          <p className="text-gray-500 mt-2 max-w-md">
            Sorry, Currently don't have any news articles that match your criteria. Please try a different category.
          </p>
        </div>
        ) : (
          categoryNews.map((singleNews) => (
            <NewsCard key={singleNews.id} singleNews={singleNews}></NewsCard>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryNews;
