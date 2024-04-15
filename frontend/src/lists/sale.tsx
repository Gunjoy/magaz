import React from "react";
import { useState, useEffect } from "react";

type TypeInitValItems = [{
    id: string,
    name: string,
    price: string,
    message: string
}]
const initValItems : TypeInitValItems = [{
    id: '1',
    name:'ffdf',
    price: '123',
    message: 'ffdf'
}]

let Sale = () => {
    const [discountItems, setDiscountItems] = useState(initValItems)
    
    useEffect(()=>{
        fetch("/api")
        .then((response) => response.json())
        .then(response => setDiscountItems(response))
    },[])
    console.log(discountItems)

    return(
        <div className="saled_contaner">
            {discountItems.map((item, index) => {
                return(<ul className="saled_ui">
                        <li className= 'saled index' key={index.toString()}>{item.id} {item.name} {item.price} {item.message}</li>
                </ul>)
            })}
        </div>
        )}

export default Sale

// Нужно сделать отдельный компонент для того чтобы мапать массив.