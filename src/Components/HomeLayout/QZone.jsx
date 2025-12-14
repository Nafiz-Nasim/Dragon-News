import React from 'react'
import img1 from "../../assets/swimming.png"
import img2 from "../../assets/playground.png"
import img3 from "../../assets/class.png"
import img4 from "../../assets/bg.png"

export default function QZone() {
  return (
    <section className='flex flex-col items-center'>
        <h3 className='mt-5'>Qzone</h3>
        <div className='flex flex-col items-center justify-center gap-5'><img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" /></div>
        
    </section>
  )
}
