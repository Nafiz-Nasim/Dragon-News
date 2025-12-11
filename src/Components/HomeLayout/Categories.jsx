import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch("/public/categories.json").then((res) =>
  res.json()
);
export default function Categories() {
  const category = use(categoryPromise);

  
  return (
    <section>
      <h2> All Categories ({category.lenght})</h2>
<div className="flex flex-col  mt-5">
  {category.map(category=><NavLink key={category.id} to={`/category/${category.id}`} className="btn my-1  bg-white hover:bg-base-200  active:text-white  ">{category.name}</NavLink>)}
</div>
    </section>
  );
}
