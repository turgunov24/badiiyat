import React from 'react';
import { AppBar, Tab, Tabs } from '@mui/material';
import jadidAdabiyoti from "../../../data"
import { useState } from 'react';
import 'swiper/css'
import SectionOne from '../section-one';
import Card from './card';



function Tablar() {
  const [data, setData] = useState([])
  let allCategories = []
  jadidAdabiyoti.map((adab) => {
    allCategories.push(adab.type)
  })
  let settedCategories = new Set(allCategories)
  let categories = [...settedCategories]
  let change = (e) => {
    setData(jadidAdabiyoti.filter((kitob) => (kitob.type == e.target.textContent)));
  }

  return (
    <>
      <AppBar className='appbar flex justify-center' color='transparent' position='static'>
        <Tabs >
          {
            categories && categories.map((e, i) => (
              <Tab className='Tab1' onClick={change} label={e} />
            ))
          }

        </Tabs>

      </AppBar>
      <div className='foodWrapper border w-full flex flex-wrap justify-center gap-10 py-10'>
        {data && data.map((e, i) => (
          <div key={i}>
            <Card  name={e.name} img={e.images} des={e.desc} year={e.year}  />
          </div>
        ))}
      </div>

    </>
  );
}

export default Tablar;