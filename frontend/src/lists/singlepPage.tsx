import React from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
    const {singltpageItemId} = useParams()
    console.log(useParams(), 'Юзпарамс общей карточки')
    return(
        <div>
            <h1>айди айтема {singltpageItemId}</h1>
        </div>
    )
}
export {SinglePage}