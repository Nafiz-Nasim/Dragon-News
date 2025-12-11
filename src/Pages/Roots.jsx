import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header/Header'

export default function Roots() {
  return (
    <section>
<Header></Header>
<Outlet></Outlet>
    </section>
  )
}
