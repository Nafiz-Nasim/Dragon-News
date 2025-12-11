import React from 'react'
import Header from '../Components/Header/Header'
import LatesNews from '../Components/Header/LatesNews'
import Nav from '../Components/Header/Nav'
import { Outlet } from 'react-router'
import LeftAside from '../Components/HomeLayout/LeftAside'
import RightAside from '../Components/HomeLayout/RightAside'

export default function HomeLayout() {
  return (
    <div>
        <header>
            <Header></Header>
     
        </header>
        <section className='w-11/12 mx-auto'>  <LatesNews></LatesNews></section>
        <nav className='w-11/12 mx-auto'>
                   <Nav></Nav>
        </nav>
      <main className='flex  justify-between  w-11/12 mx-auto'>
<section className="left-nav">
    <LeftAside></LeftAside>
</section>
<section className="main">
    <Outlet></Outlet>
</section>
<section className="right-nav">
    <RightAside></RightAside>
</section>
      </main>
    </div>
  )
}
