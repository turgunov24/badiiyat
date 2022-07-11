// import * as React from "react";
// import { useContext } from "react";
// import { Context } from "../../contex";
// import "../section-one.css"

// export default function Card(props) {
//   console.log(props);
//   const { orders, setOrders } = useContext(Context);
//   let title = props.name;
//   let images = props.img;
//   let year = props.year
//   let arr = [];
//   const Yubor = () => {
//     arr.push(...orders, { title, images });
//     setOrders(arr);
//   };

//   return (
//     <div id="card" onClick={Yubor} className="card w-[130px] h-[160px] flex flex-col rounded-xl text-center pb-3 gap-1">
//       <img src={images} className="object-contain" />
//       <h6 className="text-sm" >{title}</h6>
//       <small>{year}</small>
//     </div>
//   );
// }
