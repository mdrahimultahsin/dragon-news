import React from "react";
import {NavLink} from "react-router";

const Category = ({category}) => {

  return <NavLink to={`/category/${category.id}`} className={({isActive})=>isActive? "bg-base-300 btn":"btn bg-white border-0 text-accent"}>{category.name}</NavLink>;
};

export default Category;
