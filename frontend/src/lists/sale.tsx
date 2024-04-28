import React from "react";
import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
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
        fetch("/sale")
        .then((response) => response.json())
        .then(response => setDiscountItems(response))
    },[])
    console.log(discountItems)

    return(
        <div className="saled_contaner">
            {discountItems.map((item, index) => {
                return(
                <ul className="saled_ui">
                        
                        <CardList data = {item} key= {item.id}></CardList>
                        
                </ul>)
            })}
        </div>
        )}

export default Sale

// Не работают пропсы