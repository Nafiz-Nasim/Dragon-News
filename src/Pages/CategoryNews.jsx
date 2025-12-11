import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";

export default function CategoryNews() {
  const { id } = useParams();
  const data = useLoaderData();
 const [categoryNews,setCategoryNews]=useState();

  useEffect(() => {
    const filteredNews = data.filter((news) => news.category_id == id);
   setCategoryNews(filteredNews);

  }, [ data,id]);

  console.log(categoryNews);
  
  return <div>CategoryNews-{id}</div>;
}
