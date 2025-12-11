import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from "../Pages/Roots";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Category from "../Pages/Category";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
   Component: HomeLayout,
   errorElement: <Error></Error>,
   children:[
    {
      path:"",
      Component:Home,
    },
    {
      path:"/category/:id",
      loader:()=>fetch('/public/news.json'),
      Component:CategoryNews,
    }
   ]
  },
]);