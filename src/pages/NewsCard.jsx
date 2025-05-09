import React from "react";
import {Link} from "react-router";
import {FaStar, FaEye} from "react-icons/fa";
import {format} from "date-fns";
import {CiBookmark, CiShare2} from "react-icons/ci";

const NewsCard = ({singleNews}) => {
  const {title, author, thumbnail_url, details, rating, total_view, id} =
    singleNews;

  return (
    <div className="card bg-base-100 shadow-md border border-base-300">
      {/* Author */}
      <div className="flex justify-between items-center p-4 bg-base-300 rounded-md">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author?.name}</p>
            <p className="text-sm text-gray-500">
              {format(new Date(author?.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <div className="text-gray-400 cursor-pointer text-xl flex gap-3">
          <CiBookmark size={25} />
          <CiShare2 size={25} />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-2">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <figure className="mb-3">
          <img
            src={
              thumbnail_url ||
              "https://cdn-icons-png.flaticon.com/512/7465/7465751.png"
            }
            alt="news thumbnail"
            className="rounded-md w-full h-48 object-cover"
          />
        </figure>
        <div className="border-b border-base-300 py-2">
          <p className="text-gray-700 text-sm">
            {details.length > 250 ? details.slice(0, 200) + "..." : details}
          </p>
          <Link
            to={`/news/${id}`}
            className="text-secondary font-medium mt-2 inline-block border-b-2 border-transparent hover:border-b-2 hover:border-secondary transition"
          >
            Read More
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center p-4 pt-2">
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({length: rating.number}, (_, i) => (
            <FaStar key={i} />
          ))}

          <span className="font-medium">{rating?.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
