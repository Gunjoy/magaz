import React, { FC } from "react";
import '../styles/card-list.css'

const CardList = ({data}:any) => {
    console.log(data.image,'КАРТИИНКА')
    return(
    <div className="card-list-container">
            <div className="card-list-img-container">
                <img height={180} src={data.iamge}></img>
            </div>
        <div className="card-list-data-container">
            <div className="card-list-data">
                <h1 className="dataName">{data.name}</h1>
                <h1 className="dataPrice">{data.price}</h1>
                <h1 className="dataMessage">{data.message}</h1>
            </div>
            
        </div>
    </div>
    )
}
export default CardList;