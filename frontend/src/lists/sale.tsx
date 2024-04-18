import React from "react";
import { useState, useEffect } from "react";
import CardList from "./card-list";
type TypeInitValItems = [{
    id: string,
    name: string,
    price: string,
    message: string,
    image: string
}]
const initValItems : TypeInitValItems = [{
    id: '1',
    name:'ffdf',
    price: '123',
    message: 'ffdf',
    image: 'а'
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
                return(
                <ul className="saled_ui">
                        {/* <li className= 'saled index' key={index.toString()}>{item.id} {item.name} {item.price} {item.message}</li> */}
                        <CardList data = {item}></CardList>
                </ul>)
            })}
        </div>
        )}

export default Sale

// Не работают пропсы