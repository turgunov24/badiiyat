import * as React from 'react';
import { useContext } from 'react';
import { Context } from '../../contex';

export default function Card(props) {
    console.log(props);
    const {orders, setOrders} = useContext(Context);
    let title = props.name
    let images = props.img
    let desc = props.des
    let arr = []
    const Yubor = ()=>{
        arr.push(...orders,{title,images})
        setOrders(arr)
    }
    
  return (
    <div onClick={Yubor} className='card w-[120px] height-[200px] border'>
        <img src={images} alt="" />
        <div className='bottom'>
            <h3>{title}</h3>
            <h2>{desc}</h2>
        </div>
    </div>
  );
}