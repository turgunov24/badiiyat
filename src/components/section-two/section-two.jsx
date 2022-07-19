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
                        <div className="left w-[50%]">
                            <img className='w-[80%] object-contain' src={e.img} alt="" />
                            <h1 className='text-3xl mt-10 ml-44'>{e.year}</h1>
                        </div>
                        <div className='right w-[50%] '>
                            <h1 className='text-3xl'>{e.name}</h1>
                            <p className='text-sm mt-5'>{e.desc}</p>
                            <div className='text-white'>
                                {
                                    e.boks.map((k,l)=>{
                                        return(
                                            <div key={l} className='text-white w-[200px] border'>
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