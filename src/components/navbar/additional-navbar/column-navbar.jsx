import React from "react";

function NavbarCol(props) {
  return (
    <ul className= {props.toggler?"flex flex-col text-end":"hidden"}>
      <li className="px-5 py-3 text-gray-400 rounded-lg duration-300 hover:bg-gray-700">Bosh sahifa</li>
      <li className="px-5 py-3 text-gray-400 rounded-lg duration-300 hover:bg-gray-700">Nasr</li>
      <li className="px-5 py-3 text-gray-400 rounded-lg duration-300 hover:bg-gray-700">Nazm</li>
      <li className="px-5 py-3 text-gray-400 rounded-lg duration-300 hover:bg-gray-700">Maqolalar</li>
      <li className="px-5 py-3 text-gray-400 rounded-lg duration-300 hover:bg-gray-700">Forum</li>
    </ul>
  );
}

export default NavbarCol;
