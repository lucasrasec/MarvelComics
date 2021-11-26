import React, { useContext, useEffect } from "react";
import { ListGroup, Button, Modal } from "react-bootstrap";
import ListItem from "./item"

import AppMap from "../Map";
import { AppContext } from "../../context/appContext";

const Cart = ({ isOpen, handleClose }) => {
    const { selection } = useContext(AppContext)
    let cart = selection

    const remove = (item) => {
        const i = cart.indexOf(item)
        cart.splice(i, 1)
        alert("Item Removido")
        console.log(cart);
    }


    return (
        <Modal size="lg" show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Carrinho</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup variant="flush">
                    {
                        cart.length ? cart.map(item => {
                            return (
                                <ListGroup.Item className="d-flex align-items-center justify-content-between" key={item.id}>
                                    <ListItem comic={item} />
                                    <Button variant="link" size="sm" onClick={() => remove(item)} >Remover</Button>
                                </ListGroup.Item>
                            )
                        }) : <p>Carrinho vazio</p>
                    }
                </ListGroup>

            </Modal.Body>
            <hr />
            <div class="map-wrapper">
                <AppMap />
            </div>
            <Modal.Footer>
                <Button variant="success" style={{ zIndex: 999 }} onClick={() => { alert("Envio Realizado") }}>Envie-me</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Cart