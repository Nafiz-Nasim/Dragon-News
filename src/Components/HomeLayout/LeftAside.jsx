import React, { Suspense } from 'react'
import Categories from './Categories'

export default function LeftAside() {
  return (
    <div>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>  <Categories></Categories> </Suspense>
      
    </div>
  )
}
