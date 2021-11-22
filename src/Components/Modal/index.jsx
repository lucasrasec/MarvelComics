import React, { useContext } from "react";
import { Modal, Button, Container, Row } from "react-bootstrap";

import { AppContext, AppDispatchContext } from "../../context/appContext";


const AppModal = ({ size, isOpen, handleClose, title, hasFooter = false, buttonLabel, children }) => {
    return (  
        <Modal 
            show={isOpen} 
            onHide={handleClose}
            size={size}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{ title }</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    { children }
                </Modal.Body>

                {hasFooter && <Modal.Footer>
                    <Button variant="success">{ buttonLabel || "Salvar" }</Button>
                </Modal.Footer>}
            </Modal.Dialog>
        </Modal>
    )
}

export default AppModal;