import React from "react";
import {FaArrowAltCircleLeft} from "react-icons/fa";
import { useNavigate } from "react-router";

const NewsDetailsCard = ({news}) => {
  const {image_url, title, details} = news || {};
  const navigate = useNavigate()
  return (
    <div className="mt-4 p-6 flex flex-col gap-4 border border-base-300 rounded-lg">
      <img className="rounded-lg" src={image_url} alt="" />
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-primary-content">{details}</p>
      <div>
        <button onClick={()=>navigate(-1)} className="btn btn-secondary">
          <FaArrowAltCircleLeft />
          All News In this category
        </button>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
