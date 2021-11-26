import React from "react";
import { Modal } from "react-bootstrap";


const ComicDetails = ({ comic, isOpen, handleClose }) => {
    const title = comic.title
    const description = comic.description || "Descrição não disponivel"

    return (
          <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{description}</Modal.Body>
          </Modal>
      );
}

export default ComicDetails;