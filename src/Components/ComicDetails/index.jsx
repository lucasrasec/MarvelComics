import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";

import { AppContext } from "../../context/appContext";


const ComicDetails = ({ comic, isOpen, handleClose }) => {
    const img = comic.thumbnail.path + "/portrait_incredible." + comic.thumbnail.extension
    const title = comic.title
    const description = comic.description || "Descrição não disponivel"

    return (
        <>
          <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{description}</Modal.Body>
          </Modal>
        </>
      );
}

export default ComicDetails;