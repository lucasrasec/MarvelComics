import React, { useContext, useEffect } from "react";
import { ListGroup, Button, Modal } from "react-bootstrap";

import { AppContext, AppDispatchContext } from "../../context/appContext";
import ListItem from "./item";
import AppMap from "../Map";

const Cart = ({ isOpen, handleClose }) => {
    const { cart } = useContext(AppContext);
    const dispatcher = useContext(AppDispatchContext);

    
    // function itemRemove(item) {
    //     const items = cart.map((comic, i) => {
    //         if(comic === item){
    //             cart.slice(i, 1)
    //         }
    //     })
    //     dispatcher('cart', items)
    //     console.log(cart);
    // }

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
                                <ListGroup.Item className="d-flex align-items-center justify-content-between">
                                    <ListItem comic={item} />
                                    <Button variant="link" size="sm" /* onClick={() => {itemRemove(item)} }*/ >Remover</Button>
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
                <Button variant="success" style={{ zIndex: 999 }} onClick={() => {alert("Envio Realizado")}}>Envie-me</Button>
            </Modal.Footer>
          </Modal>
      );
}

export default Cart