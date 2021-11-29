import React, { useContext } from "react";
import { ListGroup, Button } from "react-bootstrap";
import ListItem from "./item"

import { CartContext, CartDispatchContext } from "../../context/CartContext";

const List = () => {
    const cart = useContext(CartContext)
    const dispatcher = useContext(CartDispatchContext)

    const remove = (item) => {
        dispatcher(item, 'remove')
    }

    if (!cart.length) return <h2>Carrinho vazio</h2>

    return cart.map(item => {
        return (
            <ListGroup.Item className="d-flex align-items-center justify-content-between" key={item.id}>
                <ListItem comic={item} />
                <Button variant="link" size="sm" onClick={() => remove(item)} >Remover</Button>
            </ListGroup.Item>
        )
    })
}

export default List;