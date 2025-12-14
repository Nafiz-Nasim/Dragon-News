import React from 'react'
import Nav from '../Components/Header/Nav'
import { Outlet } from 'react-router'

export default function AuthLayout() {
  return (
    <section>

        <header>
            <Nav></Nav>
        </header>
        <main>
<Outlet></Outlet>
        </main>
    </section>
  )
}
