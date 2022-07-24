import React from 'react';
import { useContext } from 'react';
import { Context } from '../contex';
import Navbar from '../navbar/navbar';


function SectionTwo() {
    const {orders} = useContext(Context);
    return ( 
        <div className='main text-white'>
            <Navbar/>
            {orders.map((e,k) =>{
                return(
                    <div className='flex mt-8' key={k}>
                        <div className="left text-center xs:flex xxs:justify-center xs:flex-col w-[50%]">
                            <img className='w-[80%] object-contain' src={e.img} alt="" />
                            <h1 className='md:text-3xl mt-10 sm:text-xl'>{e.year}</h1>
                        </div>
                        <div className='right w-[50%] '>
                            <h1 className='md:text-3xl xs:text-xl'>{e.name}</h1>
                            <p className='md:text-xs xs:text-[7px] mt-5'>{e.desc}</p>
                            <div className='mt-3 text-white flex gap-5 overflow-x-scroll py-5 '>
                                {
                                    e.boks.map((k,l)=>{
                                        return(
                                            <div key={l} className='text-white w-[200px] shadow-xl'>
                                                <img src={k.imgs} alt="cdk" />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default SectionTwo;