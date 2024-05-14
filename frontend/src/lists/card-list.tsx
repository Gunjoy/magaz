import React, { FC } from "react";
import { Link} from "react-router-dom";
import '../styles/card-list.css'


const CardList = ({data}:any) => {
    return(
        
    <div className="card-list-container">
            <div className="card-list-img-container">
                <img width={150} height={150} src={data.image}></img>
            </div>
            <Link to={`/sale/${data.id}`}>

        <div className="card-list-data-container">
            <div className="card-list-data">
                <h1 className="dataName">{data.name}</h1>
                <h1 className="dataPrice">{data.price} Рублей</h1>
                <h1 className="dataMessage">{data.message}</h1>
            </div>
            
        </div>
            </Link>
    </div>
    )
}
export default CardList;