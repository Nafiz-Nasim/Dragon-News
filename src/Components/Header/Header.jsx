import React from 'react'
import logo from"/src/assets/logo.png"
import { format } from 'date-fns'

export default function Header() {
  return (
    <section className='flex flex-col items-center justify-center mt-10'>
        <img src={logo} alt="" />
        <p className='mt-3 text-shadow-zinc-500'>Journalism Without Fear or Favour</p>
        <p>{
       format( new Date(),"eeee,MMMM,MM,	yyyy")
          }</p>
    </section>
  )
}
