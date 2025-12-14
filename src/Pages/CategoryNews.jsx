import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";
import NewsCard from "../Components/HomeLayout/NewsCard";

export default function CategoryNews() {
  const { id } = useParams();
  const data = useLoaderData();
 const [categoryNews,setCategoryNews]=useState([]);

  useEffect(() => {


    if(id=="0"){
      setCategoryNews(data);
      return;

    }
    else if(id=="1"){
       const filteredNews = data.filter((news) => news.others.is_today_pick == true);
   setCategoryNews(filteredNews);

    }
    else{
       const filteredNews = data.filter((news) => news.category_id == id);
   setCategoryNews(filteredNews);

    }
   

  }, [ data,id]);


  
  return <section><p>Top <span className=" text-red-600 font-bold">{categoryNews.length}</span> news</p>
  {
  console.log(categoryNews)
  }
  {
    categoryNews.map((news)=>(<NewsCard  news={news}></NewsCard>))
  }

  
  </section>;
}
