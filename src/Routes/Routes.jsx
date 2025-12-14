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
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";

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
  {
    path:"/auth",
    Component:AuthLayout,
    children:[{

      path:"/auth/login",
      Component:Login,
    },
    {
      path:"/auth/register",
      Component:Register,
    }
  ]
  },
  {
    path:'/news-details/:id',
    Component:NewsDetails,
  }
]);