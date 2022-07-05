import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import SectionOneSwiper from "./section-one-assets/section-one-swiper/swiper";
import "./section-one.css";
import jadidAdabiyoti from "../../data";
import { data } from "autoprefixer";

function SectionOne() {
  console.log(jadidAdabiyoti);
  const [event, setevent] = useState("");
  const qidiruv = (e) => {
    setevent(event + e);
    console.log(e.target.value);
    
  };
  return (
    <div className="w-full flex flex-col items-center ">
      <Navbar />
      <div className="mt-10  w-11/12">
        <SectionOneSwiper />
        <div
          id="search-div"
          className="py-14 px-28 w-11/12 relative -top-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-end gap-5"
        >
          <h1 className="font-satisfy text-3xl">Qidirish</h1>
          <form action="search" className="w-full flex justify-between">
            <input
              onChange={qidiruv}
              type="text"
              maxLength={30}
              placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
              className="w-10/12 py-2 px-5 rounded-lg bg-gray-600 border-none outline-none"
            />
            <button className="rounded-lg bg-orange-400 px-7 font-satisfy">
              Qidirish
            </button>
          </form>
        </div>
        <div className="border w-full h-[500px] flex flex-col items-center">
            <h1 className="font-satisfy text-3xl text-center">Asosiy kategoriyalar</h1>
            <ul className="border flex justify-between w-2/3 mt-5">
                <li>Temuriylar davri </li>
                <li>Jadid adabiyoti </li>
                <li>Sovet davri </li>
                <li>Mustaqillik davri</li>
            </ul>
            {jadidAdabiyoti.map((item,index)=>(
                <div className="flex flex-wrap w-full">
                    <div>
                        <img src={item.images}/>
                        <h1>{item.name}</h1>
                    </div>
                </div>
            ))}        
        </div>
      </div>
    </div>
    )
}

export default SectionOne;
