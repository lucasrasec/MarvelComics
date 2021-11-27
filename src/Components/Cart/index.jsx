import React from "react";
import { ListGroup, Button, Modal } from "react-bootstrap";

import List from "./list"
import AppMap from "../Map";

const Cart = ({ isOpen, handleClose }) => {
    return (
        <Modal size="lg" show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Carrinho</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup variant="flush">
                    <List />
                </ListGroup>
            </Modal.Body>
            <hr />
            <div className="map-wrapper">
                <AppMap />
            </div>
            <Modal.Footer>
                <Button variant="success" style={{ zIndex: 999 }} onClick={() => { alert("Envio Realizado") }}>Envie-me</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Cart;