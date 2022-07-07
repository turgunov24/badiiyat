import React, { useContext } from 'react';
import { Context } from '../contex';



function SectionTwo() {
    const { orders } = useContext(Context);
    return ( 
        <div>
            {
                orders && orders.map((item)=>(
                    <div className='bg-white' key={'aliffdf'}>
                       <h1>{item.name}</h1>
                    </div>                
                ))
            }
        </div> 
    );
}

export default SectionTwo;