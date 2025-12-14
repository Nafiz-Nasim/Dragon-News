import React from "react";
import Header from "../Components/Header/Header";
import LatesNews from "../Components/Header/LatesNews";
import Nav from "../Components/Header/Nav";
import { Outlet } from "react-router";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";
import FinedUs from "../Components/HomeLayout/FinedUs";
import QZone from "../Components/HomeLayout/QZone";

export default function HomeLayout() {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section className="w-11/12 mx-auto">
        {" "}
        <LatesNews></LatesNews>
      </section>
      <nav className="w-11/12 mx-auto">
        <Nav></Nav>
      </nav>
      <main className="flex  justify-between  w-11/12 mx-auto">
        <section className="left-nav max-w-1/3 h-fit top-5 sticky">
          <LeftAside></LeftAside>
        </section>
        <section className="main max-w-1/3">
          <Outlet></Outlet>
        </section>
        <section className="right-nav max-w-1/3  h-fit   top-5   sticky">
          <RightAside></RightAside>
        </section>
      </main>
    </div>
  );
}
