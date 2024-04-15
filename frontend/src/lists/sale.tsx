import React from "react";
import { useState, useEffect } from "react";

type TypeInitValItems = {
    id: string,
    message: string
}
const initValItems : TypeInitValItems = {
    id: '1',
    message: 'ffdf'
}

let Sale = () => {
    const [discountItems, setDiscountItems] = useState(initValItems)
    const [arrdiscountItems, setArrdiscountItems] = useState([discountItems]) //Нужен ли второй массив?
    useEffect(()=>{
        fetch("/api")
        .then((response) => response.json())
        .then(response => setDiscountItems(response))
    },[])
    console.log(discountItems)

    return(
        <div>
            {discountItems.map((item, index) => {
                return(<ul>
                        <li key={index.toString()}>{item.id}</li>
                </ul>)
            })}
        </div>
        )}

export default Sale
// return (<h1 key={index}>{discountItems[index]}</h1>)