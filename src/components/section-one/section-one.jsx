import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import SectionOneSwiper from "./section-one-assets/section-one-swiper/swiper";
import "./section-one.css";
import jadidAdabiyoti from "../../data";
import { data } from "autoprefixer";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import cardImage from "../assets/images/sectionOneCardImage.png"

function SectionOne() {
  const [search, setSearch] = useState("")
  const qidiruv = (e) => {
    setSearch(e.target.value);
  };
  let DataSearch = jadidAdabiyoti.filter(item =>{
    return Object.keys(item).some(key => 
        item[key].toString().toLowerCase().includes(search.toString().toLowerCase())
    )
  })
  return (
    <div className="w-full flex flex-col items-center ">
      <Navbar />
      <div className="mt-10  w-11/12">
        <SectionOneSwiper />
        <div
          id="search-div"
          className="py-8 px-2 w-11/12 relative -top-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-end gap-5 sm:px-7 md:px-14 md:py-14 lg:px-28"
        >
          <h1 className="font-satisfy text-3xl">Qidirish</h1>
          <form action="search" className="w-full flex flex-col items-center gap-5 md:flex-row ">
            <input
              onChange={qidiruv}
              maxLength={30}
              value={search}
              placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
              className="w-60 py-2 px-5 rounded-lg bg-gray-600 border-none outline-none sm:w-11/12"
            /> 
            <button className=" rounded-lg bg-orange-400 py-1 px-7 font-satisfy text-xl">
              Qidirish
            </button>
          </form>
        </div>
        <div className="w-full h-[600px] flex flex-col items-center">
          <h1 className="font-satisfy text-3xl text-center">
            Asosiy kategoriyalar
          </h1>
          <ul className="flex justify-center w-2/3 mt-5 flex-wrap gap-10 items-center">
            <li>Temuriylar davri </li>
            <li>Jadid adabiyoti </li>
            <li>Sovet davri </li>
            <li>Mustaqillik davri</li>
          </ul>
          <div
            id="grid-container"
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            {DataSearch.map((item, index) => (
              <div id="card" key={index} className="relative w-[170px] text-center flex flex-col justify-between rounded-2xl pb-3">
                <img src={item.images} className="object-contain" alt="smkac"/>
                <h1 className="text-[15px]">{item.name}</h1>
                <h2 className="text-[12px] text-[#FFFFFF99]">{item.year}</h2>
                <div className="flex items-center justify-evenly mt-1 text-sm"><span className="text-white flex items-center gap-1"><MenuBookIcon /> 34</span> <span className="text-white flex items-center gap-1"><MusicNoteIcon /> 13</span> </div>
                <img className="section-one-card-bgImage" src={cardImage} alt='mod' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
