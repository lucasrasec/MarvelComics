import React, { useEffect } from 'react';
import list from "../data/List"

const Card = ({ comic }) => {

    const remove = () => {
        list.map(item => {
            if (item.id === comic.id) {
                list.pop(item)
            }
        })
        console.log(list)
    }

    return (
        <div className="card">
            <p>{comic.title}</p>
            <button className="btn"
                onClick={remove}>Remover</button>
        </div>
    )
}

export default Card