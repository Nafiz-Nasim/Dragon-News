import React from "react";
import Marquee from "react-fast-marquee";

export default function LatesNews() {
  return (
    <section className="flex items-center gap-2">
      <button className="btn btn-active btn-secondary">latest</button>{" "}
      <Marquee className=" ">
     
     <div className="text flex gap-10 items-center">
 <p>Life and leadership are about trade-offs: SOAS VC</p>
        <p>Building fire kills 20 in Indonesia's capital: police</p>
        <p>

Mohammadpur double murder: What valuables did the house help allegedly take?</p>
     </div>
       
      </Marquee>
    </section>
  );
}
