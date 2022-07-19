import React, { useContext, useState } from "react";
import Navbar from "../navbar/navbar";
import SectionOneSwiper from "./section-one-assets/section-one-swiper/swiper";
import "./section-one.css";
import jadidAdabiyoti from "../../data";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import {useNavigate } from "react-router-dom";
import { Context } from "../contex";


function SectionOne() {
  const [tog, settog] = useState(true);
  const [search, setSearch] = useState("");
  const {orders, setOrders} = useContext(Context);
  const navigate = useNavigate()
  const searchAndMap = (e) => {
    setSearch(e.target.value);
    settog(true);
  };
  const [cats, setcats] = useState("");
  const category = (cat) => {
    setcats(cat.target.textContent);
    settog(false);
  };
  return (
    <div id="sectionOne" className="w-full flex flex-col items-center ">
      <Navbar />
      <div className="mt-10  w-11/12">
        <SectionOneSwiper />
        <div
          id="search-div"
          className="py-8 px-2 w-11/12 relative -top-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-end gap-5 sm:px-7 md:px-14 md:py-14 lg:px-28"
        >
          <h1 className="font-satisfy text-3xl">Qidirish</h1>
          <form
            action="search"
            className="w-full flex flex-col items-center gap-5 md:flex-row "
          >
            <input
              onChange={searchAndMap}
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
        <div className="mt-2 w-full h-[600px] flex flex-col items-center ">
          <h1 className="font-satisfy text-3xl text-center">
            Asosiy kategoriyalar
          </h1>
          <ul className="flex-wrap flex mt-5 items-center justify-center">
            <li onClick={category} className="px-5">
              Temuriylar
            </li>
            <li onClick={category} className="px-5">
              Jadid
            </li>
            <li onClick={category} className="px-5">
              Sovet
            </li>
            <li onClick={category} className="px-5">
              Mustaqillik
            </li>
          </ul>
          <div className="mt-5 py-5 px-10 w-full overflow-y-scroll flex-wrap flex gap-10 justify-center">
            {jadidAdabiyoti
              .filter((cards) => {
                if (tog == true) {
                  if (cards.name.toLowerCase().includes(search.toLowerCase())) {
                    return cards;
                  } else if (search == "") {
                    return cards;
                  }
                } else if (tog == false) {
                  if (cards.type.toLowerCase().includes(cats.toLowerCase())) {
                    return cards;
                  }
                }
              })
              .map((val, key) => {
                const bos = () =>{
                    navigate('/sectionTwo')
                    let arr = []
                    const name = val.name
                    const year = val.year
                    const img = val.images
                    const desc = val.desc
                    const boks = val.books
                    arr.push({name,year,img,desc,boks})
                    setOrders(arr)
                }
                return (
                    <div
                      id="card"
                      key={key}
                      className="text-center w-[170px] h-[230px] pb-1 flex flex-col gap-0 items-center justify-between"
                    >
                      <img src={val.images} className="w-full object-cover" />
                      <h6 onClick={bos}>
                        {val.name}
                      </h6>
                      <span className="text-sm">{val.year}</span>
                      <p className="text-sm flex items-center gap-2">
                          <span className="flex items-center">
                            <MenuBookIcon />
                            34
                          </span>{" "}
                          <span className="flex items-center">
                            <MusicNoteIcon />
                            13
                          </span>
                      </p>
                    </div>
                );
            })}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
