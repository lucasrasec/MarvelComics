import React, { useEffect } from "react";
import list from "../data/List";

import Card from "./Card"

const CardComponent = ({ change }) => {
    return (
        <div className="cartShow">
            {
                list.map(item => (
                    <Card comic={item} />
                    /* console.log(item) */
                ))
            }
            <button className="close"
                onClick={change}>X</button>
            <button className="send">Enviar</button>
        </div>
    )
}

export default CardComponent